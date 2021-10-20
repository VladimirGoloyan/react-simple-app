import React from "react";

import "./ListItem.scss";

const ListItem = ({ element, heading, deleter }) => {
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
        <button className="app-list-item__delete-button" onClick={deleter}>
          X
        </button>
      )}
    </div>
  );
};

export default ListItem;
