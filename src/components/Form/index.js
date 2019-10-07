import React from "react";

import useForm from "../../hooks/useForm";

import api from "../../services/Api";

import { Icon } from "@material-ui/core";

import { Form, Input, Button, ContainerLogo, Span } from "../../styles";

export default ({ history }) => {
  const [{ data, loading }, handleChange, handleSubmit] = useForm();

  async function sendData(
    name = data.name,
    email = data.email,
    password = data.password
  ) {
    console.log(data);

    if (!name || !email || !password) {
      alert("Preencha todos os dados para se cadastrar");
    } else {
      try {
        await api.post("/auth/register", { name, email, password });
        history.push("/");
      } catch (error) {
        alert("Ocorreu um erro ao registrar sua conta. T.T");
      }
    }
  }

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
