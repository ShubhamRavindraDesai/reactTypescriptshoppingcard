import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/material/LockOutlined";
import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/material/styles";
import Container from "@mui/material/Container";

import Copyright from "./CopyRights";
import React, { useState } from "react";
import { signupUser } from "../../controllers/prodController";
// import { baseUrl } from "../Config";
import {userActions} from './../../store/reducers/userReducer'
import { useDispatch } from "react-redux";

export const SignUp = () => {
  const dispatch = useDispatch()

  const [inputState, setInputState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    

    signupUser(inputState).then(res => {
      dispatch(userActions.saveUserToken(res.token))
    })
    // dispatch(userActions.setUserData(inputState))
    
  };

  const inputSave = (e: React.FormEvent) => {
    setInputState((prevstate) => {
      const value = (e.target as HTMLInputElement).value;
      
      return { ...prevstate, [(e.target as HTMLInputElement).name]: value };
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoFocus
            onChange={inputSave}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={inputSave}
            // autoComplete="email"
            // autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={inputSave}
            // autoComplete="current-password"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            onChange={inputSave}
            // autoComplete="confirm-password"
          />
          {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
