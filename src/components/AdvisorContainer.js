import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Advisor from "./Advisor";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const AdvisorsContainer = () => {
  const {
    
    getAdvisors,
    advisors,
    totalAdvisors,
    advisorSearch,
    advisorSort,
    numOfAdvisorPages,
    isLoading,
  } = useAppContext();  

  useEffect(() => {
    getAdvisors();
    // eslint-disable-next-line
  }, [ numOfAdvisorPages, advisorSearch,  advisorSort]);
  if (isLoading) {
    return <Loading center />;
  }

  if (advisors.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalAdvisors} advisors{advisors.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {advisors.map((job) => {
          return <Advisor key={job._id} {...job} />;
        })}
      </div>
      {numOfAdvisorPages > 1 && <PageBtnContainer />}
      {/* pagination buttons */}
    </Wrapper>
  );
};

export default AdvisorsContainer;
