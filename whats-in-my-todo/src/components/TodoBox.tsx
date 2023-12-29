import { Checkbox, Stack, Typography } from "@mui/material";
import { Priority } from "./Priority";
import React from "react";

interface Props {
  isChecked: boolean;
  title: string;
}

export const TodoBox = ({ isChecked, title }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: "8px",
        background: "#F5F5F5",
        borderRadius: "8px",
        height: "56px",
      }}
    >
      <Stack direction="row" alignItems="center">
        {/* checkbox */}
        <Checkbox checked={isChecked} size="small" />
        {/* title */}
        <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
          {title}
        </Typography>
      </Stack>
      {/* priority */}
      <Priority text="LOW" />
    </Stack>
  );
};
