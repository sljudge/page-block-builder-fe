import { BackgroundColor } from '@/types';
import cx from '@/utils/cx';

import './styles.css';

export type TextContentProps = {
  children: string;
  className?: string;
  colorScheme?: BackgroundColor;
  testId?: string;
};

export const headers = [
  '[&_h2]:text-title-xl [&_h2]:mb-md',
  '[&_h3]:text-title-lg [&_h3]:mb-sm',
  '[&_h4]:text-title-md [&_h4]:mb-xs',
  '[&_h5]:text-title-md [&_h5]:mb-xs'
];

export const text = ['[&_p:not(:last-child)]:mb-xs'];

export const lists = ['[&_ol]:my-md [&_ul]:my-md', '[&_ol]:list-decimal [&_ol]:list-inside'];

export function links(colorScheme: BackgroundColor) {
  return cx(
    '[&_a]:underline [&_a]:text-cta',
    colorScheme === 'invert' ? '[&_a]:text-invert' : '[&_a]:text-cta'
  );
}

export const horizontalRule = '[&_hr]:my-lg';

export const TextContent = ({
  children,
  className,
  colorScheme = BackgroundColor.primary,
  testId
}: TextContentProps) => {
  return (
    <div
      data-testid={testId}
      dangerouslySetInnerHTML={{ __html: children }}
      className={cx(
        'mx-auto max-w-[900px]',
        headers,
        text,
        lists,
        horizontalRule,
        links(colorScheme),
        className
      )}
    />
  );
};
