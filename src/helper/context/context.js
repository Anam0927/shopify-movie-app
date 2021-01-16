import React, { useContext, useState } from 'react';
const NomineesArrayContext = React.createContext();

export function useNomineesContext() {
  return useContext(NomineesArrayContext);
}

export function NomineesProvider({ children }) {
  const [nomineesArray, setNomineesArray] = useState([]);

  function addNominee(id) {
    if (nomineesArray.length < 5) {
      setNomineesArray([...nomineesArray, id]);
    } else {
      return 'Max reached!';
    }
  }
  function removeNominee(id) {
    setNomineesArray(() => nomineesArray.filter((noms) => noms !== id));
  }

  return (
    <NomineesArrayContext.Provider
      value={{
        nomineesArray: nomineesArray,
        addNominee: addNominee,
        removeNominee: removeNominee,
      }}
    >
      {children}
    </NomineesArrayContext.Provider>
  );
}
