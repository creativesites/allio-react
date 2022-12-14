import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const AdvisorSearchContainer = () => {
  const {
    isLoading,
    advisorSearch,
    advisorSort,
    advisorSortOptions,
    advisorsHandleChange,
    clearAdvisorFilters
  } = useAppContext();

  const handleSearch = (e) => {
    if (!isLoading) {
      advisorsHandleChange({ name: e.target.name, value: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearAdvisorFilters();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Search Form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="advisorSearch"
            value={advisorSearch}
            handleChange={handleSearch}
          ></FormRow>

          
          {/* <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={advisorsSearchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={advisorsSearchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          /> */}
          {/* sort */}
          <FormRowSelect
            name="advisorSort"
            value={advisorSort}
            handleChange={handleSearch}
            list={advisorSortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear Search
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AdvisorSearchContainer;
