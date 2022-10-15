import React from "react";

import { Header } from "./components";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div>
       <div className="w-screen h-auto flex flex-col">
         <Header />
       </div>
       <Slider />
    </div>


  );
}

export default App;