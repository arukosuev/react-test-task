import React, {Component} from 'react';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state={
            selected: false,
            hovered: false,
            descriptionChanged: false,
        }
        this.onSelected =this.onSelected.bind(this);
        this.onHovered =this.onHovered.bind(this);        
        this.changeDescription =this.changeDescription.bind(this);        
    }

    onSelected() {
        this.setState(({selected})=>({
            selected: !selected            
        }))
    }

    onHovered() {
        this.setState(({hovered})=>({
            hovered: !hovered
        }))
    }  

    changeDescription() {
        this.setState(({descriptionChanged})=>({
            descriptionChanged: !descriptionChanged
        }))
    }  


    render(){
        /*const {selected = false} = this.props;*/
        const {selected, hovered, descriptionChanged} = this.state;

        let circleClasses = "circle";
        let innerBlockClasses = "inner__block";
        let itemParagClasses = "item__parag";
        let triangleClasses = "corner-triangle__border";
        let spanText = "Чего сидишь? Порадуй котэ,";
        let buyClasses = "";
        let oldDescription = "item__description";
        let newDescription = "item__description-new visible";

        if (selected) {
            circleClasses += ' selected';
            innerBlockClasses += ' selected3';
            itemParagClasses += ' selected2';
            triangleClasses += ' selected4';
            spanText = 'Печень разварная с артишоками.';
            buyClasses = "visible";
        }

        if (hovered) {
            circleClasses += ' hovered-circle';
            innerBlockClasses += ' hovered';
            itemParagClasses += ' hovered';
            triangleClasses += ' hovered';            
        }

        
        if (descriptionChanged) {
            oldDescription += " visible";
            newDescription -= " visible";
            
        }
        



        return (
            <div className="item" onClick={this.onSelected} onMouseEnter={this.onHovered} onMouseLeave={this.onHovered && this.changeDescription}>

                <div className="item__block">
                    <div className="item__top">
                        <div className="item__corner"></div>
                        <div className={triangleClasses}></div>
                        <div className={itemParagClasses}>
                            <span className={oldDescription}>Сказочное заморское яство</span>
                            <span className={newDescription}>Котэ не одобряет?</span>
                        </div>
                    </div>
                    <div className={innerBlockClasses}>
                        <div className="item__header">

                            <h1>Нямушка</h1>
                            <h2>с фуа-гра</h2>
                            <ul className="item__list">
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