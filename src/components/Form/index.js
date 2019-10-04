import React from "react";
import useForm from "../../hooks/useForm";
import * as Yup from "yup";

export default () => {
  const [{ data, loading }, handleChange, handleSubmit] = useForm();

  const sendData = () => {
    console.log(data);
  };

  // const schema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Custom invalid email message")
  //     .required("Custom required message"),
  //   password: Yup.string()
  //     .min(4)
  //     .required()
  // });

  return (
    <div>
      <form schema={schema} onSubmit={handleSubmit(sendData)}>
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
