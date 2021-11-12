import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = (props) => {
  const params = useParams();

  const quote = props.quotes.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <h1>QuoteDetail</h1>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
