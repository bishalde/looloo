import { BrowserRouter, Routes ,Route} from "react-router-dom";

import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";


import './App.css'
import { Page404 } from "./Pages/Page404";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<HomePage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="signup" element={<SignupPage />}/>
            <Route path="*" element={<Page404 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
