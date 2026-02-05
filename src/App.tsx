import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import NewTaskWindow from "./components/NewTaskWindow/NewTaskWindow";
//import { useState, useEffect } from "react";

function App() {
  // return ;

  return (
    <>
      <div className="app-container">
        <SideBar name={"Antonio"} />
        <div className="main-container">
          <NewTaskWindow />;
        </div>
      </div>
    </>
  );
}

export default App;

// TODO: Incluir el context para recuperar los datos del usaurio.
// const [userState, setUserState] = useState();

// const getData = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/user/user-summarize");
//     const data = await res.json();
//     console.log("data ", data);
//     setUserState(data);
//   } catch (error) {
//     console.log("error al recuperar los datos del usuario ", error);
//   }
// };

// useEffect(() => {
//   getData();
// }, []);
