import React from "react";

import "../styles/ListItem.scss";

const ListItem = ({ element, heading, deleter, editor }) => {
  return (
    <div className="app-list-item">
      {Object.keys(element).map((elem, idx) => {
        return (
          <span key={idx} className={`app-user__${elem}`}>
            {heading
              ? elem.charAt(0).toUpperCase() + elem.slice(1)
              : element[elem]}
          </span>
        );
      })}
      {!heading && (
        <>
          <button className="app-list-item__update-button" onClick={editor}>
            /
          </button>
          <button className="app-list-item__delete-button" onClick={deleter}>
            X
          </button>
        </>
      )}
    </div>
  );
};

export default ListItem;
