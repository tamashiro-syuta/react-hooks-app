import { Button } from "@mui/material";
import React from "react";

type Props = {
  href: string
  children: string
}

const MyButton = (props: Props) => {
  const { href, children } = props

  return (
    <Button
      variant='contained'
      sx={{margin: 1}}
      href={href}
    >
      {children}
    </Button>
  )
}

export default MyButton
