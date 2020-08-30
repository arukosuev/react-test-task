import React, {Component} from 'react';

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state={
            selected: false
        }
        this.onSelected =this.onSelected.bind(this);
    }

    onSelected() {
        this.setState(({selected})=>({
            selected: !selected
        }))
    }

    render(){
        /*const {selected = false} = this.props;*/
        const {selected} = this.state;

        let circleClasses = "circle";
        let innerBlockClasses = "inner__block";
        let itemParagClasses = "item__parag";
        let triangleClasses = "corner-triangle__border";
        let spanText = "Чего сидишь? Порадуй котэ,";
        let buyClasses = "";
        if (selected) {
            circleClasses += ' selected';
            innerBlockClasses += ' selected3';
            itemParagClasses += ' selected2';
            triangleClasses += ' selected4';
            spanText = 'Печень разварная с артишоками.';
            buyClasses = "visible";
        }
        return (
            <div className="item" onClick={this.onSelected}>

                <div className="item__block">
                    <div className="item__top">
                        <div className="item__corner"></div>
                        <div className={triangleClasses}></div>
                        <div className={itemParagClasses}>
                            <span className="item__description">Сказочное заморское яство</span>
                        </div>
                    </div>
                    <div className={innerBlockClasses}>
                        <div className="item__header">

                            <h1>Нямушка</h1>
                            <h2>с фуа-гра</h2>
                            <ul>
                                <li>10 порций</li>
                                <li>1 мышь в подарок</li>
                            </ul>
                        </div>
                        <div className="item__image">
                            <img src="../img/cat.png" alt="кот"/>
                        </div>
                    </div>
                    <div className={circleClasses}>
                        <ul className="weight-list">
                            <li className="weight"><strong>0.5</strong></li>
                            <li className="kg"><strong>кг</strong></li>
                        </ul>
                    </div>


                </div>

                <footer className="item__footer">
                    <span>{spanText}</span>
                    <span className={buyClasses}><a className="item__link" href="#basket">купи!</a></span>
                </footer>

            </div>
        );
    }
}

/*
function Item () {

    handleClick = (e) => {
        e.preventDefault();
        console.log('Была нажата ссылка.');
        e.currentTarget.classList.toggle("selected");
    }

    return (

    );

}

export default Item;*/