import { Header } from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
