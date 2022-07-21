import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={2}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width={60}/>
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}