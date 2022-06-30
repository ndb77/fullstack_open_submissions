import React from "react";

const Notification = ({message}) => {
  return (
    <div>
      <h3 className="notification">{message}</h3>
    </div>
  );
};

export default Notification;