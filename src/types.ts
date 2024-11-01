import { z } from 'zod';

export const BackgroundColorSchema = z.enum(['primary', 'secondary', 'invert']);

export enum BackgroundColor {
  primary = 'primary',
  secondary = 'secondary',
  invert = 'invert'
}
