import { useEffect } from 'react';

interface PollingProps {
  callback: () => void;
  condition: boolean;
  interval: number;
}

function usePolling({ callback, condition, interval }: PollingProps) {
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined = undefined;

    if (condition) {
      intervalId = setInterval(callback, interval);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [callback, condition, interval]);
}

export default usePolling;
