import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Agent from "./Agent";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const AgentsContainer = () => {
  const {
    getAgents,
    agents,
    totalAgents,
    agentSearch,
    agentSort,
    numOfAgentPages,
    isLoading,
  } = useAppContext();

  useEffect(() => {
    getAgents();
    // eslint-disable-next-line
  }, [numOfAgentPages, agentSearch, agentSort]);
  if (isLoading) {
    return <Loading center />;
  }

  if (agents.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalAgents} agents{agents.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {agents.map((job) => {
          return <Agent key={job._id} {...job} />;
        })}
      </div>
      {numOfAgentPages > 1 && <PageBtnContainer />}
      {/* pagination buttons */}
    </Wrapper>
  );

};

export default AgentsContainer;