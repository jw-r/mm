import { Center } from '@/components/shared/Center';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

export function Root() {
  return (
    <div className="min-h-screen">
      <ErrorBoundary fallback={<Center>알 수 없는 에러가 발생했어요, 잠시 후 다시 시도해주세요</Center>}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}
