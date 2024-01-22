import { PropsWithChildren } from "react";

import { MuiProvider } from "@/theme";

import { ChecklistDataContextProvider } from "./ValculatorDataContext/checklist/checklistData.context";
import { ItemsDataContextProvider } from "./ValculatorDataContext/items/itemsData.context";
import { ValculatorLayoutContextProvider } from "./ValculatorDataContext/layout/ValculatorLayout.context";
import { ValculatorDataContextProvider } from "./ValculatorDataContext/ValculatorData.context";

export const ValculatorContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <MuiProvider>
      <ValculatorLayoutContextProvider>
        <ItemsDataContextProvider>
          <ChecklistDataContextProvider>
            <ValculatorDataContextProvider>
              {children}
            </ValculatorDataContextProvider>
          </ChecklistDataContextProvider>
        </ItemsDataContextProvider>
      </ValculatorLayoutContextProvider>
    </MuiProvider>
  );
};
