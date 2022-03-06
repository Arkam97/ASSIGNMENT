import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Newproduct() {
  return (
    <div className="Container">
      <div className="SectionTitle" style={{ marginTop: "50px" }}>PRODUCTS
        <span style={{ color: "#001EB9", letterSpacing: "0" }}> {'>'}  Add new product</span>
      </div>
      <Grid container spacing={2}>
        <Grid xs={12}>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <span >SKU</span>
            <TextField id="filled-size-small"
              variant="filled"
              size="small" />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <span >Name</span>
            <TextField id="filled-size-small"
              variant="filled"
              size="small" />
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <span >QTY</span>
            <TextField id="filled-size-small"
              variant="filled"
              size="small" />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <span >Product Description</span>
        </Grid>
        <Grid item xs={12}>
          <p >A small description about the product</p>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: 500 , height: 200}}
          />
        </Grid>
      </Grid>
    </div>
  )
}
