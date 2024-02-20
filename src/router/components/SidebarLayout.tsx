import Category from '@/features/category/Category';
import { Outlet } from 'react-router-dom';

export function SidebarLayout() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center">
      <Category />
      <Outlet />
    </div>
  );
}
