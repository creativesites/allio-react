import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const AgentSearchContainer = () => {
    const {
        isLoading,
        agentSearch,
        agentSort,
        agentSortOptions,
        agentsHandleChange,
        clearAgentFilters
    } = useAppContext();

    const handleSearch = (e) => {
        if (!isLoading) {
            agentsHandleChange({ name: e.target.name, value: e.target.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearAgentFilters();
    }

    return (
        <Wrapper>
            <form className="form">
                <h4>Search Form</h4>
                {/* search position */}
                <div className="form-center">
                    <FormRow
                        type="text"
                        name="agentSearch"
                        value={agentSearch}
                        handleChange={handleSearch}
                    ></FormRow>
                    {/* sort */}
                    <FormRowSelect
                        name="agentSort"
                        value={agentSort}
                        handleChange={handleSearch}
                        list={agentSortOptions}
                    />
                </div>
                <button type="submit" className="btn" onClick={handleSubmit}>
                    Clear Filters
                </button>
            </form>
        </Wrapper>
    );
}

export default AgentSearchContainer;