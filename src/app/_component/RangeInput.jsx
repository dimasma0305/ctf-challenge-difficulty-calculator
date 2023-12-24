"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const RangeInput = ({ label, name, description, onRangeChange }) => {
  const [rangeValue, setRangeValue] = useState(1);
  useEffect(() => {
    onRangeChange(name, rangeValue)
  }, [])
  const handleRangeChange = (event) => {
    const val = parseInt(event.target.value, 10)
    setRangeValue(val);
    onRangeChange(name, val)
  };
  return (
    <div className="grid gap-1">
      <label htmlFor={name} className='flex flex-row gap-2'>
        <span>
          {label}
        </span>
        <button onClick={() => document.getElementById(name).showModal()}>
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
        </button>
        <dialog id={name} className="modal">
          <div className="modal-box">
            {description}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </label>
      <input
        type="range"
        min={1}
        max={5}
        value={rangeValue}
        onChange={handleRangeChange}
        className="range range-primary range-sm"
        name={name}
        step={1}
      />
      <div className="w-full flex justify-between text-xs px-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>
    </div>
  );
};

export default RangeInput;
