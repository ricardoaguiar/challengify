import { challengeTypes } from "../../../../constants/constants";

const { target, limit, track } = challengeTypes;

const getUnitSingularPlaceholder = (type) => {
  if (type === target) {
    return "e.g. book";
  }
  if (type === limit) {
    return "e.g. cigarette";
  }
  if (type === track) {
    return "e.g. push-up";
  }
};

const getUnitPluralPlaceholder = (type) => {
  if (type === target) {
    return "e.g. books";
  }
  if (type === limit) {
    return "e.g. cigarettes";
  }
  if (type === track) {
    return "e.g. push-ups";
  }
};

export { getUnitSingularPlaceholder, getUnitPluralPlaceholder };
