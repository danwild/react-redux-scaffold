import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { messages: state.messages };
};
const ConnectedList = ({ messages }) => (
  <div>
    <div className="row">
      <h6>Error Messages</h6>
    </div>
    <div className="row">
      <ul className="list-group">
        {messages.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.message}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
const MessageList = connect(mapStateToProps)(ConnectedList);
export default MessageList;
