import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Users from './Users';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Users</h1>
        <Users />
      </div>
    </QueryClientProvider>
  );
}

export default App;