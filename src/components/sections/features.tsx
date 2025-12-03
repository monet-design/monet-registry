'use client';

import { Layers, SwatchBook } from 'lucide-react';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { Section } from '../ui/section';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  isSmall?: boolean;
  className?: string;
}

interface FeaturesProps {
  title?: string;
  description?: string;
  cards?: FeatureCardProps[];
  className?: string;
}

const defaultCards: FeatureCardProps[] = [
  {
    title: 'Ask changes',
    description: 'Get realtime updates instantly',
    image: {
      src: 'https://picsum.photos/600/400?random=1',
      alt: 'Ask for changes',
    },
  },
  {
    title: 'Upload images',
    description: 'Upload your logo, product images easily',
    image: {
      src: 'https://picsum.photos/600/400?random=2',
      alt: 'Upload interface',
    },
  },
  {
    title: 'Brand Kit',
    description:
      'Drop your logo and colors once to automatically apply them everywhere.',
    icon: <SwatchBook className="h-6 w-6 text-primary" />,
    isSmall: true,
  },
  {
    title: 'Fully Editable',
    description: 'We generate editable layer-based designs.',
    icon: <Layers className="h-6 w-6 text-primary" />,
    isSmall: true,
  },
];

export default function Features({
  title = 'Features',
  description = 'Powerful tools to enhance your creative workflow',
  cards = defaultCards,
  className,
}: FeaturesProps) {
  return (
    <Section className={cn('w-full bg-white', className)}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-medium text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {cards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  image,
  isSmall = false,
  className,
}: FeatureCardProps) {
  if (isSmall) {
    return (
      <div
        className={cn(
          'group relative flex min-h-[200px] flex-col justify-center overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5',
          className
        )}
      >
        <div className="relative z-10">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-105">
            {icon}
          </div>
          <h3 className="mb-2 text-2xl font-bold text-gray-900">{title}</h3>
          <p className="font-medium leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-colors duration-500 group-hover:bg-primary/20 opacity-50" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'group relative flex min-h-[340px] flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 md:p-10',
        className
      )}
    >
      <div className="relative z-10 mb-8">
        <h3 className="mb-3 text-3xl font-bold text-gray-900">{title}</h3>
        <p className="font-medium text-lg text-gray-600">{description}</p>
      </div>

      {image && (
        <div className="relative mt-auto flex-1">
          <div className="absolute top-0 left-1/2 w-[110%] -translate-x-1/2 transform transition-transform duration-500 group-hover:translate-y-[-4px] md:w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
