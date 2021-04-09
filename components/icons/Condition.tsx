import { Colors } from "../sharedStyles";

import WiDaySunny from "./WiDaySunny";
import WiDayCloudy from "./WiDayCloudy";
import WiNightClear from "./WiNightClear";
import WiNightCloudy from "./WiNightCloudy";
import WiSnow from "./WiSnow";
import WiRain from "./WiRain";
import WiFog from "./WiFog";
import WiRainMix from "./WiRainMix";
import WiCloudy from "./WiCloudy";
import WiCloudyGusts from "./WiCloudyGusts";
import WiHail from "./WiHail";
import WiThunderstorm from "./WiThunderstorm";
import WiTornado from "./WiTornado";

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
  tornado: WiTornado,
};

interface Props {
  condition?: string;
  size?: string;
  color?: string;
}

const Condition = ({
  condition = "clear-day",
  size = "24px",
  color = Colors.normal,
}) => {
  const Symbol = conditions[condition];
  return <Symbol width={size} height={size} fill={color} />;
};

export const Enumerate = () =>
  Object.keys(conditions).map((key) => (
    <span key={key}>
      {conditions[key]}
      {key}
    </span>
  ));

export default Condition;
