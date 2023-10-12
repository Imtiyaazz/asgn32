import { Card, CardContent, Grid, TextField, Button } from "@mui/material";
import React from "react";

const RegistrationForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Card sx={{ marginTop: "20px" }}>
          <Grid item xs={12}>
            <h1>Registration Form</h1>
          </Grid>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth variant="outlined" placeholder="Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="email id"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Mobile Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="UserName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Confirm Password"
                />

                <Grid item xs={12} sx={{ marginTop: "10px" }}>
                  <Button variant="contained" sx={{ width: "210px" }}>
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginLeft: 1, width: "210px" }}
                  >
                    Cancel
                  </Button>
                </Grid>
                {/* <Grid item xs={12}> */}
                <p>
                  If you have already registered.
                  <a href="/login">
                    <span style={{ color: "red" }}>Login Here</span>
                  </a>
                </p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default RegistrationForm;
