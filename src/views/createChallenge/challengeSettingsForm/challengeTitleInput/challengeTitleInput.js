import React from "react";

import { InputField } from "../../../../components/components";

import { getTitlePlaceholder } from "./challengeTitleInput.utility";

const ChallengeTitleInput = ({ type, title, onSetTitle, canHaveFocus }) => (
  <InputField
    id="newChallengeTitle"
    label="Title"
    placeholder={getTitlePlaceholder(type)}
    value={title}
    onChange={({ target: { value } }) => {
      onSetTitle(value);
    }}
    tabIndex={canHaveFocus ? 0 : -1}
  />
);

export default ChallengeTitleInput;
