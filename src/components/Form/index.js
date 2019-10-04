import React from "react";
import useForm from "../../hooks/useForm";

export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const sendData = () => {
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sendData)}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="E-mail"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="password"
        />
        <button type="submit">{loading ? "Sending..." : "Send"}</button>
      </form>
    </div>
  );
};
