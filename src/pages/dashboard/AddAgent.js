import { FormRow,  Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddAgent = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    agentName,
    agentCode,
    fromTimeCT,
    toTimeCT,
    dailyGoal,
    weeklyGoal,
    monthlyGoal,
    isEditingAgent,
    agentsHandleChange,
    clearAgentValues,
    createAgent,
    editAgent
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agentName || !agentCode || !fromTimeCT || !toTimeCT || !dailyGoal || !weeklyGoal || !monthlyGoal) {
      displayAlert();
      return;
    }

    if (isEditingAgent) {
      // eventually edit job
      editAgent();
      return;
    }
    createAgent();
    console.log("create-Agent");
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name} : ${value}`);
    agentsHandleChange({ name, value });
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditingAgent ? "Edit Agent" : "Add Agent"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="agentName"
            value={agentName}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="agentCode"
            value={agentCode}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="time"
            name="fromTimeCT"
            value={fromTimeCT}
            handleChange={handleJobInput}
            labelText="From Time CT"
          />
          {/* Job Status */}
          <FormRow
            type="time"
            name="toTimeCT"
            value={toTimeCT}
            handleChange={handleJobInput}
            labelText="To Time CT"
          />

          {/* Job Type */}
          <FormRow
            type="number"
            name="dailyGoal"
            labelText="Daily Goal"
            value={dailyGoal}
            handleChange={handleJobInput}
          />
          <FormRow
            type="number"
            name="weeklyGoal"
            labelText="Weekly Goal"
            value={weeklyGoal}
            handleChange={handleJobInput}
          />
            <FormRow
            type="number"
            name="monthlyGoal"
            labelText="Monthly Goal"
            value={monthlyGoal}
            handleChange={handleJobInput}
            />
          {/* btn container */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearAgentValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddAgent;
