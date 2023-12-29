import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DateFilter, DateFilterType } from "../interfaces";
import React from "react";

export const SortFilter = () => {
  const [value, setValue] = React.useState<DateFilterType>("ASC");
  const handleChange = (e: SelectChangeEvent<DateFilterType>) => {
    setValue(e.target.value as DateFilterType);
  };

  return (
    <Select
      variant="standard"
      disableUnderline
      value={value}
      onChange={handleChange}
      sx={{
        fontSize: "12px",
        fontWeight: 400,
        height: "32px",
        width: "calc(30%)",
        padding: "0 16px",
        backgroundColor: "#F5F5F5",
        borderRadius: "8px",
      }}
    >
      {Object.entries(DateFilter).map(([value, label]) => {
        return (
          <MenuItem
            key={label}
            value={value}
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              height: "32px",
            }}
          >
            {label}
          </MenuItem>
        );
      })}
    </Select>
  );
};
