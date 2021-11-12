import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'John Smith', text: 'Learning React is fun' },
  { id: 'q2', author: 'Max Terner', text: 'Javascript is awesome' },
];

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="quotes" />} />
        <Route path="quotes" element={<AllQuotes quotes={DUMMY_QUOTES} />} />
        <Route
          path="quotes/:quoteId"
          element={<QuoteDetail quotes={DUMMY_QUOTES} />}
        >
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
