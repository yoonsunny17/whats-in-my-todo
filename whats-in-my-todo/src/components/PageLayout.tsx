import { Stack, StackProps } from "@mui/material";

export const PageLayout: React.FC<StackProps> = (props) => {
  return (
    <Stack
      {...props}
      sx={{
        flex: 1,
        overflowY: "auto",
        width: "390px",
        height: "844px",
        ...props.sx,
        boxShadow: 1,
        borderRadius: "8px",
        margin: "16px",
      }}
    />
  );
};
