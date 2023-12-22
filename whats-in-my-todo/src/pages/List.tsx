import { Button, Stack, Typography } from "@mui/material";
import { PageLayout } from "../components/PageLayout";
import { Searchbar } from "../components/Searchbar";
import { SortFilter } from "../components/SortFilter";

export const List = () => {
  return (
    <PageLayout sx={{ padding: "48px 24px" }}>
      <Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
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
          >
            NEW
          </Button>
        </Stack>
        <Typography sx={{ fontSize: "12px", marginBottom: "16px" }}>
          할일을 기록하세요
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Searchbar />
        <SortFilter />
      </Stack>
    </PageLayout>
  );
};
