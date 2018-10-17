import React from "react";
import { css } from "glamor";
import moment from "moment-timezone";

moment.tz.setDefault("America/Kingston");

const EventScheduleFullSizeTable = (props) => (
  <table
    {...css({
      borderRadius: "16px",
      fontWeight: "500",
      overflow: "hidden",
      borderCollapse: "collapse",
      margin: "14px 0",
      width: "100%",
      "> tbody tr td, > tbody tr th": {
        padding: "12px 32px",
        textAlign: "left"
      }
    })}
  >
    <tbody>
      <tr
        css={{
          backgroundColor: "#C81C2E",
          color: "white"
        }}
      >
        <th>Time</th>
        <th>Duration</th>
        <th>Event</th>
        <th>Location</th>
      </tr>
      {props.data.map((item) => (
        <tr
          css={{ backgroundColor: "#F6F6F6" }}
          key={`${item.eventName} ${item.startDate}`}
        >
          <td>{moment(item.startDate).format("h:mm\xa0A")}</td>
          <td>{item.duration}</td>
          <td>{item.eventName}</td>
          <td>{item.location}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EventScheduleFullSizeTable;
