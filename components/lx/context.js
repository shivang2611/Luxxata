'use client';
import { createContext, useContext } from 'react';

export const LxContext = createContext(null);

// The render values computed by the site controller (components/lx/LuxxataApp.jsx).
export const useLx = () => useContext(LxContext);
