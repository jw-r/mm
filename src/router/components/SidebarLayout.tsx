import Sidebar from '@/components/common/Sidebar';
import { Outlet } from 'react-router-dom';

export function SidebarLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
