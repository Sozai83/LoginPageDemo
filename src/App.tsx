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



function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ChakraProvider theme={theme}>
        <Login test="test" />
        <Button colorScheme="teal" >Button</Button>
        <p>AAAA</p>
      </ChakraProvider >
    </>


  )
}
export default App;
