import React from "react";

import { RadioButtonGroup } from "../../../../components/components";

import { getTypeOptions } from "./challengeTypeSelector.utility";

const ChallengeTypeSelector = ({ type, onSetType, canHaveFocus }) => (
  <RadioButtonGroup
    options={getTypeOptions()}
    value={type}
    onChange={onSetType}
    buttonTabIndex={canHaveFocus ? 0 : -1}
  />
);

export default ChallengeTypeSelector;
