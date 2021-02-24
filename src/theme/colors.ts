import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#19D6AD",
  primaryBright: "#4bffe4",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#ACE0CD",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  modal: "#1C4346",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#19D6AD",
  background: "#00111A",
  backgroundDisabled: "#031a1d",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#A7BEB1",
  primaryDark: "#19D6AD",
  tertiary: "#1C4346",
  text: "#19D6AD",
  textDisabled: "#ACE0CD",
  textSubtle: "#366061",
  borderColor: "#524B63",
  card: "#001821",
  modal: "#1C4346",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
