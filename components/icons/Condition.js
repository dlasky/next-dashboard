import React from "react";
import PropTypes from "prop-types";
import { Colors } from "../sharedStyles";
import styled from "react-emotion";

import {
  WiDaySunny,
  WiDayCloudy,
  WiNightClear,
  WiNightCloudy,
  WiSnow,
  WiRain,
  WiFog,
  WiRainMix,
  WiCloudy,
  WiCloudyGusts,
  WiHail,
  WiThunderstorm,
  WiTornado
} from "weather-icons-react";

const conditions = {
  "clear-day": WiDaySunny,
  "clear-night": WiNightClear,
  rain: WiRain,
  snow: WiSnow,
  sleet: WiRainMix,
  wind: WiCloudyGusts,
  fog: WiFog,
  cloudy: WiCloudy,
  "partly-cloudy-day": WiDayCloudy,
  "partly-cloudy-night": WiNightCloudy,
  hail: WiHail,
  thunderstorm: WiThunderstorm,
  tornado: WiTornado
};

const Condition = ({ condition, size = "24px", color = Colors.normal }) => {
  const Symbol = conditions[condition];
  return <Symbol size={size} color={color} />;
};

Condition.propTypes = {
  condition: PropTypes.string
};
Condition.defaultProps = {
  condition: "clear-day"
};

export const Enumerate = () =>
  Object.keys(conditions).map(key => (
    <span key={key}>
      {conditions[key]}
      {key}
    </span>
  ));

export default Condition;
