'use client';

import React from 'react';
import { AutoScrollCarousel, type GalleryImage } from '@/components/ui/auto-scroll-carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GalleryStats {
  number: string;
  label: string;
  description?: string;
}

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
  stats?: GalleryStats[];
  showStats?: boolean;
  autoScrollInterval?: number;
  className?: string;
}

const defaultStats: GalleryStats[] = [
  { 
    number: "500+", 
    label: "Images",
    description: "Curated collection"
  },
  { 
    number: "50+", 
    label: "Categories",
    description: "Diverse themes"
  },
  { 
    number: "1M+", 
    label: "Views",
    description: "Monthly engagement"
  },
  { 
    number: "4.9★", 
    label: "Rating",
    description: "User satisfaction"
  }
];

const GallerySection: React.FC<GallerySectionProps> = ({
  title = "Visual Stories",
  subtitle = "Discover our curated collection of inspiring visuals that showcase creativity, innovation, and the beauty of design.",
  images,
  stats = defaultStats,
  showStats = true,
  autoScrollInterval = 4000,
  className = ""
}) => {
  if (!images.length) {
    return (
      <section className={`py-16 bg-gradient-to-br from-background to-muted/20 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              No images available at the moment. Please check back later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-gradient-to-br from-background via-muted/5 to-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-sm font-medium">
              Gallery
            </Badge>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {title}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Auto-Scrolling Gallery */}
        <div className="mb-16">
          <AutoScrollCarousel 
            images={images}
            autoScrollInterval={autoScrollInterval}
            className="max-w-6xl mx-auto"
            showControls={true}
            showProgress={true}
            showDots={true}
            pauseOnHover={true}
          />
        </div>

        {/* Gallery Stats */}
        {showStats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Use keyboard arrows to navigate, spacebar to pause/play, or simply hover to explore at your own pace.
          </p>
        </div>
      </div>
    </section>
  );
};

export { GallerySection };