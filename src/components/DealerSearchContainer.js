import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

const DealerSearchContainer = () => {
    const {
        isLoading,
        dealerSearch,
        dealerSort,
        dealerSortOptions,
        dealersHandleChange,
        clearDealerFilters
    } = useAppContext();
    
    const handleSearch = (e) => {
        if (!isLoading) {
        dealersHandleChange({ name: e.target.name, value: e.target.value });
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        clearDealerFilters();
    };
    
    return (
        <Wrapper>
        <form className="form">
            <h4>Search Form</h4>
            {/* search position */}
            <div className="form-center">
            <FormRow
                type="text"
                name="dealerSearch"
                value={dealerSearch}
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
                name="dealerSort"
                value={dealerSort}
                handleChange={handleSearch}
                list={dealerSortOptions}
            />
            </div>
            <button type="submit" onClick={handleSubmit}>
            search
            </button>
        </form>
        </Wrapper>
    );
    };

export default DealerSearchContainer;