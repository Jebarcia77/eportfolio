// TODO
import { createContext, useContext } from "react";

export type ThemeContextProps = {
  theme: string;
  setTheme: (theme: any) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "mytheme",
  setTheme: () => {},
});

export const useTheme = () => {
  return useContext<ThemeContextProps>(ThemeContext);
};
