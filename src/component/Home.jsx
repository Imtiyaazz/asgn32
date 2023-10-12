import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [add, setAdd] = useState([]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Card sx={{ marginTop: "30px" }}>
          <CardContent>
            <h1>ToDo List</h1>
            <Grid itex xs={12}>
              <TextField onChange={(e) => setData(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => setAdd([...add, data])}
                fullWidth
                variant="contained"
                sx={{ marginTop: "10px" }}
              >
                Add
              </Button>
            </Grid>
            {add.map((item) => (
              <Grid item xs={12}>
                <h1>{item}</h1>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Home;
<Home />;
