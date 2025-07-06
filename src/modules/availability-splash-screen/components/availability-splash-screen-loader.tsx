import type { PropsWithChildren } from "react";
import { useAvailabilitySplashScreenLoader } from "../hooks";
import { AvailabilitySplashScreenContent } from "./availability-splash-screen-content";

export function AvailabilitySplashScreenLoader({
  children,
}: PropsWithChildren) {
  const { status } = useAvailabilitySplashScreenLoader();

  if (status !== "success")
    return (
      <AvailabilitySplashScreenContent
        isTakingLongerThanExpected={status === "long-load"}
      />
    );

  return children;
}
