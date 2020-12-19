import React from "react";

import { navigate } from "@reach/router";

import { ConfirmationDialog, Modal } from "components/components";

const DiscardDialog = ({ onHide }) => (
  <Modal>
    <ConfirmationDialog
      confirmLabel="Discard"
      onConfirm={() => {
        navigate("/challenges/");
      }}
      onCancel={onHide}
    >
      <p>Are you sure you want to discard this challenge?</p>
      <p>Your changes will be permanently lost.</p>
    </ConfirmationDialog>
  </Modal>
);

export default DiscardDialog;
