import React, { createContext, useContext } from 'react';

export const SiteContext = createContext();

export const SiteProvider = ({ value, children }) => (
  <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
);

export const useSiteValue = () => useContext(SiteContext);
