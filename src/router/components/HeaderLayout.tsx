import { Header } from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

export function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
