import React from "react";

import useForm from "../../hooks/useForm";

import { Icon } from "@material-ui/core";

import { Form, Input, Button, ContainerLogo, Span } from "../../styles";

export default () => {
  const [{ data, loading }, handleChange, handleSubmit] = useForm();

  const sendData = () => {
    console.log(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(sendData)}>
        <ContainerLogo className="logo-container">
          <Icon style={{ fontSize: 40, color: "#35459E" }}>menu_book</Icon>
          <Span>BibComp</Span>
        </ContainerLogo>

        <Input
          onChange={handleChange}
          required
          type="text"
          name="name"
          placeholder="Name"
        />
        <Input
          onChange={handleChange}
          required
          type="text"
          name="email"
          placeholder="E-mail"
        />
        <Input
          onChange={handleChange}
          required
          type="password"
          name="password"
          placeholder="Password"
        />
        <Button type="submit">{loading ? "Sending..." : "Send"}</Button>
      </Form>
    </div>
  );
};
