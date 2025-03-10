import { useState, useEffect } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../servise/auth";
import {
  signinUserFailure,
  signinUserStart,
  signinUserSuccess,
} from "../slice/auth";
import { Validation } from ".";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signinUserStart());
    const user = { username, email, password };

    try {
      const response = await AuthService.userRegister(user);
      dispatch(signinUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signinUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) navigate("/");
  }, []);

  return (
    <form className="form">
      <h2>Resgister</h2>
      <Validation />
      <Input
        type={"text"}
        placeholder={"Username"}
        state={username}
        setState={setUsername}
      />
      <Input
        type={"email"}
        placeholder={"Email"}
        state={email}
        setState={setEmail}
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
        {isLoading ? "loading..." : "SignIn"}
      </button>
    </form>
  );
}

export default Register;
