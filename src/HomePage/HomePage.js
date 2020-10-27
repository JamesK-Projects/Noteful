import React, { Component } from 'react';
import HomeSidebar from '../HomeSidebar/HomeSidebar';
import HomeMain from '../HomeMain/HomeMain';
import './HomePage.css';


class HomePage extends Component {
    render() { 
        return (
            <div className="layout">
                <div className="sidebar">
                    <HomeSidebar />
                </div>
                <div className="main">
                    <HomeMain />
                </div>
            </div>
        );
    }
}
 
export default HomePage;