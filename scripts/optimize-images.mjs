import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';
import sharp from 'sharp';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const CONFIG = {
  // Input directories (relative to project root)
  inputDirs: [
    'public/images',
  ],
  // Output directories (relative to project root)
  outputDir: 'public/optimized-images',
  // Image formats to process
  formats: [
    { ext: 'webp', quality: 80 },
    { ext: 'avif', quality: 60 },
  ],
  // Image sizes to generate (width in pixels)
  sizes: [
    { width: 640, suffix: '-sm' },
    { width: 1024, suffix: '-md' },
    { width: 1600, suffix: '-lg' },
  ],
  // Supported input file extensions
  supportedExtensions: ['.jpg', '.jpeg', '.png', '.webp'],
};

// Process a single image file
async function processImage(filePath, outputDir) {
  const fileExt = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath, fileExt);
  const fileDir = path.dirname(filePath);
  
  // Create output directory structure
  const relativeDir = path.relative(process.cwd(), fileDir);
  const outputPath = join(process.cwd(), outputDir, relativeDir);
  
  try {
    await fs.mkdir(outputPath, { recursive: true });
    
    // Process each size and format
    for (const size of CONFIG.sizes) {
      for (const format of CONFIG.formats) {
        const outputFile = join(
          outputPath,
          `${fileName}${size.suffix}.${format.ext}`
        );
        
        await sharp(filePath)
          .resize({
            width: size.width,
            withoutEnlargement: true,
          })
          [format.ext]({ quality: format.quality })
          .toFile(outputFile);
          
        console.log(`Created: ${outputFile}`);
      }
    }
    
    // Create original format in output directory
    const originalOutput = join(outputPath, `${fileName}${path.extname(filePath)}`);
    await fs.copyFile(filePath, originalOutput);
    console.log(`Copied original: ${originalOutput}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process all images in a directory
async function processDirectory(dir) {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = join(dir, file.name);
      
      if (file.isDirectory()) {
        await processDirectory(filePath);
      } else if (CONFIG.supportedExtensions.includes(path.extname(file.name).toLowerCase())) {
        await processImage(filePath, CONFIG.outputDir);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }
}

// Main function
async function main() {
  console.log('Starting image optimization...');
  
  // Process all input directories
  for (const dir of CONFIG.inputDirs) {
    const fullPath = join(process.cwd(), dir);
    console.log(`Processing directory: ${fullPath}`);
    await processDirectory(fullPath);
  }
  
  console.log('Image optimization complete!');
}

// Run the script
main().catch(console.error);
