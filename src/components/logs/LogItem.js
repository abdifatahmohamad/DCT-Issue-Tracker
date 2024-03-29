import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../Actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";
const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { message, attention, date, id, tech } = log;
  const onDelete = (id) => {
    deleteLog(id);
    M.toast({ html: "Log Deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
          onClick={() => setCurrent(log)}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last update 
          by <span className="black-text">{tech}</span> on{" "}
          <Moment format="DD MMMM  YYYY,h:mm:ss a" local="en">
            {date}
          </Moment>
        </span>
        <a
          href="#!"
          onClick={(e) => onDelete(id)}
          className="secondary-content"
        >
          <i className="material-icons red-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
