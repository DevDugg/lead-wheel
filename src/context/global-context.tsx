"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useMemo, useState } from "react";

export interface SectionContext {
  section: number;
  setSection: Dispatch<SetStateAction<number>>;
}

export interface GlobalContextType {
  sectionContext: SectionContext;
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [section, setSection] = useState(0);
  const sectionContext = useMemo(() => ({ section, setSection }), [section, setSection]);

  return <GlobalContext.Provider value={{ sectionContext }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;
