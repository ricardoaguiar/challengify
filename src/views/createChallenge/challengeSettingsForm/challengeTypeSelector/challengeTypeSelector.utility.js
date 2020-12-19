import { challengeTypes } from "../../../../constants/constants";

const { target, limit, track } = challengeTypes;

const capitalizeString = (string) => {
  const firstLetter = string.substring(0, 1);
  const restOfString = string.substring(1);
  return `${firstLetter.toUpperCase()}${restOfString}`;
};

const getTypeOptions = () =>
  [target, limit, track].map((type) => ({
    label: capitalizeString(type),
    value: type,
  }));

export { getTypeOptions };
