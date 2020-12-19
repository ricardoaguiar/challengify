import React from "react";

import { Chrome, Gap } from "../../components/components";

import DiscardDialog from "./discardDialog/discardDialog";

import ChromeActions from "./chromeActions/chromeActions";
import ChallengeTypeSelector from "./challengeTypeSelector/challengeTypeSelector";
import ChallengeTitleInput from "./challengeTitleInput/challengeTitleInput";
import ChallengeDateInputs from "./challengeDateInputs/challengeDateInputs";
import ChallengeGoalInputs from "./challengeGoalInputs/challengeGoalInputs";

import {
  useFormState,
  useDiscardDialogVisibility,
} from "./createChallenge.hooks";

const CreateChallenge = () => {
  const {
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
  } = useFormState();

  const {
    isDiscardDialogVisible,
    onShowDiscardDialog,
    onHideDiscardDialog,
  } = useDiscardDialogVisibility();

  return (
    <Chrome
      title="Create new challenge"
      links={{
        left: {
          to: "..",
          text: "Back",
          onClick: (event) => {
            event.preventDefault();
            onShowDiscardDialog();
          },
          tabIndex: isDiscardDialogVisible ? -1 : 0,
        },
      }}
      actions={
        <ChromeActions
          formData={{
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
          }}
          canHaveFocus={!isDiscardDialogVisible}
          onShowDiscardDialog={onShowDiscardDialog}
        />
      }
    >
      {isDiscardDialogVisible && <DiscardDialog onHide={onHideDiscardDialog} />}
      <ChallengeTypeSelector
        type={type}
        onSetType={onSetType}
        canHaveFocus={!isDiscardDialogVisible}
      />
      <Gap size="big" />
      <ChallengeTitleInput
        type={type}
        title={title}
        onSetTitle={onSetTitle}
        canHaveFocus={!isDiscardDialogVisible}
      />
      <Gap size="big" />
      <ChallengeDateInputs
        startDate={startDate}
        endDate={endDate}
        onSetStartDate={onSetStartDate}
        onSetEndDate={onSetEndDate}
        canHaveFocus={!isDiscardDialogVisible}
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
        canHaveFocus={!isDiscardDialogVisible}
      />
    </Chrome>
  );
};

export default CreateChallenge;
