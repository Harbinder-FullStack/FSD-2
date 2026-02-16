import { createContext, useState } from "react";

// createContext function is used to create a Context object
export const CounterContext = createContext();

// CounterContextProvider : component to provide context values to its children
export function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);
  
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);

  const obj1 = { count, setCount} //, v1, setV1, v2, setV2 };
  
  // const obj2 = { 
  //   "count" : count, 
  //   "setCount" : setCount 
  // }

  return (
    <CounterContext.Provider value={obj1}>
      {children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;