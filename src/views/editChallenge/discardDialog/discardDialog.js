import React from "react";

import { navigate } from "@reach/router";

import { ConfirmationDialog, Modal } from "components/components";

const DiscardDialog = ({ onHide, challengeId }) => (
  <Modal>
    <ConfirmationDialog
      confirmLabel="Discard"
      onConfirm={() => {
        navigate(`/challenges/${challengeId}/`);
      }}
      onCancel={onHide}
    >
      <p>Are you sure you want to discard your changes?</p>
      <p>Your changes will be permanently lost.</p>
    </ConfirmationDialog>
  </Modal>
);

export default DiscardDialog;
