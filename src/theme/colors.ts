import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#19D6AD",
  primaryBright: "#ACE0CD",
  primaryDark: "#ACE0CD",
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
  textDisabled: "#ACE0CD",
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
  input: "#255c5f",
  primaryDark: "#19D6AD",
  tertiary: "#1C4346",
  text: "#19D6AD",
  textDisabled: "#ACE0CD",
  textSubtle: "#366061",
  borderColor: "#1bd6ad",
  card: "#001821",
  modal: "#1C4346",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
