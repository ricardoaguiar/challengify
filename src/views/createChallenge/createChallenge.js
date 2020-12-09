import React from "react";

import {
  Columns,
  Gap,
  InputField,
  Select,
  Chrome,
} from "../../components/components";

import DiscardDialog from "./discardDialog/discardDialog";

import ChromeActions from "./chromeActions/chromeActions";

import ChallengeTypeSelector from "./challengeTypeSelector/challengeTypeSelector";

import {
  useFormState,
  useDiscardDialogVisibility,
} from "./createChallenge.hooks";

import { challengeTypes } from "../../constants/constants";

const { target, limit, track } = challengeTypes;

const getTitlePlaceholder = (type) => {
  if (type === target) {
    return "e.g. Read more";
  }
  if (type === limit) {
    return "e.g. Smoke less";
  }
  if (type === track) {
    return "e.g. Do 60 push-ups";
  }
};

const getUnitSingularPlaceholder = (type) => {
  if (type === target) {
    return "e.g. book";
  }
  if (type === limit) {
    return "e.g. cigarette";
  }
  if (type === track) {
    return "e.g. push-up";
  }
};

const getUnitPluralPlaceholder = (type) => {
  if (type === target) {
    return "e.g. books";
  }
  if (type === limit) {
    return "e.g. cigarettes";
  }
  if (type === track) {
    return "e.g. push-ups";
  }
};

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
          isDiscardDialogVisible={isDiscardDialogVisible}
          onShowDiscardDialog={onShowDiscardDialog}
        />
      }
    >
      {isDiscardDialogVisible && <DiscardDialog onHide={onHideDiscardDialog} />}
      <ChallengeTypeSelector
        type={type}
        onSetType={onSetType}
        canHaveFocus={isDiscardDialogVisible}
      />
      <Gap size="big" />
      <InputField
        id="newChallengeTitle"
        label="Title"
        placeholder={getTitlePlaceholder(type)}
        value={title}
        onChange={({ target: { value } }) => {
          onSetTitle(value);
        }}
        tabIndex={isDiscardDialogVisible ? -1 : 0}
      />
      <Gap size="big" />
      <Columns gapSize="big">
        <div>
          <InputField
            id="newChallengeStartDate"
            label="Start date"
            type="date"
            value={startDate}
            onChange={({ target: { value } }) => {
              onSetStartDate(value);
            }}
            tabIndex={isDiscardDialogVisible ? -1 : 0}
          />
        </div>
        <div>
          <InputField
            id="newChallengeEndDate"
            label="End date"
            type="date"
            value={endDate}
            onChange={({ target: { value } }) => {
              onSetEndDate(value);
            }}
            tabIndex={isDiscardDialogVisible ? -1 : 0}
          />
        </div>
      </Columns>
      <Gap size="big" />
      {type === track && (
        <>
          <Columns gapSize="big">
            <div>
              <InputField
                id="initialValue"
                label={`Initial ${
                  unitPlural.length > 1 ? unitPlural : "value"
                }`}
                type="number"
                value={initialValue}
                onChange={({ target: { value } }) => {
                  onSetInitialValue(value);
                }}
                tabIndex={isDiscardDialogVisible ? -1 : 0}
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
                tabIndex={isDiscardDialogVisible ? -1 : 0}
              />
            </div>
            <div>
              <InputField
                id="unitSingular"
                label="unit (singular)"
                type="text"
                value={unitSingular}
                onChange={({ target: { value } }) => {
                  onSetUnitSingular(value);
                }}
                placeholder={getUnitSingularPlaceholder(type)}
                tabIndex={isDiscardDialogVisible ? -1 : 0}
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
                tabIndex={isDiscardDialogVisible ? -1 : 0}
              />
            </div>
          </Columns>
        </>
      )}
      {[target, limit].includes(type) && (
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
              tabIndex={isDiscardDialogVisible ? -1 : 0}
            />
          </div>
          <div>
            <InputField
              id="unitSingular"
              label="unit (singular)"
              type="text"
              value={unitSingular}
              onChange={({ target: { value } }) => {
                onSetUnitSingular(value);
              }}
              placeholder={getUnitSingularPlaceholder(type)}
              tabIndex={isDiscardDialogVisible ? -1 : 0}
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
              tabIndex={isDiscardDialogVisible ? -1 : 0}
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
              tabIndex={isDiscardDialogVisible ? -1 : 0}
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
      )}
    </Chrome>
  );
};

export default CreateChallenge;
