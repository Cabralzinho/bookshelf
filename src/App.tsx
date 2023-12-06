import { AppBar } from "./components/AppBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex w-full justify-center overflow-hidden">
        <AppBar />
      <div className="flex flex-col gap-8 w-full max-w-[24rem] pb-[5rem] mobile:px-[1rem]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
