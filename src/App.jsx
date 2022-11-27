import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {publicRouters} from "./routes/index"
import Layout from './Layout/layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {publicRouters.map(function (route,index) {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                    <route.component/>
                </Layout>
              }
            />
          )
        })
      }
      
    </Routes>
</BrowserRouter>
  )
}

export default App;
