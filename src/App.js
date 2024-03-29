import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
