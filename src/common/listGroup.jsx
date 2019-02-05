import React, { Component } from "react";

const ListGroup = props => {
  const { items, textProperty, valueProperty } = props;
  return (
    <ul className="list-group">
      {items.map(genre => (
        <li
          key={genre[valueProperty]}
          className="list-group-item list-group-item-action"
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_.id"
};
export default ListGroup;
