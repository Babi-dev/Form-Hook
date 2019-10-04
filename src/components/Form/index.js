import React from "react";
import useForm from "../../hooks/useForm";

export default () => {
  const [{ data, loading }, handleChange, handleSubmit] = useForm();

  const sendData = () => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sendData)}>
        <input
          onChange={handleChange}
          type="text"
          name="email"
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
