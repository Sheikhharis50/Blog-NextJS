import Meta from "../components/Meta";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { BASE_URL } from "../config";
import { APP_NAME, RELEASED_YEAR } from "../utils/Constants";
import { setKeyAndVal } from "../utils/Sessions";
import { postData } from "../utils/Api";
import { isEmptyObj } from "../utils/Helpers";
import AuthLayout from "../components/Layout/AuthLayout";
import { useState } from "react";
import { useRouter } from "next/router";
import ErrorMessage from "../components/Common/ErrorMessage";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={BASE_URL}>
        {APP_NAME}
      </Link>
      {", "}
      {RELEASED_YEAR}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialValues = {
  email: "",
  password: "",
  errorMessage: "",
};

const login = () => {
  const classes = useStyles();
  const router = useRouter();
  const [formData, setFormData] = useState(initialValues);

  const showErrorMessage = (message) => {
    setFormData({ ...initialValues, errorMessage: message });
    setTimeout(() => {
      setFormData({ ...initialValues });
    }, 1500);
  };

  const onSubmitHandel = async (e) => {
    e.preventDefault();
    let message = "Email and password required!";
    if (formData.email && formData.password) {
      const res = await postData("auth/login", formData);
      if (res.status) {
        setKeyAndVal("userData", res.data);
        router.push("/");
        return;
      }
      message = res.message;
    }
    showErrorMessage(message);
  };

  return (
    <AuthLayout>
      <Container component="main" maxWidth="xs">
        <Meta title="Login" />
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmitHandel}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              autoFocus
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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              autoComplete="current-password"
            />
            <ErrorMessage message={formData.errorMessage} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </AuthLayout>
  );
};

export default login;
