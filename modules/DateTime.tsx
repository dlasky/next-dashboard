import React from "react";
import { DateTime } from "luxon";
import styled from "@emotion/styled";
import { Module, Sup, Div } from "../components/sharedStyles";
import useRefresh from "../hooks/useRefresh";
import toBool from "../util/toBool";

const FixedSup = styled(Sup)`
  display: inline-block;
  min-width: 37px;
`;

const showSeconds = toBool(process.env.NEXT_PUBLIC_SHOW_SECONDS);

const renderTimePart = ({ type, value }) => {
  switch (type) {
    default:
      return value;
    case "hour":
      return `${value}:`;
    case "second":
      return showSeconds ? (
        <FixedSup dimmed key="sec">
          {value}
        </FixedSup>
      ) : null;
    case "literal":
      return "";
    case "dayPeriod":
      return value.toLowerCase();
  }
};

const DT = () => {
  const { time } = useRefresh(1000);
  const local = DateTime.fromMillis(time).setZone("America/New_York");
  return (
    <Module>
      <Div normal medium>
        {local.toFormat("DDDD")}
      </Div>
      <Div large bright>
        {local.toLocaleParts(DateTime.TIME_WITH_SECONDS).map(renderTimePart)}
      </Div>
    </Module>
  );
};

export default DT;
