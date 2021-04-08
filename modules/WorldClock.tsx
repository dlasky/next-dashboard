import React from "react";
import styled from "@emotion/styled";
import { DateTime } from "luxon";
import ClockDial from "../components/icons/ClockDial";
import { FlexDiv, Stack, Span, Sup } from "../components/sharedStyles";
import useRefresh from "../hooks/useRefresh";

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
      return <Sup key="dp">{value}</Sup>;
  }
};

const defs = [
  { name: "San Fran", zone: "America/Los_Angeles" },
  { name: "Denver", zone: "America/Denver" },
  { name: "Chicago", zone: "America/Chicago" },
  { name: "NYC", zone: "America/New_York" },
  { name: "London", zone: "Europe/London" },
  { name: "Bangkok", zone: "Asia/Bangkok" },
];

interface LocationProps {
  name: string;
  zone: string;
}

interface Props {
  location: LocationProps[];
}

const WorldClock = ({ locations = defs }) => {
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

export default WorldClock;
