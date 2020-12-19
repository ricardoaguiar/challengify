import React from "react";

import { Columns, InputField } from "../../../components/components";

const ChallengeDateInputs = ({
  startDate,
  endDate,
  onSetStartDate,
  onSetEndDate,
  canHaveFocus,
}) => (
  <Columns gapSize="big">
    <div>
      <InputField
        id="newChallengeStartDate"
        label="Start date"
        type="date"
        value={startDate}
        onChange={({ target: { value } }) => {
          onSetStartDate(value);
        }}
        tabIndex={canHaveFocus ? 0 : -1}
      />
    </div>
    <div>
      <InputField
        id="newChallengeEndDate"
        label="End date"
        type="date"
        value={endDate}
        onChange={({ target: { value } }) => {
          onSetEndDate(value);
        }}
        tabIndex={canHaveFocus ? 0 : -1}
      />
    </div>
  </Columns>
);

export default ChallengeDateInputs;
