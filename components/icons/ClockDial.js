import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import {
  WiTime1,
  WiTime2,
  WiTime3,
  WiTime4,
  WiTime5,
  WiTime6,
  WiTime7,
  WiTime8,
  WiTime9,
  WiTime10,
  WiTime11,
  WiTime12
} from "weather-icons-react";

const lookup = [
  WiTime12,
  WiTime1,
  WiTime2,
  WiTime3,
  WiTime4,
  WiTime5,
  WiTime6,
  WiTime7,
  WiTime8,
  WiTime9,
  WiTime10,
  WiTime11,
  WiTime12
];

const ClockDial = ({ hour }) => {
  const Symbol = lookup[hour % 12];
  return <Symbol width={24} height={24} />;
};

ClockDial.propTypes = {
  hour: PropTypes.number
};

ClockDial.defaultProps = {
  hour: 0
};

export default ClockDial;
