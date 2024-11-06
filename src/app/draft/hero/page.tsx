import { draftMode } from 'next/headers';

import Hero from '@/components/Hero';
import { getHero } from '@/services/directus';
import { BackgroundColor, XAxisAlign, YAxisAlign } from '@/types';

type HeroPreviewProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function HeroPreview({ searchParams }: HeroPreviewProps) {
  const { isEnabled } = draftMode();
  const hero = await getHero(searchParams.version?.toString());

  if (!isEnabled) {
    return <>Draft mode is not enabled</>;
  }

  return (
    <Hero
      header={hero.header}
      imgSrc={hero.image}
      text={hero.text}
      alignX={hero.align_x as XAxisAlign}
      alignY={hero.align_y as YAxisAlign}
      colorScheme={hero.color_scheme.key as BackgroundColor}
    />
  );
}
