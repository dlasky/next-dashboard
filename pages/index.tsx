import { Grid, Two, Four } from "../components/Grid";
import styled from "@emotion/styled";
import WorldClock from "../modules/WorldClock";
import DateTime from "../modules/DateTime";
import Holidays from "../modules/Holidays";
import Pollen from "../modules/Pollen";
import Weather from "../modules/Weather";

const Content = styled("div")`
  font-family: "Rajdhani", sans-serif;
  color: #ccc;
  padding: 20px 20px;
`;

const Index = () => (
  <Content>
    {/* <Status /> */}
    <Grid>
      <Two>
        <DateTime />
        <Holidays maxItems={5} />
        <Pollen />
        {/* <Hue /> */}
      </Two>
      <Two>
        <Weather />
      </Two>
      <Four>
        <WorldClock />
      </Four>
    </Grid>
  </Content>
);

export default Index;
