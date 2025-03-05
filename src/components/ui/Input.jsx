function Input({ type, placeholder }) {
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
      />
    </label>
  );
}

export default Input;
