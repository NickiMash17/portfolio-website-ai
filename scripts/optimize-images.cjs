const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGE_DIR = path.join(PUBLIC_DIR, 'images');
const QUALITY = 80;
const WIDTHS = [640, 768, 1024, 1366, 1600, 1920];

// Create optimized versions of images
async function optimizeImages() {
  try {
    // Create optimized directory if it doesn't exist
    const optimizedDir = path.join(IMAGE_DIR, 'optimized');
    if (!fs.existsSync(optimizedDir)) {
      fs.mkdirSync(optimizedDir, { recursive: true });
    }

    // Process each image
    const files = fs.readdirSync(IMAGE_DIR).filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    for (const file of files) {
      const filePath = path.join(IMAGE_DIR, file);
      const fileName = path.parse(file).name;
      const ext = path.extname(file).toLowerCase();
      
      // Skip already processed files
      if (file.includes('@') || file.includes('optimized/')) continue;

      console.log(`Processing ${file}...`);
      
      // Create WebP and responsive versions
      for (const width of WIDTHS) {
        const outputFile = path.join(
          optimizedDir,
          `${fileName}@${width}w.webp`
        );

        await sharp(filePath)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toFile(outputFile);
      }

      // Create original WebP version
      await sharp(filePath)
        .webp({ quality: QUALITY })
        .toFile(path.join(optimizedDir, `${fileName}.webp`));
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
