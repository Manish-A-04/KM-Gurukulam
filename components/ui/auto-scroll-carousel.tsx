'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

export interface AutoScrollCarouselProps {
  images: GalleryImage[];
  autoScrollInterval?: number;
  className?: string;
  showControls?: boolean;
  showProgress?: boolean;
  showDots?: boolean;
  pauseOnHover?: boolean;
}

const AutoScrollCarousel = React.forwardRef<
  HTMLDivElement,
  AutoScrollCarouselProps
>(({
  images,
  autoScrollInterval = 4000,
  className,
  showControls = true,
  showProgress = true,
  showDots = true,
  pauseOnHover = true,
  ...props
}, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPlaying || (pauseOnHover && isHovered) || images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [isHovered, isPlaying, images.length, autoScrollInterval, pauseOnHover]);

  // Progress bar animation
  useEffect(() => {
    if (!isPlaying || (pauseOnHover && isHovered) || images.length <= 1) {
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (autoScrollInterval / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isHovered, isPlaying, autoScrollInterval, pauseOnHover]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setProgress(0);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === ' ') {
        event.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, togglePlayPause]);

  if (!images.length) {
    return (
      <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
        <p className="text-muted-foreground">No images to display</p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-lg bg-background shadow-lg group',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Main carousel container */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px]">
        {/* Image container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Image content */}
              {(image.title || image.caption) && (
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  {image.title && (
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 drop-shadow-lg">
                      {image.title}
                    </h3>
                  )}
                  {image.caption && (
                    <p className="text-sm md:text-base lg:text-lg opacity-90 drop-shadow-md">
                      {image.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation controls */}
        {showControls && images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Play/Pause button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'bg-white scale-110 shadow-lg'
                  : 'bg-white/50 hover:bg-white/70 hover:scale-105'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {showProgress && images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0">
          <Progress 
            value={progress} 
            className="h-1 rounded-none bg-black/20"
          />
        </div>
      )}

      {/* Image counter */}
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
});

AutoScrollCarousel.displayName = 'AutoScrollCarousel';

export { AutoScrollCarousel };