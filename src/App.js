import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

function App() {
  return (
    <div className='bg-neutral-800'>
      <SearchHeader />
      <Outlet />
    </div>
  );
}

export default App;
