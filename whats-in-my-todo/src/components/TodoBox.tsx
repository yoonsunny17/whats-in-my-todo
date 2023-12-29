import { Checkbox, Stack, Typography } from "@mui/material";
import { Priority } from "./Priority";
import React from "react";
import { PriorityType } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  checked: boolean;
  handleIsChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  priority: PriorityType;
}

export const TodoBox = ({
  id,
  checked,
  title,
  handleIsChecked,
  priority,
}: Props) => {
  const navigate = useNavigate();

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
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={() => {
        navigate(`/${id + 1}`);
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
