import Category from '@/components/common/Category';
import { Outlet } from 'react-router-dom';

export function SidebarLayout() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-start">
      <Category />
      <Outlet />
    </div>
  );
}
