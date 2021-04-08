import React from "react";
import WiTime1 from "./WiTime1"
import WiTime2 from "./WiTime2"
import WiTime3 from "./WiTime3"
import WiTime4 from "./WiTime4"
import WiTime5 from "./WiTime5"
import WiTime6 from "./WiTime6"
import WiTime7 from "./WiTime7"
import WiTime8 from "./WiTime8"
import WiTime9 from "./WiTime9"
import WiTime10 from "./WiTime10"
import WiTime11 from "./WiTime11"
import WiTime12 from "./WiTime12"

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

interface Props {
  hour: number
}

const ClockDial = ({ hour = 0 } : Props) => {
  const Symbol = lookup[hour % 12];
  return <Symbol width={24} height={24} />;
};

export default ClockDial;
