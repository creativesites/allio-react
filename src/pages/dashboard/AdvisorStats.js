import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { AdvisorChartsContainer, Loading } from "../../components";

const AdvisorStats = () => {
  const {  isLoading, monthlyApplications, showAdvisorStats } = useAppContext();

  useEffect(() => {
    showAdvisorStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      {monthlyApplications.length > 0 && <AdvisorChartsContainer />}
    </>
  );
};

export default AdvisorStats;
