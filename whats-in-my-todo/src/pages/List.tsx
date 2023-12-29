import { Button, Stack, Typography } from "@mui/material";
import { PageLayout } from "../components/PageLayout";
import { Searchbar } from "../components/Searchbar";
import { SortFilter } from "../components/SortFilter";
import { TodoBox } from "../components/TodoBox";
import React from "react";
import { PriorityType } from "../interfaces";

export const List = () => {
  // TODO: API 쓸때 사용할거임
  const [checked, setChecked] = React.useState<boolean>(false);
  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const [title, setTitle] = React.useState<string>("");
  const [priority, setPriority] = React.useState<PriorityType>("MEDIUM");
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
        <Typography
          sx={{ fontSize: "12px", fontWeight: 400, marginBottom: "16px" }}
        >
          할일을 기록하세요
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: "20px" }}
      >
        <Searchbar />
        <SortFilter />
      </Stack>
      {MOCK_DATA.map((val, idx) => {
        console.log(val);
        return (
          <TodoBox
            key={idx}
            checked={val.checked}
            handleIsChecked={handleIsChecked}
            title={val.title}
            priority={val.priority as PriorityType}
          />
        );
      })}
    </PageLayout>
  );
};

export const MOCK_DATA = [
  {
    checked: false,
    title: "Title1",
    priority: "HIGH",
  },
  {
    checked: false,
    title: "Title2",
    priority: "LOW",
  },
  {
    checked: true,
    title: "Title3",
    priority: "HIGH",
  },
  {
    checked: true,
    title: "Title4",
    priority: "MEDIUM",
  },
  {
    checked: false,
    title: "Title5",
    priority: "LOW",
  },
];
