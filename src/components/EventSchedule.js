import React, { Component } from "react";
import moment from "moment-timezone";
import { css } from "glamor";
import DaySwitcher from "./DaySwitcher";

moment.tz.setDefault("America/Kingston");

// duration in minutes, startDate as ISO 8601
const schedule = [
  {
    startDate: "2019-02-01T17:00:00",
    endDate: "2019-02-01T20:00:00",
    eventName: "Busses arrive/registration",
    location: "Kingston Hall"
  },
  {
    startDate: "2019-02-01T17:00:00",
    endDate: "2019-02-01T20:00:00",
    eventName: "Dinner - Presented by iGan Partners (Sandwiches)",
    location: "Kingston Hall"
  },
  {
    startDate: "2019-02-01T20:00:00",
    endDate: "2019-02-01T22:00:00",
    eventName: "Opening Ceremonies",
    location: "Kingston Hall"
  },
  {
    startDate: "2019-02-01T22:00:00",
    endDate: "2019-02-01T22:30:00",
    eventName: "Team Formation",
    location: "BioSci Auditorium"
  },
  {
    startDate: "2019-02-01T22:00:00",
    endDate: "2019-02-03T10:00:00",
    eventName: "Hacking Begins",
    location: ""
  },
  {
    startDate: "2019-02-01T23:00:00",
    endDate: "2019-02-02T00:00:00",
    eventName:
      "Shipping Products Fast: How to Build Fully-Fledged APIs and Services in minutes using StdLib",
    location: "Walter Light Hall - Room 210"
  },
  {
    startDate: "2019-02-02T00:00:00",
    endDate: "2019-02-02T01:00:00",
    eventName: "Midnight Snack (Noodles) - Provided by StdLib",
    location: "Walter Light Hall Atrium"
  },
  {
    startDate: "2019-02-02T00:00:00",
    endDate: "2019-02-02T01:00:00",
    eventName:
      "Adding Image and Voice Intelligence to Your Apps with Microsoft Cognitive Services",
    location: "Goodwin Hall - Room 254"
  },
  {
    startDate: "2019-02-02T00:30:00",
    endDate: "2019-02-02T01:00:00",
    eventName: "Getting Started With Computer Vision Using Clarifai",
    location: "Walter Light Hall - Room 210"
  },
  {
    startDate: "2019-02-02T01:00:00",
    endDate: "2019-02-02T02:00:00",
    eventName: "Hardware Opens",
    location: "ILC Design Bay"
  },
  {
    startDate: "2019-02-02T01:00:00",
    endDate: "2019-02-02T02:00:00",
    eventName: "Slideshow Karaoke",
    location: "Walter Light Hall - Room 210"
  },
  {
    startDate: "2019-02-03T00:00:00",
    endDate: "2019-02-03T01:00:00",
    eventName: "Snack (Bubble Tea)",
    location: "Walter Light Hall Auditorium"
  },
  {
    startDate: "2019-02-03T01:00:00",
    endDate: "2019-02-03T02:00:00",
    eventName: "Escape Room",
    location: "ILC - Room 119"
  },
  {
    startDate: "2019-02-03T07:30:00",
    endDate: "2019-02-03T08:30:00",
    eventName: "Breakfast",
    location: "ILC - Room 109"
  },
  {
    startDate: "2019-02-03T09:00:00",
    endDate: "2019-02-03T10:00:00",
    eventName: "Hacking Ends",
    location: ""
  },
  {
    startDate: "2019-02-03T13:00:00",
    endDate: "2019-02-03T15:00:00",
    eventName: "Closing Ceremonies",
    location: "Kingston Hall"
  }
];

const eventDays = [];

for (const event of schedule) {
  const start = moment(event.startDate).format("YYYY-MM-DD");
  const end = moment(event.endDate).format("YYYY-MM-DD");
  if (!eventDays.includes(start)) {
    eventDays.push(start);
  }
  if (!eventDays.includes(end)) {
    eventDays.push(end);
  }
}

eventDays.sort((a, b) => {
  return (
    moment(a, "YYYY-MM-DD").format("X") - moment(b, "YYYY-MM-DD").format("X")
  );
});

class EventSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: eventDays[0]
    };
  }

  addDurations(events) {
    return events.map((item) => {
      let duration = moment(item.endDate).diff(item.startDate, "minutes", true);
      if (duration > 59) {
        duration = Math.round((duration / 60) * 100) / 100;
        item.duration = `${duration} hr`;
      } else {
        item.duration = `${duration} min`;
      }
      return duration !== 1 ? { ...item, duration: `${item.duration}s` } : item;
    });
  }

  changeDay(selectedDay) {
    this.setState({ selectedDay });
  }

  render() {
    const eventsOnSelectedDay = schedule.filter(
      (item) =>
        moment(item.startDate).format("YYYY-MM-DD") === this.state.selectedDay
    );

    const rows = this.addDurations(eventsOnSelectedDay).map((item) => (
      <tr
        css={{ backgroundColor: "#F6F6F6" }}
        key={`${item.eventName} ${item.startDate}`}
      >
        <td>{moment(item.startDate).format("h:mm\xa0A")}</td>
        <td>{item.duration}</td>
        <td>{item.eventName}</td>
        <td>{item.location}</td>
      </tr>
    ));

    return (
      <div
        id="schedule"
        css={{
          padding: "110px 0",
          margin: "0 auto",
          maxWidth: "1076px",
          width: "85%",
          "@media(max-width: 700px)": {
            width: "100%"
          }
        }}
      >
        <h1
          css={{
            textAlign: "center"
          }}
        >
          Event Schedule
        </h1>
        <DaySwitcher
          days={eventDays}
          changeDay={(day) => this.changeDay(day)}
        />
        <h3 css={{ textTransform: "uppercase", marginLeft: "16px" }}>
          {moment(this.state.selectedDay, "YYYY-MM-DD").format(
            "dddd, MMMM Do, YYYY"
          )}
        </h3>
        <table
          {...css({
            borderRadius: "16px",
            fontWeight: "500",
            overflow: "hidden",
            borderCollapse: "collapse",
            margin: "14px 0",
            width: "100%",
            "> tbody tr td, > tbody tr th": {
              "@media(min-width: 700px)": {
                padding: "12px 32px"
              },
              "@media(max-width: 700px)": {
                padding: "6px"
              },
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
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EventSchedule;
