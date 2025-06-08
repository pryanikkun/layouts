import React from "react";
import '../css/Store.css'
import IconSwitch from './IconSwitch.jsx'
import CardsView from "./CardsView.jsx";
import ListView from "./ListView.jsx";

class Store extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            viewProducts: 'view_module',
        }
        this.products = [{
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }]
    }

    onSwitch = () => {
        this.setState( prevState => (
            {
                viewMode: prevState.viewMode === 'view_list' ?
                    'view_module' : 'view_list'
            })
        );
    }

    render() {
        const { viewMode } = this.state
        const icon = viewMode === 'view_list' ? 'view_list' : 'view_module';

        return (
            <div className="store">
                <div className="toolbar">
                    <IconSwitch icon={icon} onSwitch={this.onSwitch}/>
                </div>
                {viewMode === 'view_list' ? (
                    <ListView products={this.products}/>
                ) : (
                    <CardsView products={this.products}/>
                )}
            </div>
        )
    }
}

export default Store
