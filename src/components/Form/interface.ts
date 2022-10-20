export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface FormAdditionalActions<T = any> {
  onCancel: () => void;
  onSubmitCompleted?: (result: T) => void;
}
