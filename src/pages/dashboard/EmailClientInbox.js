import  React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SendIcon from '@mui/icons-material/Send';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

import "./Css/Header.css";
import Section from "./Section/Section";
import EmailRow from './EmailRow/EmailRow';

function EmailClientInbox() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        
      <Grid container spacing={2}>
        <Grid xs={12}>
          <FloatingActionButtonZoom/>
        </Grid>
        
      </Grid>
    </Box>
  );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
    >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
    );
}
    
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
    };
}

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};

const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green[500],
    '&:hover': {
    bgcolor: green[600],
    },
};

function FloatingActionButtonZoom() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    const handleChangeIndex = (index) => {
    setValue(index);
    };

    const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
    {
        color: 'primary',
        sx: fabStyle,
        icon: <AddIcon />,
        label: 'Add',
    },
    {
        color: 'secondary',
        sx: fabStyle,
        icon: <EditIcon />,
        label: 'Edit',
    },
    {
        color: 'inherit',
        sx: { ...fabStyle, ...fabGreenStyle },
        icon: <UpIcon />,
        label: 'Expand',
    },
    ];

    return (
    <Box
        sx={{
        bgcolor: 'background.paper',
        width: '100%',
        position: 'relative',
        minHeight: 400,
        }}
    >
        <AppBar position="static" color="default">
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="icon label tabs example"
        >
            <Tab icon={<InboxIcon/>} label="Inbox" {...a11yProps(0)} />
            <Tab icon={<SendIcon/>}  label="Send Emails" {...a11yProps(1)} />
            <Tab icon={<WysiwygIcon/>}  label="Email Templates" {...a11yProps(2)} />
        </Tabs>
        </AppBar>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="mail">
        <div className="mail-tools">
        <div className="mail-toolsLeft">
            <Grid xs={12} spacing={6}>
            <ArrowBackIcon/>
            <MoveToInboxIcon/>
            <ErrorIcon/>
            <DeleteIcon/>
            <EmailIcon/>
            <WatchLaterIcon/>
            <CheckCircleIcon/>
            <LabelImportantIcon/>
            <MoreVertIcon/>
            </Grid>
            
        </div>
        <div className="mail-toolsRight">
            <Grid xs={12} spacing={6}>
            <UnfoldMoreIcon/>
            <PrintIcon/>
            <ExitToAppIcon/>
            </Grid>
        </div>
        </div>
        <div className="mail-body">
        <div className="mail-bodyHeader">
          <div className="mail-subject">
            <h5>Email Subject</h5>
            <LabelImportantIcon className="mail-important" />
          </div>
          <p>Hello</p>
          <p className="mail-time">Thu, 01 Dec 2022 05:03:09 GMT</p>
        </div>

        <div className="mail-message">
          <p>Get new items in your inbox!
Get notified when we launch new themes or big discounts. Never spam.

</p>
        </div>
      </div>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container spacing={2}>
        <div className="emailList">
        
        <div className="emailList-list">
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!"
          description="This is a DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!"
          description="This is a DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!"
          description="This is a DOPE"
          time="10pm"
        />
        </div>
        </div>
        </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            Templates
        </TabPanel>
        </SwipeableViews>
        {fabs.map((fab, index) => (
        <Zoom
            key={fab.color}
            in={value === index}
            timeout={transitionDuration}
            style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
            onClick={handleOpen}
        >
            <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
            </Fab>
        </Zoom>
        ))}
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
    );
}
const style = {
    position: 'absolute',
    top: '10%',
    left: '25%',
    transform: 'translate(-5%, -5%)',
    width: '70%',
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default EmailClientInbox;