import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { messages: state.messages };
};
const ConnectedList = ({ messages }) => (
  <ul className="list-group list-group-flush">
    {messages.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.message}
      </li>
    ))}
  </ul>
);
const MessageList = connect(mapStateToProps)(ConnectedList);
export default MessageList;