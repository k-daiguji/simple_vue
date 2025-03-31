export type Theme = (typeof Theme)[keyof typeof Theme];

export const Theme = {
  primary: "theme-primary",
} as const;
