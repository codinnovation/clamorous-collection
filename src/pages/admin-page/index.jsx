import React from "react";
import SideBar from "./sidebar";
import Main from "./main";

function AdminHome() {
  return (
    <>
      <div>
        <SideBar>
          <Main />
        </SideBar>
      </div>
    </>
  );
}
export default AdminHome;
