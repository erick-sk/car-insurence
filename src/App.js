import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  // useState
  const [summary, saveSummary] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: '',
    },
  });

  const [loading, saveLoading] = useState(false);

  //get data
  const { quote, data } = summary;

  return (
    <Container>
      <Header title='Insurance Quote' />
      <ContainerForm>
        <Form saveSummary={saveSummary} saveLoading={saveLoading} />

        {loading ? <Spinner /> : null}

        <Summary data={data} />
        {!loading ? <Result quote={quote} /> : null}
      </ContainerForm>
    </Container>
  );
}

export default App;
