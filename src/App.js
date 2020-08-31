import React from 'react';
import Item from "./components/item";
import Item2 from "./components/item2";
import Item3 from "./components/item3";


function App() {
  return (
    <div className="main-wrapper">
        <div className="header">
            <h1>Ты сегодня покормил кота?</h1>
        </div>

        <div className="wrapper">
            <Item />
            <Item2 />
            <Item3 />
        </div>

    </div>
  );
}

export default App;
