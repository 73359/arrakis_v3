import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { Login } from "./components/Login"
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Home from "./components/Home";
import { Layout } from './components/Layout';


const App = () => {
  return (
    <Router>
      <div>
        <section>
          <Routes>
          <Route path="/login" element={<Login/>}/>
            <Route 
              path="/home"
              element={
                <Layout>
                  < Home />
                </Layout>
              }
            />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
