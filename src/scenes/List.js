import React from "react";
import {Row, Col, ListGroup} from "react-bootstrap";
import ItemList from "../components/ItemList";
import dataset from "../dataset" ;

const List = () => {
    return (
        <Row>
            <Col>
                <ul>
                    {dataset.map(item => (
                        <ItemList
                            id={item.id}
                            title={item.title}
                            date={item.date}
                            img={item.img}
                            tags={item.tags}
                        />
                    ))}
                </ul>
            </Col>
        </Row>
    );
}

export default List;