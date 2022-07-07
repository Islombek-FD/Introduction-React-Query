import { Route, Routes } from 'react-router';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/users' element={<Users />} />

          <Route path='/user/:userId' element={<User />} />
        </Routes>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
