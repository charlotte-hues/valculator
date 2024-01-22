import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { size } from "@/utils/device";
import { useUrlFilters } from "@/utils/hooks/useUrlFilters";

import { TabsType } from "./ValculatorLayout.types";

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
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  useEffect(() => {
    const isMobile = window.innerWidth < size.laptop;
    if (isMobile) {
      setIsMobile(true);
      setIsFullScreen(true);
    }
  }, []);

  const { activeTab, handleUpdateUrl } = useUrlFilters();

  const handleTabChange = useCallback(
    (newSection: TabsType) => {
      handleUpdateUrl({ layout: {tab: newSection} });
    },
    [handleUpdateUrl]
  );

  const handleToggleFullScreen = useCallback(
    (tab: TabsType) => {
      setIsFullScreen((prev) => !prev);
      handleTabChange(tab);
    },
    [handleTabChange]
  );

  const value = useMemo(() => {
    return {
      isMobile,
      isFullScreen,
      handleToggleFullScreen,
      activeTab,
      handleTabChange,
    };
  }, [
    activeTab,
    handleTabChange,
    handleToggleFullScreen,
    isFullScreen,
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
