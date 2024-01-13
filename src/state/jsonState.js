import { createContext, useContext, useState } from "react";
const AppContext = createContext({
  ui: null,
  resetUi: (data) => {},
});

export default function JsonContext({ children }) {
  const [ui, setUi] = useState(null);

  function resetUi(data) {
    setUi(data);
  }

  return (
    <AppContext.Provider
      value={{
        ui,
        resetUi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
