import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import {Button }from "material-ui";
// import {TextField }from "material-ui";
import { PasswordStr } from "./PasswordStr";
interface Iprops {}
export const SignUpForm = (props: Iprops) => {
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>

      <form>
        <TextField name="username" />
        <TextField name="email" />
        <TextField name="password" />

        <div className="pwStrRow">
          <div>
            <PasswordStr />
            <Button />
          </div>
        </div>
        <TextField />
        <br />
        <Button />
      </form>
      <p>
        Aleady have an account? <br />
        <a>Log in here</a>
      </p>
    </div>
  );
};
