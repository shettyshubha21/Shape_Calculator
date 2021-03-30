export interface ShapesInterface {
  id: number;
  shape: string;
}

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  title: string;
}

export interface LabelProps {
  children?: string;
  color?: string;
  size?: string;
  type?: 'heading' | 'paragraph' | 'default' | 'sub-heading';
  weight?: number;
}

export interface InputProps {
  type?: "text" | "number";
  id?: string | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
