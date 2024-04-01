import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Home" };

export default function Home() {
  return (
    <Stack spacing={2} direction="column">
      <Typography variant="h3" color="primary">Microscope</Typography>
      <Typography variant="h3">Boilerplate React</Typography>
      <Typography variant="subtitle1">Product Engineering Starter Kit</Typography>
    </Stack>
  );
}
