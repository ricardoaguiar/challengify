import { useState } from "react";

import { getTodaysDate } from "./createChallenge.utility";

import { challengeTypes } from "constants/constants";

const { target } = challengeTypes;

export const useFormState = () => {
  const [title, onSetTitle] = useState("");
  const [startDate, onSetStartDate] = useState(getTodaysDate());
  const [endDate, onSetEndDate] = useState("");
  const [type, onSetType] = useState(target);
  const [unitSingular, onSetUnitSingular] = useState("");
  const [unitPlural, onSetUnitPlural] = useState("");
  // For Track
  const [initialValue, onSetInitialValue] = useState(0);
  const [trackValue, onSetTrackValue] = useState(0);
  // For Target and Limit
  const [targetLimitValue, onSetTargetLimitValue] = useState(0);
  const [period, onSetPeriod] = useState("week");

  return {
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
  };
};

export const useDiscardDialogVisibility = () => {
  const [isDiscardDialogVisible, onSetIsDiscardDialogVisible] = useState(false);

  const onShowDiscardDialog = () => {
    onSetIsDiscardDialogVisible(true);
  };

  const onHideDiscardDialog = () => {
    onSetIsDiscardDialogVisible(false);
  };

  return {
    isDiscardDialogVisible,
    onShowDiscardDialog,
    onHideDiscardDialog,
  };
};
