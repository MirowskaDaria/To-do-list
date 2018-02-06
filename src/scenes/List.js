import React from "react";
import {Row, Col } from "react-bootstrap";
import ItemList from "../components/ItemList";
import dataset from "../dataset" ;

const List = () => {
    return (
        <Row>
            {dataset.map(item => (
                <ItemList
                    key={item.id}
                    name={item.title}
                    year={item.date}
                    image={item.img}
                    tag={item.tags}
                />
            ))}
        </Row>
    );
}

export default List;