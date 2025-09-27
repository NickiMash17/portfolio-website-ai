import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
}) => {
  // Extract the base path and extension
  const basePath = src.substring(0, src.lastIndexOf('.')) || src;
  const extension = src.substring(src.lastIndexOf('.') + 1);
  
  // Generate srcSet for WebP
  const webpSrcSet = [640, 768, 1024, 1366, 1600, 1920]
    .map(width => `/images/optimized/${basePath.split('/').pop()}@${width}w.webp ${width}w`)
    .join(', ');
    
  // The final fallback image should be the original source
  const fallbackSrc = src;

  // Get the largest size for the src attribute
  const largestWebPSrc = `/images/optimized/${basePath.split('/').pop()}.webp`;

  return (
    <>
      {priority && (
        <Helmet>
          <link
            rel="preload"
            as="image"
            href={largestWebPSrc}
            imageSrcSet={webpSrcSet}
            imageSizes="100vw"
          />
        </Helmet>
      )}
      <picture>
        <source
          type="image/webp"
          srcSet={webpSrcSet}
          sizes="100vw"
        />
        <img
          src={fallbackSrc} // Use the original src as the final fallback
          alt={alt}
          className={className}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </picture>
    </>
  );
};

export default OptimizedImage;
