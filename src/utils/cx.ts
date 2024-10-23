import { cx as clacx, type CxOptions } from 'class-variance-authority';
import { extendTailwindMerge } from 'tailwind-merge';

import {
  BACKGROUND_COLORS,
  BORDER_RADIUS,
  OUTLINE_COLORS,
  OUTLINE_WIDTHS,
  SPACING,
  TEXT_COLORS,
  TYPOGRAPHY,
  fromNested
} from '@/../tailwind.config';

export const customTwMerge = extendTailwindMerge({
  override: {
    theme: {
      borderWidth: Object.keys(OUTLINE_WIDTHS),
      borderRadius: Object.keys(BORDER_RADIUS),
      borderColor: Object.keys(OUTLINE_COLORS)
    },
    classGroups: {
      'font-size': [{ text: Object.keys(fromNested(TYPOGRAPHY)) }],
      'text-color': [{ text: Object.keys(TEXT_COLORS) }],
      'outline-w': [{ outline: Object.keys(OUTLINE_WIDTHS) }],
      'bg-color': [{ bg: Object.keys(BACKGROUND_COLORS) }]
    }
  },
  extend: {
    theme: {
      spacing: [{ spacing: Object.keys(SPACING) }]
    }
  }
});

function cx(...inputs: CxOptions) {
  return customTwMerge(clacx(inputs));
}

export default cx;
