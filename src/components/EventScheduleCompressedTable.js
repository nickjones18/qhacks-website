import React from "react";
import { css } from "glamor";
import moment from "moment-timezone";

moment.tz.setDefault("America/Kingston");

const EventScheduleFullSizeTable = (props) => (
  <table
    {...css({
      borderRadius: "4px",
      border: "1px solid #e4e4e4",
      borderSpacing: "0",
      margin: "16px 0",
      width: "100%",
      fontSize: "15px",
      backgroundColor: "#f6f6f6",
      "> tbody tr td": {
        padding: "3px 16px",
        textAlign: "left"
      },
      "> tbody tr td:nth-child(2)": {
        paddingLeft: "0px"
      },
      "> tbody tr .eventStart": {
        color: "#c81c2e"
      },
      "> tbody tr .eventEnd": {
        color: "#00205b"
      },
      "> tbody tr:nth-child(1) td": {
        paddingTop: "16px"
      },
      "> tbody:not(:last-child) tr:nth-child(2) td": {
        borderBottom: "2px solid #e4e4e4"
      },
      "> tbody tr:nth-child(2) td": {
        paddingBottom: "16px"
      }
    })}
  >
    {props.data.map((item) => (
      <tbody key={`${item.eventName} ${item.startDate}`}>
        <tr>
          <td className="eventStart">
            {moment(item.startDate).format("h:mm\xa0A")}
          </td>
          <td className="eventName">
            <strong>{item.eventName}</strong>
          </td>
        </tr>
        <tr>
          <td className="eventEnd">
            {moment(item.endDate).format("h:mm\xa0A")}
          </td>
          <td classname="eventLocation">{item.location}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

export default EventScheduleFullSizeTable;
