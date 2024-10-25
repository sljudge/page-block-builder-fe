import cx from '@/utils/cx';

export type TextContentProps = { children: string };

const headers = [
  '[&_h2]:text-title-xl [&_h2]:mb-md',
  '[&_h3]:text-title-lg [&_h3]:mb-sm',
  '[&_h4]:text-title-md [&_h4]:mb-xs'
];

const text = ['[&_p]:mb-xs'];

const lists = ['[&_ol]:my-md [&_ul]:my-md', '[&_ol]:list-decimal [&_ol]:list-inside'];

const links = '[&_a]:underline [&_a]:text-cta';

const horizontalRule = '[&_hr]:my-lg';

export const TextContent = ({ children }: TextContentProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: children }}
      className={cx('max-w-[800px]', headers, text, lists, horizontalRule, links)}
    />
  );
};
