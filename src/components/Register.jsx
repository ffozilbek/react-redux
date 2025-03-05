import { useState } from "react";
import { Input } from "./ui";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form">
      <h2>Resgister</h2>
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
      <button className="btn btn-soft btn-primary">Sign In</button>
    </form>
  );
}

export default Register;
