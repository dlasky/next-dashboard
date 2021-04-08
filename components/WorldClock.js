import React from "react";
import styled from "react-emotion";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import ClockDial from "./icons/ClockDial";
import { FlexDiv, Stack, Span, Sup } from "./sharedStyles";
import useRefresh from "./hooks/refresh";

const Container = styled("div")`
  display: flex;
  width: 100%vw;
  justify-content: space-between;
`;

const renderTimePart = ({ type, value }) => {
  switch (type) {
    default:
      return value;
    case "literal":
      return value === " " ? null : value;
    case "dayPeriod":
      return (
        <Sup light key="dp">
          {value}
        </Sup>
      );
  }
};

const WorldClock = ({ locations }) => {
  const { time } = useRefresh(1000);
  const local = DateTime.fromMillis(time);
  return (
    <Container>
      {locations.map(({ zone, name }) => {
        const time = local.setZone(zone);
        return (
          <FlexDiv key={zone} normal>
            <ClockDial hour={time.hour} />
            <Stack>
              <Span normal medium>
                {time.toLocaleParts(DateTime.TIME_SIMPLE).map(renderTimePart)}
              </Span>
              <Span dimmed xsmall light>
                {name}
              </Span>
            </Stack>
          </FlexDiv>
        );
      })}
    </Container>
  );
};

WorldClock.defaultProps = {
  locations: [
    { name: "San Fran", zone: "America/Los_Angeles" },
    { name: "Denver", zone: "America/Denver" },
    { name: "Chicago", zone: "America/Chicago" },
    { name: "Atlanta", zone: "America/New_York" },
    { name: "London", zone: "Europe/London" },
    { name: "Bangkok", zone: "Asia/Bangkok" }
  ]
};

WorldClock.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, zone: PropTypes.string })
  )
};

export default WorldClock;
