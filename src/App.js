import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UserRegister from "./pages/userRegister/UserRegister";
import UserList from "./pages/userList/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
       <BrowserRouter>
           <Routes>
               <Route index element={<UserRegister/>}/>
               <Route path="/users" element={<UserList/>}/>
           </Routes>
       </BrowserRouter>
    );
};
export default App;