import Grid  from "../components/Grid"
import styled from "@emotion/styled"
import WorldClock from "../modules/WorldClock"

const Content = styled("div")`
  font-family: "Rajdhani", sans-serif;
  color: #ccc;
  padding: 20px 20px;
`;

const Index = () => (
  <Content>
    {/* <Status /> */}
    <Grid>
      <Grid.Two>
        {/* <DateTime /> */}
        {/* <Holidays maxItems={5} /> */}
        {/* <Pollen /> */}
        {/* <Hue /> */}
      </Grid.Two>
      <Grid.Two>
        {/*<R>
          <Weather />
        </R>*/}
      </Grid.Two>
      <Grid.Four>
        <WorldClock />
      </Grid.Four>
    </Grid>
  </Content>
);

export default Index