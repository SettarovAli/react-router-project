import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const navigate = useNavigate();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes');
    }
  }, [status, navigate]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm
      onAddQuote={addQuoteHandler}
      isLoading={status === 'pending' ? true : false}
    />
  );
};

export default NewQuote;
