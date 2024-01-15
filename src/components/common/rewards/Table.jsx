import "./Table.css";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Table = ({ data, deleteData }) => {
  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.student}</td>
                <td>{row.email}</td>
                <td>
                  <span className={`${row.status}`}>{row.status}</span>
                </td>
                <td>
                  <span className="actions">
                    <AiFillDelete onClick={() => deleteData(idx)} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
