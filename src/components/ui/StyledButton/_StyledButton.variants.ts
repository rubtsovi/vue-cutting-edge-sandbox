import { cva } from 'class-variance-authority';

import { tw } from '@/utils';

const buttonVariants = cva(
  [
    tw`relative inline-flex items-center justify-center rounded font-bold transition`,
    tw`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`,
    tw`disabled:pointer-events-none disabled:cursor-not-allowed`,
  ],
  {
    variants: {
      variant: {
        primary: tw`bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary-active disabled:bg-primary-disabled active:bg-primary-active`,
        'primary-outline': [
          tw`border-2 border-primary text-primary bg-white hover:bg-primary/10`,
          tw`focus-visible:border-primary-active active:bg-primary/20 focus-visible:ring-0 focus-visible:bg-primary/10`,
        ],
        ghost: [
          tw`bg-transparent border-2 border-transparent text-black hover:bg-gray-light focus-visible:border-black active:bg-gray-light`,
          tw`focus-visible:bg-gray-extraLight disabled:opacity-55 focus-visible:ring-0`,
        ],
        destructive: tw`bg-destructive text-white hover:bg-destructive-hover focus-visible:ring-destructive-active disabled:bg-destructive-disabled active:bg-destructive-active`,
        'destructive-outline': [
          tw`border-2 border-destructive text-destructive bg-white hover:bg-destructive/10`,
          tw`focus-visible:border-destructive-active active:bg-destructive/20 focus-visible:ring-0 focus-visible:bg-destructive/10`,
        ],
      },
      size: {
        normal: tw`px-6 h-10`,
        small: tw`px-4 h-7 text-sm`,
        icon: tw`h-10 w-10 rounded-full`,
        'icon-small': tw`h-7 w-7 rounded-full`,
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'normal',
    },
  }
);

export default buttonVariants;
