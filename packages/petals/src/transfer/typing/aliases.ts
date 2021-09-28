type TransferValue = {
  key: string;
  label: string;
  description?: string;
  disabled?: boolean;
  [key: string]: any;
};

type TransferData = TransferValue[];

export { TransferValue, TransferData };
