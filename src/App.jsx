import { Route, Routes } from "react-router-dom";
import { Main, Navbar, LogIn, Register } from "./components/";
import { useEffect } from "react";
import AuthService from "./servise/auth";
import { useDispatch } from "react-redux";
import { signinUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/persistance-store";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signinUserSuccess(response.user));
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
  }, []);

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
