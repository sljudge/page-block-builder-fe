import { z } from 'zod';

export const BackgroundColorSchema = z.enum(['primary', 'secondary', 'invert']);

export enum BackgroundColor {
  primary = 'primary',
  secondary = 'secondary',
  invert = 'invert'
}

export const XAxisAlignSchema = z.enum(['left', 'center', 'right']);
export enum XAxisAlign {
  left = 'left',
  center = 'center',
  right = 'right'
}

export const YAxisAlignSchema = z.enum(['top', 'center', 'bottom']);
export enum YAxisAlign {
  top = 'top',
  center = 'center',
  bottom = 'bottom'
}
