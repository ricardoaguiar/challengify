import React from "react";

import { Chrome, ChallengeSettingsForm } from "components/components";

import DiscardDialog from "./discardDialog/discardDialog";

import ChromeActions from "./chromeActions/chromeActions";

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
      <ChallengeSettingsForm
        title={title}
        startDate={startDate}
        endDate={endDate}
        type={type}
        unitSingular={unitSingular}
        unitPlural={unitPlural}
        initialValue={initialValue}
        trackValue={trackValue}
        targetLimitValue={targetLimitValue}
        period={period}
        onSetTitle={onSetTitle}
        onSetStartDate={onSetStartDate}
        onSetEndDate={onSetEndDate}
        onSetType={onSetType}
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
