import { useNavigate } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import TodoHeader from "../components/TodoHeader";
import { Stack, Typography } from "@mui/material";
import { Priority } from "../components/Priority";
import { TodoBtn } from "../components/TodoBtn";

export const Detail = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(-1);
  };

  return (
    <PageLayout sx={{ padding: "48px 24px" }}>
      <TodoHeader buttonText="BACK" onClick={handleBtnClick} />
      {/* title & content */}
      <Stack
        sx={{
          backgroundColor: "#F5F5F5",
          padding: "20px",
          borderRadius: "4px",
        }}
        gap={1.5}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "4px",
            padding: "12px",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            {DETAIL_DATA.title}
          </Typography>
          <Priority text={DETAIL_DATA.priority} />
        </Stack>
        <Typography
          sx={{
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            borderRadius: "4px",
            padding: "12px",
            minHeight: "300px",
          }}
        >
          {DETAIL_DATA.content}
        </Typography>
      </Stack>
      {/* delete & edit */}
      <Stack
        direction="row"
        gap={1.5}
        sx={{ marginTop: "12px" }}
        justifyContent="end"
      >
        <TodoBtn buttonText="DELETE" onClick={() => console.log("delete")} />
        <TodoBtn buttonText="EDIT" onClick={() => console.log("edit")} />
      </Stack>
    </PageLayout>
  );
};

export const DETAIL_DATA = {
  checked: false,
  title: "Title1",
  content: "hello world",
  priority: "HIGH",
};
