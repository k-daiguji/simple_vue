export interface Theme {
  get class(): string;
}

export const themeKey = {
  primary: "themePrimary",
} as const;
