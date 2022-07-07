import { Route, Routes } from 'react-router';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Users from './components/Users';
import User from './components/User';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Routes>
          <Route path='/' element={<h1>Home page</h1>} />

          <Route path='/users' element={<Users />} />

          <Route path='/user/:userId' element={<User />} />
        </Routes>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
