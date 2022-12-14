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

const Agent =({
    _id,
    name,
    agentCode,
    fromTimeCT,
    toTimeCT,
    dailyGoal,
    weeklyGoal,
    monthlyGoal,
}) => {
    const { setEditAgent, deleteAgent } = useAppContext();
    return (
        <Wrapper>
            <header>
          <div className="main-icon">{name.charAt(0)}</div>
          <div className="info">
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
            
            <Stack direction="row" spacing={2}>
            <p>Name : </p> {name}
                </Stack>
            </Stack>
            </Box>
            {/* <h5>{name}</h5> */}
            
          </div>
        </header>
        <div className="content">
            <div className="content-center">
                <Stack direction="column" spacing={0}>
                    <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                        Agent Code :
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                        From Time CT :
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                        To Time CT :
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                        Daily Goal :
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                        Weekly Goal :
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                        Monthly Goal :
                    </Typography>

                </Stack>
                <Stack direction="column" spacing={0}>
                    <Typography variant="caption" display="block" gutterBottom color="secondary">
                    {agentCode}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom color="secondary">
                    {fromTimeCT}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom color="secondary">
                    {toTimeCT}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom color="secondary">
                    {dailyGoal}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom color="secondary">
                    {weeklyGoal}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom color="secondary">
                    {monthlyGoal}
                    </Typography>
                </Stack>
            </div>
            <footer>
            <div className="actions">
              <Link
                to="/add-agent"
                className="btn edit-btn"
                onClick={() => setEditAgent(_id)}
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn delete-btn"
                onClick={() => deleteAgent(_id)}
              >
                Delete
              </button>
            </div>
          </footer>
        </div>
        </Wrapper>
    );
}

export default Agent;