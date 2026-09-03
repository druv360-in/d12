import { Outlet } from "react-router-dom";
import ProfileTopBox from "./ProfileTopBox";

function AppLayout() {
  return (
    <>
      <ProfileTopBox />
      <Outlet />
    </>
  );
}

export default AppLayout;