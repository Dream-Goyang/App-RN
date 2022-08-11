import React, {useState} from "react";

function PointChange() {
    const [walk, setWalk, point, setPoint] = useState(0);

    const changeB = () => {
        setPoint(prevPoint => prevPoint+(prevWalk-(prevWalk%100))/100)
        setWalk(prevWalk => prevWalk%100);
    }

    return(walk, point)
}
