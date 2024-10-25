import type { Config } from 'tailwindcss';

/*****************************************
 * VARS
 *****************************************/

export const SCREENS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};

export const COLORS = {
  blue: '#639383',
  coral: '#E8998D',
  pink: '#FCF1EF',
  white: '#FBF7F4',
  brown: '#3A1F04',
  black: '#111810',
  red: '#C21807',
  orange: '#AA4C02'
};

export const BACKGROUND_COLORS = {
  primary: COLORS.white,
  secondary: COLORS.pink,
  invert: COLORS.brown,
  cta: COLORS.blue,
  highlight: COLORS.orange,
  negative: COLORS.red
};

export const TEXT_COLORS = {
  primary: COLORS.black,
  secondary: COLORS.brown,
  invert: COLORS.white,
  negative: COLORS.red,
  cta: COLORS.blue,
  highlight: COLORS.orange
};

export const OUTLINE_COLORS = {
  primary: COLORS.brown,
  secondary: COLORS.black,
  invert: COLORS.white,
  cta: COLORS.blue,
  'cta-secondary': COLORS.coral,
  highlight: COLORS.orange,
  transparent: 'rgba(0,0,0,0)',
  negative: COLORS.red
};

export const OUTLINE_WIDTHS = {
  lg: '4px',
  md: '2px',
  sm: '1px',
  0: '0px'
};

export const BORDER_RADIUS = {
  full: '120px',
  lg: '16px',
  md: '12px',
  sm: '8px',
  xs: '4px',
  0: '0px'
};

export const SPACING = {
  xxxl: '80px',
  xxl: '64px',
  xl: '40px',
  lg: '32px',
  md: '24px',
  sm: '16px',
  xs: '8px',
  xxs: '4px',
  xxxs: '2px',
  0: '0px'
};

export const TYPOGRAPHY = {
  title: {
    xxl: ['90px', { letterSpacing: '-0.03em', lineHeight: '1.2em' }],
    xl: ['50px', { letterSpacing: '-0.03em', lineHeight: '1.2em' }],
    lg: ['38px', { letterSpacing: '-0.01em', lineHeight: '1.4em' }],
    md: ['28px', { letterSpacing: '-0.01em', lineHeight: '1.4em' }],
    sm: ['22px', { letterSpacing: '-0.01em', lineHeight: '1.4em' }],
    xs: ['20px', { letterSpacing: '-0.01em', lineHeight: '1.4em' }]
  },
  body: {
    xl: ['18px', { letterSpacing: '0.03em', lineHeight: '1.6em' }],
    lg: ['16px', { letterSpacing: '0.03em', lineHeight: '1.6em' }],
    md: ['14px', { letterSpacing: '0.03em', lineHeight: '1.6em' }],
    sm: ['12px', { letterSpacing: '0.03em', lineHeight: '1.6em' }],
    xs: ['10px', { letterSpacing: '0.03em', lineHeight: '1.6em' }]
  }
};

/*****************************************
 * UTILS
 *****************************************/
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function fromNested<T extends Record<string, any>>(dict: Record<string, T>) {
  return Object.fromEntries(
    Object.keys(dict).flatMap((typeKey) => {
      const subDict = dict[typeKey as keyof typeof TYPOGRAPHY];
      return Object.keys(subDict).map((valKey) => [
        `${typeKey}-${valKey}`,
        subDict[valKey as keyof typeof subDict]
      ]);
    })
  ) as T;
}

/*****************************************
 * CONFIG
 *****************************************/
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: Object.fromEntries(
      Object.keys(SCREENS).map((screen) => [screen, `${SCREENS[screen as keyof typeof SCREENS]}px`])
    ),
    container: {
      padding: {
        DEFAULT: SPACING.sm,
        ...Object.fromEntries(
          Object.keys(SCREENS).map((screen) => [screen, SPACING[screen as keyof typeof SPACING]])
        )
      }
    },
    colors: COLORS,
    backgroundColor: BACKGROUND_COLORS,
    fill: BACKGROUND_COLORS,
    textColor: TEXT_COLORS,
    borderColor: OUTLINE_COLORS,
    outlineColor: OUTLINE_COLORS,
    borderWidth: OUTLINE_WIDTHS,
    outlineWidth: OUTLINE_WIDTHS,
    borderRadius: BORDER_RADIUS,
    spacing: SPACING,
    fontSize: fromNested<Config['fontSize']>(TYPOGRAPHY)
  },
  plugins: []
};
export default config;
