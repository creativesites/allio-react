import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Dealer from "./Dealer";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";

const DealersContainer = () => {
    const {
        getDealers,
        dealers,
        totalDealers,
        dealerSearch,
        dealerSort,
        numOfDealerPages,
        isLoading,
    } = useAppContext();
    
    useEffect(() => {
        getDealers();
        // eslint-disable-next-line
    }, [numOfDealerPages, dealerSearch, dealerSort]);
    if (isLoading) {
        return <Loading center />;
    }
    
    if (dealers.length === 0) {
        return (
        <Wrapper>
            <h2>No jobs to display...</h2>
        </Wrapper>
        );
    }
    
    return (
        <Wrapper>
        <h5>
            {totalDealers} dealers{dealers.length > 1 && "s"} found
        </h5>
        <div className="jobs">
            {dealers.map((job) => {
            return <Dealer key={job._id} {...job} />;
            })}
        </div>
        {numOfDealerPages > 1 && <PageBtnContainer />}
        {/* pagination buttons */}
        </Wrapper>
    );
    };

export default DealersContainer;