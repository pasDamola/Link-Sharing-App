import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>This is the layout for Dashboard and Profile Page!</div>
      <Outlet />
    </>
  );
};

export default RootLayout;
