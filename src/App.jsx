import { Route, Routes } from "react-router-dom";
import { Main, Navbar, LogIn, Register } from "./components/";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<LogIn />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </div>
  );
}

export default App;
