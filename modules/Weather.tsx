import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import Condition from "../components/icons/Condition";
import PrecipGraph from "../components/PrecipGraph";
import { Grid, Span, Div, R } from "../components/sharedStyles";
import Loader from "../components/Loader";
import useApi from "../hooks/useApi";

// const roundTemp = (temp) => {
//   let tmp = temp;
//   const scalar = 1 << 2;

//   tmp *= scalar;
//   tmp = Math.round(tmp);
//   tmp /= scalar;

//   return tmp;
// };

const getMinMaxTemps = ({ daily }) =>
  daily.data.reduce(
    (prev, day) => {
      return {
        min: Math.min(prev.min, day.temperatureMin),
        max: Math.max(prev.max, day.temperatureMax),
      };
    },
    {
      min: Number.MAX_VALUE,
      max: -Number.MAX_VALUE,
    }
  );

const RoundedBar = styled("div")`
  background: #ccc;
  border-radius: 30px;
  height: 20px;
`;

const FixedGrid = styled(Grid)`
  width: 300px;
`;

const z = (num) => Math.max(num, 0);

const Bar = ({ day, min, max, rowMax, rowMin }) => {
  const total = max - min;
  const interval = 100 / total;
  return (
    <FixedGrid
      gap="5px"
      cols={`${z(interval * (rowMin - min))}% auto ${Math.round(
        interval * (rowMax - rowMin)
      )}% auto ${z(interval * (max - rowMax))}%`}
    >
      <Span />
      <Span normal>{rowMin}&deg;</Span>
      <RoundedBar />
      <Span normal>{rowMax}&deg;</Span>
      <Span />
    </FixedGrid>
  );
};

const Forecast = styled("div")`
  /* width: 300px; */
`;

const Weather = () => {
  const { data, loading } = useApi({ url: "/api/weather", interval: "5 min" });
  if (!data) {
    return <Loader isLoading={loading} />;
  }
  const { daily, currently, hourly, minutely } = data;
  const temp = Math.round(currently.temperature);
  const { min, max } = getMinMaxTemps({ daily });
  return (
    <R>
      <Condition condition={hourly.icon} size="64px" />
      <Span large>{temp}&deg;</Span>
      <Div>{minutely ? minutely.summary : hourly.summary}</Div>
      <PrecipGraph minutely={minutely} />
      <Grid cols="auto auto 1fr" gap="5px">
        {daily.data.map((day) => (
          <React.Fragment key={day.time}>
            <Span>{DateTime.fromMillis(day.time * 1000).toFormat("EEE")}</Span>
            <Span normal>
              <Condition condition={day.icon} />
            </Span>
            <Bar
              day={day}
              min={min}
              max={max}
              rowMax={Math.round(day.temperatureMax)}
              rowMin={Math.round(day.temperatureMin)}
            />
          </React.Fragment>
        ))}
      </Grid>
    </R>
  );
};

export default Weather;
