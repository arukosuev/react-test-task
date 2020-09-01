import React, {Component} from 'react';

export default class Item3 extends Component {

    render(){
        
        return (
            <div className="item" onClick={this.onSelected}>

                <div className="item__block not-active">
                    <div className="item__top">
                        <div className="item__corner"></div>
                        <div className="corner-triangle__border not-active-border"></div>
                        <div className="item__parag not-active-border">
                            <span className="item__description not-active">Сказочное заморское яство</span>
                        </div>
                    </div>
                    <div className="inner__block not-active-border">
                        <div className="item__header not-active">

                            <h1>Нямушка</h1>
                            <h2>с курой</h2>
                            <ul className="item__list not-active">
                                <li>100 порций</li>
                                <li>5 мышей в подарок</li>
                                <li>заказчик доволен</li>
                            </ul>
                        </div>
                        <div className="item__image not-active-image">
                            <img src="../img/cat.png" alt="кот"/>
                        </div>
                    </div>
                    <div className="circle not-active-filling">
                        <ul className="weight-list">
                            <li className="weight"><strong>5</strong></li>
                            <li className="kg"><strong>кг</strong></li>
                        </ul>
                    </div>


                </div>

                <footer className="item__footer">
                    <span className="item__footer-description not-active-span">Печалька, с курой закончился.</span>
                </footer>

            </div>
        );
    }
}
