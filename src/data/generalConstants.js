import { convertToDisplayValue } from "./pizzaConstants";

const MEDIUM = 1150;
const LARGE = 1650;
const REG_CRUST = 0;
const MD_GF_CRUST = 200;
const LG_GF_CRUST = 300;

const convertPizzaSizeDisplayValue = (value) => {
  return `$${(value / 100).toFixed(2)}`;
};

export const pizzaSize = [
  {
    id: 1,
    name: "Medium (12-inch)",
    value: MEDIUM,
    displayValue: convertPizzaSizeDisplayValue(MEDIUM),
    active: false,
    disabled: false,
  },
  {
    id: 2,
    name: "Large (16-inch)",
    value: LARGE,
    displayValue: convertPizzaSizeDisplayValue(LARGE),
    active: false,
    disabled: false,
  },
];

export const crustType = [
  {
    id: 1,
    name: "Regular",
    mdValue: REG_CRUST,
    lgValue: REG_CRUST,
    mdDisplayValue: convertToDisplayValue(REG_CRUST),
    lgDisplayValue: convertToDisplayValue(REG_CRUST),
    active: false,
    disabled: false,
  },
  {
    id: 2,
    name: "Gluten-free",
    mdValue: MD_GF_CRUST,
    lgValue: LG_GF_CRUST,
    mdDisplayValue: convertToDisplayValue(MD_GF_CRUST),
    lgDisplayValue: convertToDisplayValue(LG_GF_CRUST),
    active: false,
    disabled: false,
  },
];
