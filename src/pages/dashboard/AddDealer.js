import { FormRow,  Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddDealer = () => {
    const {
        isLoading,
        showAlert,
        displayAlert,
        dealerName,
        companyId,
        dealerCode,
        dealerFromTimeCT,
        dealerToTimeCT,
        Level1Email,
        Level2Email,
        Level3Email,
        isEditingDealer,
        dealersHandleChange,
        clearDealerValues,
        createDealer,
        editDealer
    } = useAppContext();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!dealerName || !dealerCode ) {
        displayAlert();
        return;
        }
    
        if (isEditingDealer) {
        // eventually edit job
        editDealer();
        return;
        }
        createDealer();
        console.log("create-Dealer");
    };
    
    const handleJobInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(`${name} : ${value}`);
        dealersHandleChange({ name, value });
    };
    return (
        <Wrapper>
        <form className="form">
            <h3>{isEditingDealer ? "Edit Dealer" : "Add Dealer"}</h3>
            {showAlert && <Alert />}
            <div className="form-center">
            {/* position */}
            <FormRow

                type="text"
                name="dealerName"
                value={dealerName}
                handleChange={handleJobInput}
            />
            {/* company */}
            <FormRow
                type="text"
                name="dealerCode"
                value={dealerCode}
                handleChange={handleJobInput}
            />
            {/* date */}
            <FormRow

                type="time"
                name="fromTimeCT"
                value={dealerFromTimeCT}
                handleChange={handleJobInput}
            />
            {/* date */}
            <FormRow

                type="time"
                name="toTimeCT"
                value={dealerToTimeCT}
                handleChange={handleJobInput}
            />
            <FormRow

                type="text"
                name="companyId"
                value={companyId}
                handleChange={handleJobInput}
            />

            </div>

            <button type="submit" className="btn" onClick={handleSubmit}>
            {isEditingDealer ? "Edit Dealer" : "Add Dealer"}
            </button>
        </form>
        </Wrapper>
    );
};

export default AddDealer;
