import { Button } from "@mui/material";

interface Props {
  buttonText: string;
  onClick: () => void;
}

export const TodoBtn = ({ buttonText, onClick }: Props) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontSize: "12px",
        fontWeight: 700,
        backgroundColor: "#D9D9D9",
        boxShadow: "none",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "#8a8a8a",
          boxShadow: "none",
        },
      }}
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};
