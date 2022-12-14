
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


  
  const Advisor = ({
    _id,
    name,
    email,
    phone,
    dealerCode,
    timeZone,
    fromTime,
    toTime,
    buddy_list,
    alert_email,
    alert_phone_number,
    email_allowed_from,
    email_allowed_to,
    sms_allowed_from,
    sms_allowed_to,
    createdAt,
  }) => {
    const { setEditAdvisor, deleteAdvisor } = useAppContext();
  
    // let date = moment(createdAt);
    // date = date.format("MMM Do, YYYY");
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
               
               
                <Stack direction="row" spacing={2}>
            <p>Phone : </p> {phone}
                </Stack>
                <Stack direction="row" spacing={2}>
            <p>Email :</p> {email}
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
                Dealer Code :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                Time Zone :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                From Time :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                To Time :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                Buddy List :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                Alert Email :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                Alert Phone Number :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                Email Allowed From :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                Email Allowed To :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                SMS Allowed From :
            </Typography>
            <Typography variant="caption" display="block" gutterBottom fontWeight="bold">
                SMS Allowed To :
            </Typography>
            </Stack>
            <Stack direction="column" spacing={0}>
            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {dealerCode}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {timeZone}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {fromTime}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {toTime}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {buddy_list}
            </Typography>

            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {alert_email}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {alert_phone_number}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {email_allowed_from}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {email_allowed_to}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {sms_allowed_from}
            </Typography>

            <Typography variant="caption" display="block" gutterBottom color="secondary">
                {sms_allowed_to}
            </Typography>
            </Stack>
          </div>
          <footer>
            <div className="actions">
              <Link
                to="/add-advisor"
                className="btn edit-btn"
                onClick={() => setEditAdvisor(_id)}
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn delete-btn"
                onClick={() => deleteAdvisor(_id)}
              >
                Delete
              </button>
            </div>
          </footer>
        </div>
      </Wrapper>
    );
  };
  
  export default Advisor;
  