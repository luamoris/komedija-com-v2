import {Routes, Route, } from "react-router-dom";

export default function AppRouter_2() {
   return (
      <Routes>
         <Route path="/:lang" element={<div>Layout</div>}>

            <Route index element={<div>Home</div>} />
            <Route path="login" element={<div>Login</div>} />
            <Route path="posters" element={<div>Posters</div>} />
            <Route path="profile" element={<div>Profile</div>} />
            <Route path="*" element={<div>404</div>} />

         </Route>
      </Routes>
   );
}