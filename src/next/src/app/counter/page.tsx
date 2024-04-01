'use client';

import { Metadata } from "next";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";

// export const metadata: Metadata = { title: "counter" };

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => { setCounter(x => x + 1) }

  return (
    <Stack className="m-2" spacing={2} direction="row">
      <p>Counter : {counter}</p>
      <Button onClick={handleClick} variant="contained">Click me</Button>
    </Stack>
  );
}
