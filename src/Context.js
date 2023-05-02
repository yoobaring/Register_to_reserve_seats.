import React, { createContext, useState } from 'react';

const RegisteredPeopleContext = createContext();

const RegisteredPeopleContextProvider = ({ children }) => {
      console.log(children, 'fdsfsdf')
  const [registeredPeople, setRegisteredPeople] = useState([]);

  return (
    <RegisteredPeopleContext.Provider value={{ registeredPeople, setRegisteredPeople }}>
      {children}
    </RegisteredPeopleContext.Provider>
  );
};

export { RegisteredPeopleContext, RegisteredPeopleContextProvider };
