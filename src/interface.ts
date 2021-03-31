import { Shapes } from './enum';
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
  type: 'text' | 'number';
  id: string | undefined;
  name: string | undefined;
  placeholder?: string | undefined;
  value?: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface rectangleType {
  length: number;
  breadth: number;
}

export interface circleType {
  diameter: number;
}

export interface squareType {
  length: number;
}

export interface ellipseType {
  axisA: number;
  axisB: number;
}

/* const reactangleValue = { length: 0, breadth: 0 };
type rectangleType = typeof reactangleValue;

const circleValue = {
  diameter: 0,
};
type circleType = typeof circleValue;

const squareValue = {
  length: 0,
};
type squareType = typeof squareValue;

const ellipseValue = {
  axisA: 0,
  axisB: 0,
};
type ellipseType = typeof ellipseValue; */

/* export type ShapesType = Shapes; */

export interface inputsType {
  rectangle: rectangleType;
  circle: circleType;
  square: squareType;
  ellipse: ellipseType;
}

export interface initialValueType {
  shape: Shapes;
  inputs: inputsType;
}
