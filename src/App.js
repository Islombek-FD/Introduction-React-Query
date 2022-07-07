
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import GitSubscribers from "./components/GitSubscribers";

const queryClient = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>Welcome to React Query</h1>

        <GitSubscribers />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
