import React from "react";

import { Gap } from "../components";

import ChallengeTypeSelector from "./challengeTypeSelector/challengeTypeSelector";
import ChallengeTitleInput from "./challengeTitleInput/challengeTitleInput";
import ChallengeDateInputs from "./challengeDateInputs/challengeDateInputs";
import ChallengeGoalInputs from "./challengeGoalInputs/challengeGoalInputs";

const ChallengeSettingsForm = ({
  title,
  startDate,
  endDate,
  type,
  unitSingular,
  unitPlural,
  initialValue,
  trackValue,
  targetLimitValue,
  period,
  onSetTitle,
  onSetStartDate,
  onSetEndDate,
  onSetType,
  onSetUnitSingular,
  onSetUnitPlural,
  onSetInitialValue,
  onSetTrackValue,
  onSetTargetLimitValue,
  onSetPeriod,
  canHaveFocus,
}) => (
  <>
    <ChallengeTypeSelector
      type={type}
      onSetType={onSetType}
      canHaveFocus={canHaveFocus}
    />
    <Gap size="big" />
    <ChallengeTitleInput
      type={type}
      title={title}
      onSetTitle={onSetTitle}
      canHaveFocus={canHaveFocus}
    />
    <Gap size="big" />
    <ChallengeDateInputs
      startDate={startDate}
      endDate={endDate}
      onSetStartDate={onSetStartDate}
      onSetEndDate={onSetEndDate}
      canHaveFocus={canHaveFocus}
    />
    <Gap size="big" />
    <ChallengeGoalInputs
      type={type}
      unitSingular={unitSingular}
      unitPlural={unitPlural}
      initialValue={initialValue}
      trackValue={trackValue}
      targetLimitValue={targetLimitValue}
      period={period}
      onSetUnitSingular={onSetUnitSingular}
      onSetUnitPlural={onSetUnitPlural}
      onSetInitialValue={onSetInitialValue}
      onSetTrackValue={onSetTrackValue}
      onSetTargetLimitValue={onSetTargetLimitValue}
      onSetPeriod={onSetPeriod}
      canHaveFocus={canHaveFocus}
    />
  </>
);

export default ChallengeSettingsForm;
