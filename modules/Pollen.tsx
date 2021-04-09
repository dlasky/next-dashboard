import React from "react";
import { Module, Header, Grid, Div, R } from "../components/sharedStyles";
import Loader from "../components/Loader";
import useApi from "../hooks/useApi";

const Pollen = () => {
  const { data, loading } = useApi({
    url: `/api/pollen/${process.env.NEXT_PUBLIC_ZIP}`,
    interval: "1 day",
  });
  console.log(data);
  return (
    <Module>
      <Header>Pollen Forecast</Header>
      <Loader isLoading={loading} />
      <Grid cols="auto auto 1fr">
        {data &&
          data.Location.periods.map(({ Type, Index, Triggers }) => {
            return (
              <React.Fragment key={Type}>
                <Div normal>{Type}</Div>
                <Div normal bold>
                  {Index}
                </Div>
                <R normal>{Triggers.map((t) => t.Name).join(", ")}</R>
              </React.Fragment>
            );
          })}
      </Grid>
    </Module>
  );
};

export default Pollen;
