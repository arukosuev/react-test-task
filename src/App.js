import React from 'react';


function App() {
  return (
    <div className="main-wrapper">
        <div className="header">
            <h1>Ты сегодня покормил кота?</h1>
        </div>

        <div className="wrapper">

            <div className="item">
                
                <div className="item__block">                    
                    <div className="item__top">
                        <div className="item__corner"></div>
                        <div className="item__parag">
                            <span className="item__description">Сказочное заморское яство</span>
                        </div>
                    </div>
                    <div className="item__header">
                        
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
                    <div className="item__image">
                        <img src="../img/cat.png" alt="кот"/>
                    </div>
                    
                </div>

                <footer className="item__footer">
                    <span>Чего сидишь? Порадуй котэ,</span>
                    <span><a class="item__link" href="#basket">купи/</a></span>
                </footer>

            </div>

            
            <div className="item">
                <div className="item__block">2</div>
            </div>
            <div className="item">
                <div className="item__block">3</div>
            </div>
        </div>

    </div>
  );
}

export default App;
