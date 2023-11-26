import React from 'react';
import styles from './Filter.module.css'

import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const filterInputId = nanoid();

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div className={ styles.filterContainer }>
      <label className={ styles.filterLabel }>
        Find contacts by name
        <input className={ styles.filterInput }
          type="text"
          value={value}
          onChange={onChange}
          id={filterInputId}
        />
      </label>
    </div>
  );
};

export default Filter;