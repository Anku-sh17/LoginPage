import React from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader } from "./style";
import EntryCard from "../components/EntryCard/EntryCard";
import InputGroup from "../components/InputGroup/InputGroup";
import Input from "../components/Input/Input";
import Button from "../components/Button";

function Login() {
  return (
    <EntryPage>
      <PageHeader to="/">ASSIGNMENT</PageHeader>
      <EntryCard>
        <h2>Log In</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="login-email">Login ID</label>
            <Input type="text" placeholder="name@email.com" id="login-email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="login-passowrd">Password</label>
            <Input type="password" placeholder="Password" id="login-password" />
          </InputGroup>

          <Button type="submit">Log In</Button>
        </form>
        <span>
          Don't have an account?
          <Link to="/signup">Sign up</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}

export default Login;
