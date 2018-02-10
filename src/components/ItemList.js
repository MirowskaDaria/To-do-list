import React from "react";
import {Button,ListGroup,ListGroupItem} from "react-bootstrap";

const ItemList = (props) => {

    const handleClick = () => {

    };

    const getFormatedDate = () => {
        const date = new Date(props.date.replace(' ', ''));

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return [year, month, day].join("-");
    };

    return (
        <li>
            <img src={props.img}/>
            <br>{props.id}</br>
            <br>{props.title}</br>
            <br>{getFormatedDate()}</br>
            <div>{props.tags}</div>
            <Button onClick={handleClick}>Szczegóły</Button>
        </li>
    )
};

export default ItemList;