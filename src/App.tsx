import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MainLayout />} />
    </Routes>
  );
};
