import * as stylex from '@stylexjs/stylex';

import { globalTokens as $, spacing, text } from '@/styles/globalTokens.stylex';

export const styles = stylex.create({
  base: {
    textTransform: 'uppercase',
    borderRadius: spacing.xxxs,
    fontWeight: 600,
    outline: '0 none',
    border: '0 none',
  },
});

export const variants = stylex.create({
  primary: {
    backgroundColor: 'teal',
    color: `hsl(${$.whiteH}, ${$.whiteS}, ${$.whiteL})`,
  },
  destructive: {
    backgroundColor: 'red',
    color: 'white',
  },
});

export const sizes = stylex.create({
  default: {
    fontSize: text.sm,
    paddingInline: 20,
    paddingBlock: 10,
    lineHeight: 1.5,
  },
  sm: {
    fontSize: text.xs,
    paddingInline: 20,
    paddingBlock: 8,
    lineHeight: 1.5,
  },
  lg: {
    fontSize: text.p,
    paddingInline: 32,
    paddingBlock: 12,
    lineHeight: 1,
  },
});
