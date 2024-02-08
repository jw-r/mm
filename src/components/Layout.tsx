import { ReactNode } from 'react';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <div className="h-[3000px]">asdasd</div>
    </div>
  );
}

export default Layout;
