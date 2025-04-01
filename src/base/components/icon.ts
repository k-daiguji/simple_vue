export type Icon = (typeof Icon)[keyof typeof Icon];

export const Icon = {
  restartAlt: "restart_alt",
  zoomIn: "zoom_in",
  zoomOut: "zoom_out",
} as const;
