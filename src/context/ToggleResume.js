import { createContext, useState } from 'react';

// Create the context
export const ToggleResume = createContext();

// Create the provider component
export const ToggleResumeProvider = ({ children }) => {
  const [resume, setResume] = useState(false); // State for resume visibility

  return (
    <ToggleResume.Provider value={{ resume, setResume }}>
      {children}
    </ToggleResume.Provider>
  );
};
