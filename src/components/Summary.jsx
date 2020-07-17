import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { firstLetterUppercase } from '../helpers';

const ContainerSummary = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 2rem;
  border-radius: 1rem;
`;

const Summary = ({ data }) => {
  // get data
  const { brand, year, plan } = data;

  if (brand === '' || year === '' || plan === '') return null;

  return (
    <ContainerSummary>
      <h2>Summary Queote</h2>
      <ul>
        <li>Brand: {firstLetterUppercase(brand)} </li>
        <li>Plan: {firstLetterUppercase(plan)} </li>
        <li>Year: {year} </li>
      </ul>
    </ContainerSummary>
  );
};

Summary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Summary;
