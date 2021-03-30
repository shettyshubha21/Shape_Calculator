import React, { useState } from 'react';

import styles from './Steps.module.scss';
import data from '../../data';
import { ShapesInterface } from '../../interface';
import Button from '../Button';
import { DifferentSteps } from '../../enum';
import { Shapes } from '../../enum';
import Input from '../Input';

const Steps = () => {
  const [shapes, setShapes] = useState<ShapesInterface[]>(data);
  const [steps, setSteps] = useState<number>(1);
  const [selectedShape, setSelectedShape] = useState<string>('');
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);

  const reset = () => {
    setValue1(0);
    setValue2(0);
  };

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue1 = Number(e.target.value);
    setValue1(inputValue1);
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue2 = Number(e.target.value);
    setValue2(inputValue2);
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
              return (
                <div key={id} className={styles.container}>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value={shape}
                      checked={selectedShape === shape ? true : false}
                      onChange={() => {
                        setSelectedShape(shape);
                      }}
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
                onClick={() => (selectedShape ? setSteps(2) : setSteps(1))}
              />
              <p className={styles.or}>or</p>
              <p
                className={styles.cancel}
                onClick={() => {
                  setSteps(1);
                  setSelectedShape('');
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
              <span className={styles.bold}>{selectedShape}</span>, please input
              the required variables.
            </p>
            {selectedShape === Shapes.RECTANGLE && (
              <div className={styles.field}>
                <div>
                  <label>Length: </label>
                  <Input 
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    onChange={handleChange1}>
                  </Input>
                </div>

                <div>
                  <label>Width: </label>
                  <Input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    onChange={handleChange2}>
                  </Input>
                </div>
              </div>
            )}
            {selectedShape === Shapes.CIRCLE && (
              <div className={styles.field}>
                <div>
                  <label>Diameter: </label>
                  <Input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    value={value1}
                    onChange={handleChange1}
                  >
                  </Input>
                </div>
              </div>
            )}
            {selectedShape === Shapes.SQUARE && (
              <div className={styles.field}>
                <div>
                  <label>Side: </label>
                  <Input
                     type="number"
                     id="fname"
                     name="fname"
                     placeholder="text"
                     value={value1}
                     onChange={handleChange1}
                  >
                  </Input>
                </div>
              </div>
            )}
            {selectedShape === Shapes.ELLIPSE && (
              <div className={styles.field}>
                <div>
                  <label>a Axis: </label>
                  <Input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    value={value1}
                    onChange={handleChange1}
                  >
                  </Input>
                </div>
                <div>
                  <label>b Axis: </label>
                 <Input
                  type="number"
                  id="fname"
                  name="fname"
                  placeholder="text"
                  value={value2}
                  onChange={handleChange2}>
                 </Input>
                </div>
              </div>
            )}
            <div className={styles.button}>
              <Button
                type="button"
                title="Go to step 3"
                onClick={() => (value1 || value2 ? setSteps(3) : setSteps(2))}
              />
              <p className={styles.or}>or</p>
              <p
                className={styles.cancel}
                onClick={() => {
                  setSteps(1);
                  setSelectedShape('');
                  reset();
                }}>
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
            {selectedShape === Shapes.RECTANGLE && (
              <p className={styles.description}>
                You have the area of a{' '}
                <span className={styles.bold}>{selectedShape}</span> with a
                length of {value1} and width of {value2}. Below is your result:
              </p>
            )}
            {selectedShape === Shapes.CIRCLE && (
              <p className={styles.description}>
                You have calculated the area of a{' '}
                <span className={styles.bold}>{selectedShape}</span> with a
                diameter of {value1}. Below is your result:
              </p>
            )}
            {selectedShape === Shapes.SQUARE && (
              <p className={styles.description}>
                You have calculated the area of a{' '}
                <span className={styles.bold}>{selectedShape}</span> with a side
                of {value1}. Below is your result:
              </p>
            )}
            {selectedShape === Shapes.ELLIPSE && (
              <p className={styles.description}>
                You have calculated the area of a{' '}
                <span className={styles.bold}>{selectedShape}</span> with a a
                Axis of {value1} and b Axis of {value2}. Below is your result:
              </p>
            )}
            <div className={styles.score}>
              {selectedShape === Shapes.RECTANGLE && (
                <h1>The Area is {(value1 * value2).toFixed(3)}</h1>
              )}
              {selectedShape === Shapes.CIRCLE && (
                <h1>
                  The Area is {''}
                  {(Math.PI * (value1 / 2) * (value1 / 2)).toFixed(3)}
                </h1>
              )}
              {selectedShape === Shapes.SQUARE && (
                <h1>The Area is {(value1 * value1).toFixed(3)}</h1>
              )}
              {selectedShape === Shapes.ELLIPSE && (
                <h1>The Area is {(Math.PI * value1 * value2).toFixed(3)}</h1>
              )}
            </div>
            <div className={styles.startOver}>
              <Button
                type="button"
                title="Start Over"
                onClick={() => {
                  setSteps(1);
                  reset();
                  setSelectedShape('');
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
