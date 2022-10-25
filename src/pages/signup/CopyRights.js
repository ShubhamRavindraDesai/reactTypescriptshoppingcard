import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          Torinit
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }