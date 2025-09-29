import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { lazy, Suspense } from 'react';
import { Dashboard } from './features/Dashboard/Dashboard';

const Home = lazy(() => import('./features/Home/Home'));
const EditResume = lazy(() => import('./features/EditResume/EditResume'));

const Loading = () => {
  return <div>Loading ...</div>;
};

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="edit/:resumeId" element={<EditResume />} />
          <Route path="*" element={<Navigate to={'/'} replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
