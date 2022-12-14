import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Dealer =({
    _id,
    dealerName,
    dealerCode,
    dealerFromTimeCT,
    dealerToTimeCT,
    companyId,
    Level1Email,
    Level2Email,
    Level3Email
}) => {

    const { setEditDealer, deleteDealer } = useAppContext();
    return (
        <Wrapper>
            <header>
            <div className="main-icon">{dealerName.charAt(0)}</div>
            <div className="info">
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <p>Name: </p> {dealerName}
                    </Stack>
                </Box>
                </div>
            </header>
            <div className="content">
                <div className="content-center">
                    <Stack direction="column" spacing={0}>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            Dealer Code :
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            From Time CT :
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            To Time CT :
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            Company Id :
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            Level 1 Email :
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            Level 2 Email :
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            Level 3 Email :
                        </Typography>
                    </Stack>
                </div>
                <div className="content-right">
                    <Stack direction="column" spacing={0}>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            {dealerCode}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            {dealerFromTimeCT}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            {dealerToTimeCT}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            {companyId}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            {Level1Email}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            {Level2Email}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                            {Level3Email}
                        </Typography>
                    </Stack>
                </div>
            </div>
            <footer>
                <div className="footer-center">
                    <Link to={`/add-dealer`} className="btn" onClick={() => setEditDealer(_id)}>
                        Edit
                    </Link>
                    <button type="button" className="btn" onClick={() => deleteDealer(_id)}>
                        Delete
                    </button>
                </div>
            </footer>
        </Wrapper>
    );
};

export default Dealer;