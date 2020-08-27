import React from 'react';


function App() {
  return (
    <div className="main-wrapper">
        <div className="header">
            <h1>Ты сегодня покормил кота?</h1>
        </div>

        <div className="wrapper">
            <div className="item item-first">
                <div className="item-header-first">
                    <h3>Сказочное заморское яство</h3>
                    <h1>Нямушка</h1>
                    <h2>с фуа-гра</h2>
                    <ul>
                        <li>10 порций</li>
                        <li>1 мышь в подарок</li>
                    </ul>
                </div>
                <div className="circle">
                    <ul className="weight-list">
                        <li className="weight"><strong>0.5</strong></li>
                        <li className="kg"><strong>кг</strong></li>
                    </ul>
                </div>
                <img src="../img/cat.jpg" alt="кот"/>

            </div>

            <div className="item">2</div>
            <div className="item">3</div>
        </div>

    </div>
  );
}

export default App;
