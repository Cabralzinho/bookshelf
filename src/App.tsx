import { AppBar } from "./components/AppBar";
import { Outlet } from "react-router-dom";
import "@/App.css";

function App() {
  return (
    <div className="flex w-full h-screen justify-center overflow-hidden overflow-y-auto ">
        <AppBar />
      <div className="flex flex-col gap-8 w-full max-w-[24rem] px-2 h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
