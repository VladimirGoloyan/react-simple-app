import React from "react";

import "./ListItem.scss";

const ListItem = ({ element, heading }) => {
  return (
    <div className="app-user">
      {heading
        ? Object.keys(element).map((elem, idx) => {
            return (
              <span key={idx} className={`app-user__${elem}`}>
                {elem}
              </span>
            );
          })
        : Object.keys(element).map((elem, idx) => {
            return (
              <span key={idx} className={`app-user__${elem}`}>
                {element[elem]}
              </span>
            );
          })}
    </div>
  );
};

export default ListItem;
