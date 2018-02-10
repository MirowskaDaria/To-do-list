import React from "react";
import {Button,ListGroup,ListGroupItem} from "react-bootstrap";

const ItemList = (props) => {

    const handleClick = () => {

    }

    return (
        <ListGroup>
            <ListGroupItem>
                <img src={props.img}/>
                {props.title}
                {props.date}
                {props.date}
                <Button onClick={handleClick}>Szczegóły</Button>
            </ListGroupItem>
        </ListGroup>
    )
};

export default ItemList;