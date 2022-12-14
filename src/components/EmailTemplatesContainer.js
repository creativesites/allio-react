import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Template from "./Template";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const EmailTemplatesContainer = () => {
    const {
        getEmailTemplates,
        emailTemplates,
        totalEmailTemplates,
        emailTemplateSearch,
        emailTemplateSort,
        numOfEmailTemplatePages,
        isLoading,
    } = useAppContext();
    
    useEffect(() => {
        getEmailTemplates();
        // eslint-disable-next-line
    }, [numOfEmailTemplatePages, emailTemplateSearch, emailTemplateSort]);
    if (isLoading) {
        return <Loading center />;
    }
    
    if (emailTemplates.length === 0) {
        return (
        <Wrapper>
            <h2>No templates to display...</h2>
        </Wrapper>
        );
    }
    
    return (
        <Wrapper>
        <h5>
             email Templates{emailTemplates.length > 1 && "s"} found
        </h5>
        <div className="jobs">
            {emailTemplates.map((job) => {
            return <Template key={job._id} {...job} />;
            })}
        </div>
        </Wrapper>
    );
    
    }

export default EmailTemplatesContainer;