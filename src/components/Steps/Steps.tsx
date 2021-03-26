import React, { useState } from 'react';

import styles from './Steps.module.scss';
import data from '../../data';
import { ShapesInterface } from '../../interface';
import Button from '../Button';

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

  return (
    <div className={styles.Step1}>
      {steps === 1 && (
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
      {steps === 2 && (
        <div>
          <h1 className={styles.heading}>Step 2 : Insert your values</h1>
          <div className={styles.body}>
            <p className={styles.description}>
              You have selected a{' '}
              <span className={styles.bold}>{selectedShape}</span>, please input
              the required variables.
            </p>
            {selectedShape === 'Rectangle' && (
              <div className={styles.field}>
                <div>
                  <label>Length: </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    value={value1}
                    onChange={(e: any) => setValue1(e.target.value)}
                  />
                </div>
                <div>
                  <label>Width: </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    value={value2}
                    onChange={(e: any) => setValue2(e.target.value)}
                  />
                </div>
              </div>
            )}
            {selectedShape === 'Circle' && (
              <div className={styles.field}>
                <div>
                  <label>Diameter: </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    value={value1}
                    onChange={(e: any) => setValue1(e.target.value)}
                  />
                </div>
              </div>
            )}
            {selectedShape === 'Square' && (
              <div className={styles.field}>
                <div>
                  <label>Side: </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    value={value1}
                    onChange={(e: any) => setValue1(e.target.value)}
                  />
                </div>
              </div>
            )}
            {selectedShape === 'Ellipse' && (
              <div className={styles.field}>
                <div>
                  <label>a Axis: </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    value={value1}
                    onChange={(e: any) => setValue1(e.target.value)}
                  />
                </div>
                <div>
                  <label>b Axis: </label>
                  <input
                    type="number"
                    id="fname"
                    name="fname"
                    placeholder="text"
                    value={value2}
                    onChange={(e: any) => setValue2(e.target.value)}
                  />
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
              <p className={styles.cancel} onClick={() => reset()}>
                Cancel
              </p>
            </div>
          </div>
        </div>
      )}

      {steps === 3 && (
        <div>
          <h1 className={styles.heading}>Step 3 : Your results</h1>
          <div className={styles.body}>
            {selectedShape === 'Rectangle' && (
              <p className={styles.description}>
                You have the area of a{' '}
                <span className={styles.bold}>{selectedShape}</span> with a
                length of {value1} and width of {value2}. Below is your result:
              </p>
            )}
            {selectedShape === 'Circle' && (
              <p className={styles.description}>
                You have calculated the area of a{' '}
                <span className={styles.bold}>{selectedShape}</span> with a
                diameter of {value1}. Below is your result:
              </p>
            )}
            {selectedShape === 'Square' && (
              <p className={styles.description}>
                You have calculated the area of a{' '}
                <span className={styles.bold}>{selectedShape}</span> with a side
                of {value1}. Below is your result:
              </p>
            )}
            {selectedShape === 'Ellipse' && (
              <p className={styles.description}>
                You have calculated the area of a{' '}
                <span className={styles.bold}>{selectedShape}</span> with a a
                Axis of {value1} and b Axis of {value2}. Below is your result:
              </p>
            )}
            <div className={styles.score}>
              {selectedShape === 'Rectangle' && (
                <h1>The Area is {(value1 * value2).toFixed(3)}</h1>
              )}
              {selectedShape === 'Circle' && (
                <h1>
                  The Area is
                  {(Math.PI * (value1 / 2) * (value1 / 2)).toFixed(3)}
                </h1>
              )}
              {selectedShape === 'Square' && (
                <h1>The Area is {(value1 * value1).toFixed(3)}</h1>
              )}
              {selectedShape === 'Ellipse' && (
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
