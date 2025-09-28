import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './features/Home/Home';
import { EditResume } from './features/EditResume/EditResume';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="edit/:resumeId" element={<EditResume />} />
      </Route>
    </Routes>
  );
};
