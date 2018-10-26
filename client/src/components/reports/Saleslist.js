import React from "react";
import Tux from "../hoc/Tux";

const saleslist = props => (
  <Tux>
    <div className="container">
      <hr />
      <div style={{ width: "30%", margin: "35px auto" }}>
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>{props.salestats[0] ? props.salestats[0].shopid : null}</th>
                <th>{props.salestats[1] ? props.salestats[1].shopid : null}</th>
              </tr>
            </thead>
            <tbody>
              {props.salestats
                ? props.salestats.map(daydetails => (
                    <tr key={daydetails._id}>
                      <td>{daydetails.date}</td>
                      {daydetails.orderids.map(orderid => {
                        props.total =
                          props.total + Math.trunc(orderid.totalprice);
                      })}
                      <td>{props.total}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Tux>
);

export default saleslist;
