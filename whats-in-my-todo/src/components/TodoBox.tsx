import { Checkbox, Stack, Typography } from "@mui/material";
import { Priority } from "./Priority";
import React from "react";
import { PriorityType } from "../interfaces";

interface Props {
  checked: boolean;
  handleIsChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  priority: PriorityType;
}

export const TodoBox = ({
  checked,
  title,
  handleIsChecked,
  priority,
}: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: "8px",
        marginY: "6px",
        background: "#F5F5F5",
        borderRadius: "8px",
        height: "56px",
      }}
    >
      <Stack direction="row" alignItems="center">
        {/* checkbox */}
        <Checkbox
          checked={checked}
          onChange={handleIsChecked}
          size="small"
          color="default"
          disableRipple
        />
        {/* title */}
        <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
          {title}
        </Typography>
      </Stack>
      {/* priority */}
      <Priority text={priority} />
    </Stack>
  );
};
