import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {Backdrop} from "@mui/material";


export default function CircularIndeterminate() {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
      <div style={{marginBottom: '130px'}}>
        <CircularProgress color="inherit" />
      </div>
    </Backdrop>
  );
}