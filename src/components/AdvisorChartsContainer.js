import React, { useState } from "react";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const AdvisorChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { advisorMonthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Added Advisors</h4>

      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default AdvisorChartsContainer;
