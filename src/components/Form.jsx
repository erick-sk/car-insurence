import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getDiferenceYear, calcBrand, getPlan } from '../helpers';

const Camp = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 1rem;
  -webkit-appearance: none;
  outline: inherit; /* delete line black */
  /* change appearance nature tag select */
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Btn = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease-in-out;
  outline: inherit;
  border-radius: 1rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: #e84a5f;
  color: #fff;
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  border-radius: 1rem;
`;

const Form = ({ saveSummary, saveLoading }) => {
  // useState
  const [data, saveData] = useState({
    brand: '',
    year: '',
    plan: '',
  });

  const [error, saveError] = useState(false);

  // catch values on state
  const { brand, year, plan } = data;

  // reed data from form
  const getInformation = (e) => {
    saveData({ ...data, [e.target.name]: e.target.value });
  };

  // When user pick submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (brand.trim() === '' || year.trim() === '' || plan === '') {
      saveError(true);
      return;
    }

    saveError(false);

    //base 2000
    let result = 2000;

    // get diff years
    const diference = getDiferenceYear(year);

    // per each year less 3%
    result -= (diference * 3 * result) / 100;

    // European 30 %
    // American 15 %
    // Asiatico 5 %
    result = calcBrand(brand) * result;

    // Basic 20 %
    // Full 50 %
    const incrementPlan = getPlan(plan);
    result = parseFloat(incrementPlan * result).toFixed(2);

    saveLoading(true);

    //time for spinner loading
    setTimeout(() => {
      //delete spinner
      saveLoading(false);

      // send info to app.js
      // Total
      saveSummary({
        quote: Number(result),
        data,
      });
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit} // any name
    >
      {error ? <Error>All labels required</Error> : null}

      <Camp>
        <Label>Brand</Label>
        <Select name='brand' value={brand} onChange={getInformation}>
          <option value=''>-- Select --</option>
          <option value='american'>American</option>
          <option value='european'>European</option>
          <option value='asian'>Asian</option>
        </Select>
      </Camp>

      <Camp>
        <Label>Year</Label>
        <Select name='year' value={year} onChange={getInformation}>
          <option value=''>-- Seleccione --</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
        </Select>
      </Camp>

      <Camp>
        <Label>Plan</Label>
        <InputRadio
          type='radio'
          name='plan'
          value='basic'
          checked={plan === 'basic'}
          onChange={getInformation}
        />
        Basic
        <InputRadio
          type='radio'
          name='plan'
          value='full'
          checked={plan === 'full'}
          onChange={getInformation}
        />
        Full
      </Camp>

      <Btn type='submit'>Quote</Btn>
    </form>
  );
};

Form.propType = {
  saveSummary: PropTypes.func.isRequired,
  saveLoading: PropTypes.func.isRequired,
};

export default Form;
