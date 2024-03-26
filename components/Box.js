import Box from "@mui/material/Box";
import styled from "@/components/Box.module.css";
import { Style } from "@mui/icons-material";

export default function BoxSystemProps(props) {
  return (
    <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: "2px solid grey" }}
    >
      {props.desc}
    </Box>
  );
}
