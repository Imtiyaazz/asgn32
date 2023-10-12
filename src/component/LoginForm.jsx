import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}></Grid>
      <Grid item xs={2}>
        <Card sx={{ marginTop: "170px" }}>
          <CardContent>
            <h1>Login Form</h1>
            <Grid item xs={12}>
              <h5
                style={{
                  padding: "10px",
                  backgroundColor: "aliceblue",
                  textAlign: "left",
                  border: "solid .1px lightgray",
                }}
              >
                9890898908
              </h5>
            </Grid>
            <Grid item xs={12}>
              <h5
                style={{
                  padding: "10px",
                  backgroundColor: "aliceblue",
                  textAlign: "left",
                  border: "solid .1px lightgray",
                }}
              >
                *****
              </h5>
            </Grid>
            <Grid item xs={12}>
              <Link to="/home">
                <Button variant="contained"> Submit</Button>
              </Link>
              <Button variant="contained" sx={{ marginLeft: 1 }}>
                Cancel
              </Button>
              <p>
                If you don't have an account?
                <a href="/login">
                  <span style={{ color: "red" }}> Register Here</span>
                </a>
              </p>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}></Grid>
    </Grid>
  );
};

export default LoginForm;
