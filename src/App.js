import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Comments from './components/comments/Comments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="quotes" />} />
      <Route path="quotes" element={<AllQuotes />} />
      <Route path="quotes/:quoteId" element={<QuoteDetail />}>
        <Route path="comments" element={<Comments />} />
      </Route>
      <Route path="new-quote" element={<NewQuote />} />
    </Routes>
  );
}

export default App;