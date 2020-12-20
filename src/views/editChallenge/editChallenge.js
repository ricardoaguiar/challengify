import React from "react";

import { Chrome, ChallengeSettingsForm } from "components/components";

import DiscardDialog from "./discardDialog/discardDialog";

import ChromeActions from "./chromeActions/chromeActions";

import {
  useFormState,
  useDiscardDialogVisibility,
} from "./editChallenge.hooks";

const EditChallenge = ({ challengeId }) => {
  const {
    isLoading,
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
  } = useFormState({ challengeId });

  const {
    isDiscardDialogVisible,
    onShowDiscardDialog,
    onHideDiscardDialog,
  } = useDiscardDialogVisibility();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Chrome
      title="Update challenge"
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
          challengeId={challengeId}
          canHaveFocus={!isDiscardDialogVisible}
          onShowDiscardDialog={onShowDiscardDialog}
        />
      }
    >
      {isDiscardDialogVisible && (
        <DiscardDialog onHide={onHideDiscardDialog} challengeId={challengeId} />
      )}
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

export default EditChallenge;
