import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import Videos from './pages/Videos';
import VideosDetail from './pages/VideosDetail';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: 'videos/:searchName', element: <Videos /> },
        { path: 'videos/watch/:videoID', element: <VideosDetail /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
