import React, { useState } from 'react';

import styles from './Steps.module.scss';
import data from '../../data';
import { ShapesInterface, initialValueType } from '../../interface';
import Button from '../Button';
import { DifferentSteps, Shapes } from '../../enum';
import Input from '../Input';

const Steps = () => {
  const initialValue = {
    shape: Shapes.RECTANGLE,
    inputs: {
      rectangle: { length: 0, breadth: 0 },
      circle: { diameter: 0 },
      square: { length: 0 },
      ellipse: { axisA: 0, axisB: 0 },
    },
  };

  const [shapes, setShapes] = useState<ShapesInterface[]>(data);
  const [steps, setSteps] = useState<number>(1);
  const [selectedShape, setSelectedShape] = useState<initialValueType>(
    initialValue
  );
 
  function Type(shape: string): Shapes {
    if (shape === Shapes.CIRCLE) return Shapes.CIRCLE;
    if (shape === Shapes.SQUARE) return Shapes.SQUARE;
    if (shape === Shapes.ELLIPSE) return Shapes.ELLIPSE;
    return Shapes.RECTANGLE;
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput: string = e.target.value;
    setSelectedShape({ ...selectedShape, shape: Type(userInput) });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const shape = selectedShape.shape;
    const inputs = selectedShape.inputs;
    setSelectedShape({
      ...selectedShape,
      inputs: {
        ...inputs,
        [shape]: { ...inputs[shape], [e.target.name]: inputValue },
      },
    });
  };

  const startOver = () => {
    setSteps(1);
    setSelectedShape(initialValue);
  };

  const result = () => {
    switch (selectedShape.shape) {
      case Shapes.RECTANGLE:
        return (
          selectedShape.inputs['rectangle'].length *
          selectedShape.inputs.rectangle.breadth
        ).toFixed(3);
      case Shapes.CIRCLE:
        return (
          Math.PI *
          (selectedShape.inputs['circle'].diameter / 2) *
          (selectedShape.inputs['circle'].diameter / 2)
        ).toFixed(3);
      case Shapes.SQUARE:
        return (
          selectedShape.inputs['square'].length *
          selectedShape.inputs['square'].length
        ).toFixed(3);
      case Shapes.ELLIPSE:
        return (
          Math.PI *
          selectedShape.inputs['ellipse'].axisA *
          selectedShape.inputs['ellipse'].axisB
        ).toFixed(3);
      default:
        return 0;
    }
  };

  const displayMessage = () => {
    const para = selectedShape.inputs;
    const params = Object.entries(para);
    const selected = params.find((ele) => ele[0] === selectedShape.shape);
    console.log(selected, 'sele');
    if (selected) {
      const val = Object.keys(selected[1]);
      const val1 = selected[1][val[0]];
      const val2 = selected[1][val[1]];
      const paramsLength = Object.keys(selected[1]).length;

      return (
        <div>
          You have calculated the area of a <span>{selectedShape.shape}</span>{' '}
          with a{' '}
          {paramsLength > 1
            ? `${val[0]} of ${val1} and ${val[1]} of ${val2}`
            : `${val[0]} of ${val1}`}. {' '}
          Below is your result.
        </div>
      );
    }
  };

  return (
    <div className={styles.Step1}>
      {steps === DifferentSteps.Step1 && (
        <div>
          <h1 className={styles.heading}>Step 1 : Select your shape</h1>
          <div className={styles.body}>
            <p className={styles.description}>
              Please select the shape that you would like to calculate the area
              of and press the button "Go to step 2"
            </p>
            {shapes.map((items) => {
              const { id, shape } = items;
              console.log(shape);
              return (
                <div key={id} className={styles.container}>
                  <label>
                    <input
                      type="radio"
                      name="Radio"
                      value={shape}
                      checked={selectedShape.shape === shape}
                      onChange={(e) => handleRadioChange(e)}
                    />
                    {shape}
                  </label>
                </div>
              );
            })}
            <div className={styles.button}>
              <Button
                type="button"
                title="Go to step 2"
                onClick={() =>
                  selectedShape.shape ? setSteps(2) : setSteps(1)
                }
              />
              <p className={styles.or}>or</p>
              <p
                className={styles.cancel}
                onClick={() => {
                  setSteps(1);
                  setSelectedShape(initialValue);
                }}>
                Cancel
              </p>
            </div>
          </div>
        </div>
      )}
      {steps === DifferentSteps.Step2 && (
        <div>
          <h1 className={styles.heading}>Step 2 : Insert your values</h1>
          <div className={styles.body}>
            <p className={styles.description}>
              You have selected a{' '}
              <span className={styles.bold}>{selectedShape.shape}</span>, please
              input the required variables.
            </p>
            {selectedShape.shape === Shapes.RECTANGLE && (
              <div className={styles.field}>
                <div>
                  <label>Length: </label>
                  <Input
                    type="number"
                    id="fname"
                    name="length"
                    placeholder="text"
                    value={selectedShape.inputs['rectangle'].length}
                    onChange={handleChange}></Input>
                </div>

                <div>
                  <label>Width: </label>
                  <Input
                    type="number"
                    id="fname"
                    name="breadth"
                    placeholder="text"
                    value={selectedShape.inputs['rectangle'].breadth}
                    onChange={handleChange}></Input>
                </div>
              </div>
            )}
            {selectedShape.shape === Shapes.CIRCLE && (
              <div className={styles.field}>
                <div>
                  <label>Diameter: </label>
                  <Input
                    type="number"
                    id="fname"
                    name="diameter"
                    placeholder="text"
                    value={selectedShape.inputs['circle'].diameter}
                    onChange={handleChange}></Input>
                </div>
              </div>
            )}
            {selectedShape.shape === Shapes.SQUARE && (
              <div className={styles.field}>
                <div>
                  <label>Side: </label>
                  <Input
                    type="number"
                    id="fname"
                    name="length"
                    placeholder="text"
                    value={selectedShape.inputs['square'].length}
                    onChange={handleChange}></Input>
                </div>
              </div>
            )}
            {selectedShape.shape === Shapes.ELLIPSE && (
              <div className={styles.field}>
                <div>
                  <label>a Axis: </label>
                  <Input
                    type="number"
                    id="fname"
                    name="axisA"
                    placeholder="text"
                    value={selectedShape.inputs['ellipse'].axisA}
                    onChange={handleChange}></Input>
                </div>
                <div>
                  <label>b Axis: </label>
                  <Input
                    type="number"
                    id="fname"
                    name="axisB"
                    placeholder="text"
                    value={selectedShape.inputs['ellipse'].axisB}
                    onChange={handleChange}></Input>
                </div>
              </div>
            )}
            <div className={styles.button}>
              <Button
                type="button"
                title="Go to step 3"
                onClick={() => setSteps(3)}
              />
              <p className={styles.or}>or</p>
              <p className={styles.cancel} onClick={startOver}>
                Cancel
              </p>
            </div>
          </div>
        </div>
      )}

      {steps === DifferentSteps.Step3 && (
        <div>
          <h1 className={styles.heading}>Step 3 : Your results</h1>
          <div className={styles.body}>
            {displayMessage()}
            <div className={styles.score}>
              <h1>The Area is {result()}</h1>
            </div>
            <div className={styles.startOver}>
              <Button type="button" title="Start Over" onClick={startOver} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
