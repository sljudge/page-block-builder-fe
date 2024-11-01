import { BackgroundColor } from '@/types';
import cx from '@/utils/cx';

import './styles.css';

export type TextContentProps = {
  children: string;
  className?: string;
  colorScheme?: BackgroundColor;
};

export const headers = [
  '[&_h2]:text-title-xl [&_h2]:mb-md',
  '[&_h3]:text-title-lg [&_h3]:mb-sm',
  '[&_h4]:text-title-md [&_h4]:mb-xs',
  '[&_h5]:text-title-md [&_h5]:mb-xs'
];

const text = ['[&_p]:mb-xs'];

const lists = ['[&_ol]:my-md [&_ul]:my-md', '[&_ol]:list-decimal [&_ol]:list-inside'];

function links(colorScheme: BackgroundColor) {
  return cx(
    '[&_a]:underline [&_a]:text-cta',
    colorScheme === 'invert' ? '[&_a]:text-invert' : '[&_a]:text-cta'
  );
}

const horizontalRule = '[&_hr]:my-lg';

const blockquote = '[&_blockquote:after]:text-highlight [&_blockquote:before]:text-highlight';

export const TextContent = ({
  children,
  className,
  colorScheme = BackgroundColor.primary
}: TextContentProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: children }}
      className={cx(
        'mx-auto max-w-[900px]',
        headers,
        text,
        lists,
        horizontalRule,
        links(colorScheme),
        blockquote,
        className
      )}
    />
  );
};
