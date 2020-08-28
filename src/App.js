import React from 'react';
import Item from "./components/item";


function App() {
  return (
    <div className="main-wrapper">
        <div className="header">
            <h1>Ты сегодня покормил кота?</h1>
        </div>

        <div className="wrapper">
            <Item />
            <Item />
            <Item />             
        </div>

    </div>
  );
}

export default App;
