import { Capitalize } from "./Capitalize";
import { HasNumber } from "./HasNumber";
import { HasSymbol } from "./HasSymbol";
import { HasUppercaseLetter } from "./HasUppercaseLetter";

export const StringUtils = {
  hasNumber: HasNumber,
  hasSymbol: HasSymbol,
  hasUppercase: HasUppercaseLetter,
  capitalize: Capitalize
}