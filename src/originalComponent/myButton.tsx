import { Button } from "@mui/material";
import React from "react";

type Props = {
  href: string;
  children: string;
};

const MyButton = (props: Props) => {
  const { href, children } = props;

  return (
    <Button
      variant="contained"
      sx={{
        marginY: 1,
        marginX: "auto",
      }}
      href={href}
    >
      {children}
    </Button>
  );
};

export default MyButton;
