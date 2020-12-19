import { challengeTypes } from "../../../../constants/constants";

const { target, limit, track } = challengeTypes;

const getTitlePlaceholder = (type) => {
  if (type === target) {
    return "e.g. Read more";
  }
  if (type === limit) {
    return "e.g. Smoke less";
  }
  if (type === track) {
    return "e.g. Do 60 push-ups";
  }
};

export { getTitlePlaceholder };
