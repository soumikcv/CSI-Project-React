import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';


import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import {Tasks} from 'components/Tasks/Tasks.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import Toggle from 'material-ui/Toggle';


import lamp from "assets/img/faces/lamp.jpg";
import light from "assets/img/faces/light.jpg";
import fan from "assets/img/faces/fan.jpg";
import cooler from "assets/img/faces/cooler.jpg";

import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from 'variables/Variables.jsx';


const ROOT_URL = 'https://uptrpfnrjl.localtunnel.me';

class Dashboard extends Component {
    createLegend(json){
        var legend = [];
        for(var i = 0; i < json["names"].length; i++){
            var type = "fa fa-circle text-"+json["types"][i];
            legend.push(
                <i className={type} key={i}></i>
            );
            legend.push(" ");
            legend.push(
                json["names"][i]
            );
        }
        return legend;
    }

    
    state = {
        rooms:[]
    }

    componentWillMount(){
        const rooms = axios.get(`${ROOT_URL}/rooms`); 
        this.setState({rooms});

    }

    renderButton(room,switchh){
        /* 
        if(this.rooms[room]["switches"][switchh] === 'active'){
            return (
            <Col md={6} mdOffset={3}>
                <Button bsStyle="info" onClick={()=>{this.buttonClick()}} block>Turn Off</Button>
             </Col>
            );
        }
        else{
            return (
            <Col md={6} mdOffset={3}>
                <Button bsStyle="default" block>Turn On</Button>
             </Col>
            );
        }
        */
    }
    buttonClick(room,switchh){
        /*
        const data = {"room":room,"switch":switchh}
           
        axios.post(`${ROOT_URL}/toggle`, data)

        
        const rooms = axios.get(`${ROOT_URL}/rooms`); 
        this.setState({rooms});


         */

    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-gleam text-warning"></i>}
                                statsText="Voltage Consumption"
                                statsValue="122V"
                                statsIconText="Living Room"
                            />
                        </Col>
                         
                    </Row>
                    <Row> 
                        <Col md={3}>
                            <UserCard
                                bgImage="https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-7-Pc-Living-Room.jpeg_?$gallery_page_750_415$"
                                avatar={lamp}
                                name="Tablelamp"
                                userName="Phillips"
                                description={
                                    <span>
                                    <br />
                                    <Col md={6} mdOffset={3}>
                                        <Button bsStyle="default" block>Turn On</Button>
                                    </Col>
                                    </span>
                                }

                            />
                        </Col>
                        <Col md={3}>
                            <UserCard
                                bgImage="https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-7-Pc-Living-Room.jpeg_?$gallery_page_750_415$"
                                avatar={light}
                                name="Light"
                                userName="Phillips"
                                description={
                                    <span>
                                        
                                    </span>
                                }
                            />
                        </Col>
                        <Col md={3}>
                            <UserCard
                                bgImage="https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-7-Pc-Living-Room.jpeg_?$gallery_page_750_415$"
                                avatar={fan}
                                name="Fan"
                                userName="Havells"
                                description={
                                    <span>
                                       
                                    </span>
                                }
                               
                            />
                        </Col>
                        <Col md={3}>
                            <UserCard
                                bgImage="https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-7-Pc-Living-Room.jpeg_?$gallery_page_750_415$"
                                avatar={cooler}
                                name="Cooler"
                                userName="Symphony"
                                description={
                                    <span>
                                       
                                    </span>
                                }

                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataSales}
                                            type="Line"
                                            options={optionsSales}
                                            responsiveOptions={responsiveSales}
                                        />
                                    </div>
                                    }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendSales)}
                                    </div>
                                }
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Card
                                id="chartActivity"
                                title="2014 Sales"
                                category="All products including Taxes"
                                stats="Data information certified"
                                statsIcon="fa fa-check"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataBar}
                                            type="Bar"
                                            options={optionsBar}
                                            responsiveOptions={responsiveBar}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendBar)}
                                    </div>
                                }
                            />
                        </Col>

                        <Col md={6}>
                            <Card
                                title="Tasks"
                                category="Backend development"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default Dashboard;
