import React, { useEffect } from "react";
import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/sidebar";
import AdminView from "../views/MainView";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Main = (props) => {
  const { user } = useSelector((state) => state.authUser);
  const history = useHistory();
  useEffect(() => {
    if (!user?.token) {
      history.push("/auth/login");
    }
  }, [user?.token]);
  return (
    <>
      <div className="bg-slate-50">
        <div>
          <Navbar />
        </div>
        <div className="max-w-[2300px] mt-[75px] flex flex-row justify-between ">
          <div className={`${Navbar === true ? "w-0" : "md:w-56"}  h-full`}>
            <Sidebar />
          </div>
          <div className="overflow-auto w-full h-full z-10">
            {/* <AdminView /> Render AdminView here */}
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
