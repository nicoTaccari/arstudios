import React from "react";

const ItemList = (props) => {
  const { items } = props;
  return (
    <>
      {items ? (
        <ul className="list-group list-group-flush">
          {items.map((item) => (
            <li className="list-group-item">{item}</li>
          ))}
        </ul>
      ) : (
        <div>
          <p>Nothing to show here</p>
        </div>
      )}
    </>
  );
};

export default ItemList;
