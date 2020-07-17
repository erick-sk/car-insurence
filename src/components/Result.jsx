import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
  background-color: #8bcdcd;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
`;

const ResultQuote = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: #8bcdcd;
  margin-top: 1rem;
  position: relative;
  border-radius: 1rem;
`;

const TotalQuote = styled.p`
  color: #383e56;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <Message>Choose one brand, year and type assured</Message>
  ) : (
    <ResultQuote>
      <TransitionGroup component='span' clasName='resultado'>
        <CSSTransition
          classNames='resultado'
          key={quote} //value unique
          timeout={{ enter: 500, exit: 500 }}
        >
          <TotalQuote>
            Total: $ <span>{quote}</span>
          </TotalQuote>
        </CSSTransition>
      </TransitionGroup>
    </ResultQuote>
  );
};

Result.propTypes = {
  quote: PropTypes.number.isRequired,
};

export default Result;
