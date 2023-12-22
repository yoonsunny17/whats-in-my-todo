import { Input } from "@mui/material";

export const Searchbar = () => {
  return (
    <Input
      disableUnderline
      placeholder="검색"
      sx={{
        fontSize: "12px",
        fontWeight: 600,
        height: "32px",
        width: "calc(70% - 12px)",
        padding: "0px 16px",
        backgroundColor: "#F5F5F5",
        borderRadius: "8px",
      }}
    />
  );
};
