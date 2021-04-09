import ms from "ms";
import React from "react";
import { Module, Header, Grid, R, Div } from "../components/sharedStyles";
import { DateTime, Interval } from "luxon";
import CalendarCheck from "../components/icons/CalendarCheck-o";
import useApi from "../hooks/useApi";
import Loader from "../components/Loader";

const roundDuration = (duration) => {
  const dur = duration.toObject();
  const order = ["years", "months", "weeks", "days"];
  const unit = order.find((key) => dur[key] > 0);
  const value = Math.round(dur[unit]);
  return value === 1
    ? ` in a ${unit.replace("s", " ")}`
    : ` in ${value} ${unit}`;
};

const Holidays = ({ maxItems = 10 }) => {
  const { data, loading } = useApi({ url: "/api/calendar", interval: "1 day" });
  const today = DateTime.local();
  return (
    <Module>
      <Header>Holidays</Header>
      <Loader isLoading={loading} />
      <Grid>
        {data &&
          data
            .map((holiday) => {
              const date = DateTime.fromISO(holiday.start);
              return {
                key: holiday.start,
                name: holiday.name,
                date,
                interval: Interval.fromDateTimes(today, date),
              };
            })
            .filter((holiday) => holiday.interval.isValid)
            .filter((_, idx) => idx < maxItems)
            .map(({ key, name, date, interval }) => ({
              key,
              name,
              date,
              when: roundDuration(
                interval.toDuration(["years", "months", "weeks", "days"])
              ),
            }))
            .map(({ key, name, date, when }) => {
              return (
                <React.Fragment key={key}>
                  <Div normal>
                    <CalendarCheck />
                  </Div>
                  <Div normal title={date.toFormat("LL/dd/yyyy")}>
                    {name}
                  </Div>
                  <R normal light title={date.toFormat("LL/dd/yyyy")}>
                    {when}
                  </R>
                </React.Fragment>
              );
            })}
      </Grid>
    </Module>
  );
};

export default Holidays;
