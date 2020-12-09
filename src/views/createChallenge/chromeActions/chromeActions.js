import React from "react";

import { navigate } from "@reach/router";

import { Gap, Button } from "../../../components/components";

import { createChallenge } from "../../../app/db";

import { challengeTypes } from "../../../constants/constants";

const { target, limit, track } = challengeTypes;

const ChromeActions = ({
  formData,
  isDiscardDialogVisible,
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
          await createChallenge({
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
          navigate("/challenges/");
        }}
        tabIndex={isDiscardDialogVisible ? -1 : 0}
      >
        Create challenge
      </Button>
      <Gap size="small" direction="horizontal" />
      <Button
        onClick={onShowDiscardDialog}
        className="danger"
        tabIndex={isDiscardDialogVisible ? -1 : 0}
      >
        Discard
      </Button>
    </>
  );
};

export default ChromeActions;
