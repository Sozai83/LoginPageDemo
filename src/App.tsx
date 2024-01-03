import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ChakraProvider,
  Button
} from '@chakra-ui/react'
import theme from './theme/theme';
import { Routes, Route, RouteObject, FutureConfig } from 'react-router-dom';
import { Login } from './components/pages/Login';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/route/Router';
import { LoginUserProvider } from './providers/LoginUserProvider';



function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <LoginUserProvider>
        <RouterProvider router={router} />
        </LoginUserProvider>
      </ChakraProvider >
    </>
  )
}
export default App;
