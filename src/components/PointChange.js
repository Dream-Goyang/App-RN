import React, {Component} from "react";

class PointChange extends Component{
    constructor(){
        super();
        this.walk = 30000;
        this.point = 100;
        this.state= {
            walk: 30000,
            point: 100,
        };
    }
}

chageWalk= ()=>{
    this.state.walk=walk%100;
    this.state.point=point+(walk-walk%100)/100
    this.setState({walk: walk%100})
    this.setState({point: point+(walk-walk%100)/100})
}
