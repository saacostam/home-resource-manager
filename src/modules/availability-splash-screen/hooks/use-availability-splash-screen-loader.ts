import { useEffect, useMemo, useState } from "react";
import { useGetApiHealth } from "../fetching";

export function useAvailabilitySplashScreenLoader() {
  const [now, setNow] = useState(Date.now());
  const [startTime] = useState(Date.now());

  const apiHealth = useGetApiHealth();

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return useMemo(
    () => ({
      status: apiHealth.isSuccess
        ? ("success" as const)
        : now - startTime < 10_000
          ? ("short-load" as const)
          : ("long-load" as const),
    }),
    [apiHealth.isSuccess, startTime, now],
  );
}
