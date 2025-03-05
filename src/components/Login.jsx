import { useState } from "react";
import { Input } from "./ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };

  return (
    <form className="form">
      <h2>Log In</h2>
      <Input
        type={"text"}
        placeholder={"Username"}
        state={username}
        setState={setUsername}
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        state={password}
        setState={setPassword}
      />
      <button
        className="btn btn-soft btn-primary"
        onClick={onSubmit}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "loading..." : "LogIn"}
      </button>
    </form>
  );
}

export default Login;
