declare type EnumLikeValues<T> = T[keyof T];

declare type NotEmptyArray<T> = [T, ...T[]];

declare type ArrayItem<T> = T extends (infer I)[] ? I : never;

declare type KebabCase<T extends string, Prefix extends string = ''> = T extends `${infer First}${infer Rest}`
  ? KebabCase<
      Rest,
      `${Prefix}${First extends Uppercase<First> ? (Prefix extends '' ? '' : '-') : ''}${Lowercase<First>}`
    >
  : Prefix;

declare type KeysByPrefix<T, Prefix extends string = ''> = keyof {
  [Key in keyof T as Key extends `${Prefix}${string}` ? Key : never]: Key;
};

declare type KeysBySuffix<T, Suffix extends string = ''> = keyof {
  [Key in keyof T as Key extends `${string}${Suffix}` ? Key : never]: Key;
};

declare type ExtractByPrefix<T, Prefix extends string = ''> = keyof {
  [Key in keyof T as Key extends `${Prefix}${infer WithoutPrefix}` ? WithoutPrefix : never]: Key;
};

declare type ExtractBySuffix<T, Suffix extends string = ''> = keyof {
  [Key in keyof T as Key extends `${infer WithoutSuffix}${Suffix}` ? WithoutSuffix : never]: Key;
};
