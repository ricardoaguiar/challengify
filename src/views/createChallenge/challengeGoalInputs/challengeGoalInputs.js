import React from "react";

import { Columns, InputField, Select } from "../../../components/components";

import UnitInputs from "./challengeUnitInputs/challengeUnitInputs";

import { challengeTypes } from "../../../constants/constants";

const { target, limit, track } = challengeTypes;

const ChallengeGoalInputs = ({
  type,
  unitSingular,
  unitPlural,
  initialValue,
  trackValue,
  targetLimitValue,
  period,
  onSetUnitSingular,
  onSetUnitPlural,
  onSetInitialValue,
  onSetTrackValue,
  onSetTargetLimitValue,
  onSetPeriod,
  canHaveFocus,
}) => {
  if (type === track) {
    return (
      <Columns gapSize="big">
        <div>
          <InputField
            id="initialValue"
            label={`Initial ${unitPlural.length > 1 ? unitPlural : "value"}`}
            type="number"
            value={initialValue}
            onChange={({ target: { value } }) => {
              onSetInitialValue(value);
            }}
            tabIndex={canHaveFocus ? 0 : -1}
          />
        </div>
        <div>
          <InputField
            id="targetValue"
            label={`Target ${unitPlural.length > 1 ? unitPlural : "value"}`}
            type="number"
            value={trackValue}
            onChange={({ target: { value } }) => {
              onSetTrackValue(value);
            }}
            tabIndex={canHaveFocus ? 0 : -1}
          />
        </div>
        <div>
          <UnitInputs
            type={type}
            unitSingular={unitSingular}
            unitPlural={unitPlural}
            onSetUnitSingular={onSetUnitSingular}
            onSetUnitPlural={onSetUnitPlural}
            canHaveFocus={canHaveFocus}
          />
        </div>
      </Columns>
    );
  }
  if ([target, limit].includes(type)) {
    return (
      <Columns>
        <div>
          <InputField
            id="targetValue"
            label={type === target ? "At least" : "At most"}
            type="number"
            min={0}
            value={targetLimitValue}
            onChange={({ target: { value } }) => {
              onSetTargetLimitValue(value);
            }}
            tabIndex={canHaveFocus ? 0 : -1}
          />
        </div>
        <div>
          <UnitInputs
            type={type}
            unitSingular={unitSingular}
            unitPlural={unitPlural}
            onSetUnitSingular={onSetUnitSingular}
            onSetUnitPlural={onSetUnitPlural}
            canHaveFocus={canHaveFocus}
          />
        </div>
        <div>
          <Select
            id="period"
            label="period"
            value={period}
            onChange={({ target: { value } }) => {
              onSetPeriod(value);
            }}
            tabIndex={canHaveFocus ? 0 : -1}
          >
            <option value="day">every day</option>
            <option value="2days">every other day</option>
            <option value="week">every week</option>
            <option value="2weeks">every two weeks</option>
            <option value="month">every month</option>
            <option value="2months">every two months</option>
            <option value="3months">every three months</option>
            <option value="6months">every six months</option>
            <option value="year">every year</option>
          </Select>
        </div>
      </Columns>
    );
  }
};

export default ChallengeGoalInputs;
