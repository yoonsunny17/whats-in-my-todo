import { Button, Stack, Typography } from "@mui/material";
import { PageLayout } from "../components/PageLayout";
import { Searchbar } from "../components/Searchbar";
import { SortFilter } from "../components/SortFilter";
import { TodoBox } from "../components/TodoBox";
import React from "react";
import { PriorityType } from "../interfaces";
import TodoHeader from "../components/TodoHeader";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const navigate = useNavigate();

  // TODO: API 쓸때 사용할거임
  const [checked, setChecked] = React.useState<boolean>(false);
  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const [title, setTitle] = React.useState<string>("");
  const [priority, setPriority] = React.useState<PriorityType>("MEDIUM");

  const handleBtnClick = () => {
    navigate("/new");
  };
  React.useEffect(() => {
    console.log(checked, title, setTitle, priority, setPriority);
  }, [checked, priority, title]);
  return (
    <PageLayout sx={{ padding: "48px 24px" }}>
      <TodoHeader buttonText="NEW" onClick={handleBtnClick} />
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
            id={idx}
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
    content: "hello world",
    priority: "HIGH",
  },
  {
    checked: false,
    title: "Title2",
    content: "im so hungry lol",
    priority: "LOW",
  },
  {
    checked: true,
    title: "Title3",
    content: "happy new year",
    priority: "HIGH",
  },
  {
    checked: true,
    title: "Title4",
    content: "coffee, water, tea",
    priority: "MEDIUM",
  },
  {
    checked: false,
    title: "Title5",
    content: "sleep, walking",
    priority: "LOW",
  },
];
