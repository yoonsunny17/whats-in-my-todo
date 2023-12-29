import { Typography, Stack, Button } from "@mui/material";

interface Props {
  buttonText: string;
  onClick: () => void;
}

const TodoHeader = ({ buttonText, onClick }: Props) => {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
          WHATS IN MY TODO
        </Typography>
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
      </Stack>
      <Typography
        sx={{ fontSize: "12px", fontWeight: 400, marginBottom: "16px" }}
      >
        할일을 기록하세요
      </Typography>
    </Stack>
  );
};

export default TodoHeader;
