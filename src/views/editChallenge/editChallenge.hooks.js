import { useState, useEffect } from "react";

import { getTodaysDate, getDateFromTimestamp } from "./editChallenge.utility";

import { challengeTypes } from "constants/constants";

import { getChallenge } from "db/db";

const { target, limit, track } = challengeTypes;

export const useFormState = ({ challengeId }) => {
  const [isChallengeLoading, onSetIsChallengeLoading] = useState(true);
  const [challenge, onSetChallenge] = useState();
  useEffect(() => {
    onSetIsChallengeLoading(true);
    (async () => {
      onSetChallenge(await getChallenge({ id: Number(challengeId) }));
      onSetIsChallengeLoading(false);
    })();
  }, [challengeId]);

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

  useEffect(() => {
    if (challenge) {
      onSetTitle(challenge.title);
      onSetStartDate(
        getDateFromTimestamp({ timestamp: challenge.startTimestamp })
      );
      if (challenge.endTimestamp) {
        onSetEndDate(
          getDateFromTimestamp({ timestamp: challenge.endTimestamp })
        );
      }
      onSetType(challenge.type);
      onSetUnitSingular(challenge.unit.singular);
      onSetUnitPlural(challenge.unit.plural);
      if (challenge.type === track) {
        onSetInitialValue(challenge.initialValue);
        onSetTrackValue(challenge.targetValue);
      }
      if ([target, limit].includes(challenge.type)) {
        onSetTargetLimitValue(challenge.targetValue);
        onSetPeriod(challenge.period);
      }
    }
  }, [challenge]);

  return {
    isLoading: isChallengeLoading,
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
