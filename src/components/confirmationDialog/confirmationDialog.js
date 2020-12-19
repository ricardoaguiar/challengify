import React from "react";

import { Gap, Button } from "components/components";

import "./confirmationDialog.css";

const ConfirmationDialog = ({
  children,
  confirmLabel = "OK",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  buttonTabIndex,
  ...props
}) => (
  <div className="confirmationDialog" {...props}>
    <div>{children}</div>
    <Gap size="medium" direction="vertical" />
    <div className="buttons">
      <Button onClick={onCancel} tabIndex={buttonTabIndex}>
        {cancelLabel}
      </Button>
      <Gap size="small" direction="horizontal" />
      <Button onClick={onConfirm} className="danger" tabIndex={buttonTabIndex}>
        {confirmLabel}
      </Button>
    </div>
  </div>
);

export default ConfirmationDialog;
