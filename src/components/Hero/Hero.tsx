import cx from '@/utils/cx';

export type HeroProps = {
  imgSrc: string;
  header: string;
  text?: string;
  alignX?: 'left' | 'center' | 'right';
  alignY?: 'top' | 'center' | 'bottom';
  colorScheme?: 'primary' | 'secondary' | 'invert';
};

export const Hero = ({
  header,
  imgSrc,
  text,
  alignX = 'right',
  alignY = 'center',
  colorScheme = 'primary'
}: HeroProps) => {
  return (
    <div
      style={{ backgroundImage: `url('${imgSrc}')` }}
      className={cx(
        'flex h-[50vh] bg-secondary bg-cover bg-center bg-no-repeat py-xl sm:h-[75vh]',
        {
          'justify-start': alignX === 'left',
          'justify-center': alignX === 'center',
          'justify-end': alignX === 'right',
          'items-start': alignY === 'top',
          'items-center': alignY === 'center',
          'items-end': alignY === 'bottom'
        }
      )}
    >
      <div
        className={cx('hidden p-xl sm:block md:p-xxl', {
          'bg-primary/90 text-primary': colorScheme === 'primary',
          'bg-secondary/90 text-secondary': colorScheme === 'secondary',
          'bg-invert/90 text-invert': colorScheme === 'invert'
        })}
      >
        <h1 className="md:text-title-xxl sm:text-title-xl leading-tight">{header}</h1>
        {text && (
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            className="hidden text-body-lg leading-relaxed md:block md:text-title-xs"
          />
        )}
      </div>
    </div>
  );
};
