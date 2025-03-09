import { useState } from "react";

function Input({ type, placeholder, state, setState }) {
  return (
    <label className="input validator">
      <input
        type={type}
        required
        placeholder={placeholder}
        pattern="[A-Za-z][A-Za-z0-9\-]*"
        minLength="3"
        maxLength="30"
        title="Only letters, numbers or dash"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </label>
  );
}

export default Input;
