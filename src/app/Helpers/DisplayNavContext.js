"use client";

import { createContext, React , useState } from "react";
import UnitElemDisplay from "../../../components/UnitElemDisplay/page";
import AppHeader from "../App/page";
import EyeOrNav from "./EyeBunOrNavBar";

export const DisplayNavContext = createContext();

export default function DisplayContext({children}) {
  const [displayNav, setDisplayNav] = useState(false);
  return (
    <DisplayNavContext.Provider value={[displayNav, setDisplayNav]}>
      <div className="flex">
        <UnitElemDisplay
          styles={
            "text-heading-xl font-extrabold border-r-2 border-r-lines-light align-text-bottom p-4"
          }
        >
          kanban
        </UnitElemDisplay>
        <AppHeader />
      </div>
      <EyeOrNav />
      {children}
    </DisplayNavContext.Provider>
  );
}