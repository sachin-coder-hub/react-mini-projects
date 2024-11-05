import { createContext, useEffect, useState } from "react";
import featureFlagServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalContext({ children }) {
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    const res = await featureFlagServiceCall();
    setEnabledFlags(res);
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{ enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
