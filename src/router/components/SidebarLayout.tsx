import Category from '@/components/category/Category';
import { Outlet } from 'react-router-dom';

export function SidebarLayout() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start">
      <Category />
      <Outlet />
    </div>
  );
}
