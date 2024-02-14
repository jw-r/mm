import Category from '@/components/category/Category';
import { Outlet } from 'react-router-dom';

export function SidebarLayout() {
  return (
    <div className="w-full justify-center ">
      <div className="flex flex-col items-center justify-center bg-red-300 sm:flex-row sm:items-start sm:justify-center">
        <Category />
        <Outlet />
      </div>
    </div>
  );
}
