import { useState } from "react";
import { FormRow,  Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddEmailGroup = () => {
    const {
        isLoading,
        showAlert,
        displayAlert,
        emailGroupName,
        emailGroup,
        isEditingEmailGroup,
        emailGroupHandleChange,
        clearEmailGroupValues,
        createEmailGroup,
        editEmailGroup
    } = useAppContext();
    const [emails, setEmails] = useState(emailGroup)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailGroupName || !emailGroup ) {
        displayAlert();
        return;
        }
    
        if (isEditingEmailGroup) {
        // eventually edit job
        editEmailGroup();
        return;
        }
        createEmailGroup();
        console.log("create-EmailGroup");
    };
    
    const handleJobInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(`${name} : ${value}`);
        emailGroupHandleChange({ name, value });
    };
    const handleJobInput1 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // convert string to array
        const valueArray = value.split(",");
        console.log(`${name} : ${value}`);
        emailGroupHandleChange({ name, valueArray });
    };
    return (
        <Wrapper>
        <form className="form">
            <h3>{isEditingEmailGroup ? "Edit Email Group" : "Add Email Group"}</h3>
            {showAlert && <Alert />}
            <div className="form-center">
            {/* position */}
            <FormRow
                type="text"
                name="emailGroupName"
                value={emailGroupName}
                handleChange={handleJobInput}
            />
            {/* company */}
            <FormRow
                type="text"
                name="emailGroup"
                value={emailGroup}
                handleChange={handleJobInput1}
            />
            {/* from */}
            <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={handleSubmit}
            >
                {isEditingEmailGroup ? "Edit Email Group" : "Add Email Group"}
            </button>
            <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={clearEmailGroupValues}
            >
                {isEditingEmailGroup ? "Cancel Edit" : "Clear Values"}
            </button>
            </div>
        </form>
        </Wrapper>
    );
}

export default AddEmailGroup;