import React from "react";

import { navigate } from "@reach/router";

import { Gap, Button } from "components/components";

import { updateChallenge } from "db/db";

import { challengeTypes } from "constants/constants";

const { target, limit, track } = challengeTypes;

const ChromeActions = ({
  challengeId,
  formData,
  canHaveFocus,
  onShowDiscardDialog,
}) => {
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
  } = formData;

  return (
    <>
      <Button
        onClick={async () => {
          await updateChallenge({
            id: Number(challengeId),
            title,
            type,
            startTimestamp: new Date(startDate).getTime(),
            endTimestamp: endDate === "" ? null : new Date(endDate).getTime(),
            unit: {
              singular: unitSingular,
              plural: unitPlural,
            },
            ...(type === track && {
              initialValue: Number(initialValue),
              trackValue: Number(trackValue),
            }),
            ...([target, limit].includes(type) && {
              targetValue: Number(targetLimitValue),
              period,
            }),
          });
          navigate(`/challenges/${challengeId}/`);
        }}
        tabIndex={canHaveFocus ? 0 : -1}
      >
        Update challenge
      </Button>
      <Gap size="small" direction="horizontal" />
      <Button
        onClick={onShowDiscardDialog}
        className="danger"
        tabIndex={canHaveFocus ? 0 : -1}
      >
        Discard
      </Button>
    </>
  );
};

export default ChromeActions;
