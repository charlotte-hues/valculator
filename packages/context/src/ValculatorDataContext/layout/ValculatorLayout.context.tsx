import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { TabsType } from "./ValculatorLayout.types";
import { useUrlFilters } from "../../helpers/useUrlFilters";
import { size } from "../../helpers/device";

export type ValculatorLayoutContextValues = {
  isMobile: boolean;
  isFullScreen: boolean;
  handleToggleFullScreen: (tab: TabsType) => void;
  activeTab: string;
  handleTabChange: (newSection: TabsType) => void;
};

const ValculatorLayoutContext = createContext<ValculatorLayoutContextValues>({
  isMobile: false,
  isFullScreen: false,
  handleToggleFullScreen: () => {},
  activeTab: "",
  handleTabChange: () => {},
});

export const ValculatorLayoutContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const isMobile = window.innerWidth < size.laptop;
    if (isMobile) {
      setIsMobile(true);
    }
  }, []);

  const { activeTab, fullScreen, handleUpdateSearchParams } = useUrlFilters();

  const handleTabChange = useCallback(
    (newSection: TabsType) => {
      handleUpdateSearchParams({ layout: { tab: newSection, fullScreen } });
    },
    [fullScreen, handleUpdateSearchParams]
  );

  const handleToggleFullScreen = useCallback(
    (tab: TabsType) => {
      handleUpdateSearchParams({ layout: { tab, fullScreen: !fullScreen } });
    },
    [fullScreen, handleUpdateSearchParams]
  );

  const value = useMemo(() => {
    return {
      isMobile,
      isFullScreen: fullScreen || isMobile,
      handleToggleFullScreen,
      activeTab,
      handleTabChange,
    };
  }, [
    activeTab,
    fullScreen,
    handleTabChange,
    handleToggleFullScreen,
    isMobile,
  ]);

  return (
    <ValculatorLayoutContext.Provider value={value}>
      {children}
    </ValculatorLayoutContext.Provider>
  );
};

export function useValculatorLayoutContext() {
  return useContext(ValculatorLayoutContext);
}
