import { Outlet } from "react-router-dom";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.sideBar}>SOME SIDEBAR HERE</div>
      <div className={classes.layout}>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
