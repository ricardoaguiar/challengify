import React from "react";

import { Gap, InputField } from "../../../../../components/components";

import {
  getUnitSingularPlaceholder,
  getUnitPluralPlaceholder,
} from "./challengeUnitInputs.utility";

const UnitInputs = ({
  type,
  unitSingular,
  unitPlural,
  onSetUnitSingular,
  onSetUnitPlural,
  canHaveFocus,
}) => (
  <>
    <InputField
      id="unitSingular"
      label="unit (singular)"
      type="text"
      value={unitSingular}
      onChange={({ target: { value } }) => {
        onSetUnitSingular(value);
      }}
      placeholder={getUnitSingularPlaceholder(type)}
      tabIndex={canHaveFocus ? 0 : -1}
    />
    <Gap size="medium" />
    <InputField
      id="unitPlural"
      label="unit (plural)"
      type="text"
      value={unitPlural}
      onChange={({ target: { value } }) => {
        onSetUnitPlural(value);
      }}
      placeholder={getUnitPluralPlaceholder(type)}
      tabIndex={canHaveFocus ? 0 : -1}
    />
  </>
);

export default UnitInputs;
