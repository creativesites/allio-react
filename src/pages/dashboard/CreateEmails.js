import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import InboxIcon from '@mui/icons-material/Inbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PasswordStrengthBar from 'react-password-strength-bar';
import Skeleton from '@mui/material/Skeleton';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { FormRow, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { v4 as uuidv4 } from 'uuid';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import { deepOrange, deepPurple } from '@mui/material/colors';

const steps = [
  'Add Emails to be created.',
  'Click Create Emails and Add Namecheap Credentials',
  'Input Namecheap verification code',
];



function CreateEmails() {
  const [emails, setEmails] = React.useState([]);
  const [emailname, setEmailname] = React.useState('');
  const [emailpwd, setEmailpwd] = React.useState('');
  const [namecheapEmail, setNamecheapEmail] = React.useState('');
  const [namecheapPwd, setNamecheapPwd] = React.useState('');
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [showAlert, setShowAlert] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [showNamecheapVerificationCodeInput, setShowNamecheapVerificationCodeInput] = React.useState(false);
  const [showServerAlert, setShowServerAlert] = useState(false);
  const [showServerAlert2, setShowServerAlert2] = useState(false);
  const [domain, setDomain] = useState('')
  const [namecheapVerificationCodeInput, setNamecheapVerificationCodeInput] = React.useState('');

  const [dbemails, setDbemails] = useState([]);
  const [createemailjob, setCreateemailjob] = useState({});
  const [createemailsjobs, setCreateemailsjobs] = useState([]);
  const [twofa, setTwofa] = useState('')
  const [addedTwofa, setAddedTwofa] = React.useState([]);
  const [remTwofa, setRemTwofa] = useState(0)

  // get emails from firebase realtime database
  useEffect(() => {
    // onValue(query, (snapshot) => {
    //   const data = snapshot.val();
    //   const emails2 = [];
    //   for (let id in data) {
    //     emails2.push({ id, ...data[id] });
    //   }
    //   setDbemails(emails2);
    // });
  }, []);
  // get all emailcreatejob from firebase realtime database
  useEffect(() => {
    try {
      const {res} = axios.get('https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/codes')
      console.log(res)
      let dt = res.data;
      setRemTwofa(dt.length)
    } catch (error) {
      
    }
    
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(message !== "Strong"){
      setShowAlert(true);
      setEmailpwd('');
      setActiveStep(0);
    }else{
      setEmails([...emails, { emailname, emailpwd }]);
      setActiveStep(1);
      setEmailname('');
      setEmailpwd('');
      setShowAlert(false);
      setButtonDisabled(true);
    }
    
    // let prevActiveStep = activeStep;
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleAddTwofa = (event) => {
    event.preventDefault();
    setAddedTwofa([...addedTwofa, twofa])
    setTwofa('')
  }
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setShowNamecheapVerificationCodeInput(true)
    }, 5000);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setShowNamecheapVerificationCodeInput(false);
  };
  const handleSendData = async (event) => {
    //event.preventDefault();
    let createemailsjobId = uuidv4();
    setOpen(false);
    console.log(emails);
    console.log(namecheapEmail);
    console.log(namecheapPwd);
   
    // send emails to firebase cloud function
    setCreateemailjob({
      createemailsjobId: createemailsjobId,
      namecheapEmail: namecheapEmail,
      namecheapPwd: namecheapPwd,
      namecheapVerificationCode: '',
      jobCompleted: false,
      emails: emails,
      createdOn: new Date().toISOString(),
      domain: domain
    })
    const {response} = await axios.post('https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/createEmail', {emails, namecheapEmail, namecheapPwd, createemailsjobId, domain});
    console.log(response);
    handleServerAlert('success', 'Emails creation started successfully');
      setShowServerAlert(true);
      setActiveStep(2);
    // if(response.status === 200){
    //   handleServerAlert('success', 'Emails creation started successfully');
    //   setShowServerAlert(true);
    //   setActiveStep(2);
    //   // setTimeout(() => {
    //   //   setShowNamecheapVerificationCodeInput(true)
    //   // }, 12000);
    // }else{
    //   handleServerAlert('error', 'Emails creation failed');
    //   setShowServerAlert2(true);
    //   setActiveStep(1);
    // }
}
  const handleVerificationCodeSubmit = async (event) => {
    event.preventDefault();
    console.log(namecheapVerificationCodeInput);
    setShowNamecheapVerificationCodeInput(false);
    // get the createemailsjobId from createemailsjob state object
    let createemailsjobId = createemailjob.createemailsjobId;
    
    const {response} = await axios.post('https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/addVerificationCode', {namecheapVerificationCodeInput});
    console.log(response);
    if(response.status === 200){
      handleServerAlert('success', 'Emails creation started successfully');
      setShowServerAlert(true);
      setActiveStep(3);
      setNamecheapVerificationCodeInput('');
      setTimeout(() => {
        setActiveStep(0);
      }, 5000);
    }else{
      handleServerAlert('error', 'Emails creation failed');
      setShowServerAlert2(true);
      setActiveStep(1);
    }
    
   
}
  const handlePassword = (passwordValue) => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length == 5
        ? "Strong"
        : verifiedList.length >= 2
        ? "Medium"
        : "Weak";
    if(verifiedList.length < 5){
      setShowAlert(true);
      setEmailpwd(passwordValue);
      setProgress(`${(verifiedList.length / 5) * 100}%`);
      setMessage(strength);
      setShowAlert(false);
    }else{
      setButtonDisabled(false);
      setEmailpwd(passwordValue);
      setProgress(`${(verifiedList.length / 5) * 100}%`);
      setMessage(strength);

      console.log("verifiedList: ", `${(verifiedList.length / 5) * 100}%`);
    }
    
  };
  const getActiveColor = (type) => {
    if (type === "Strong") return "#8BC926";
    if (type === "Medium") return "#FEBD01";
    return "#FF0054";
  };

  const handleAlert = () => {
    return(
      <Alert severity="warning">Password is weak and is likely to be rejected in Namecheap, please set a stronger password!</Alert>
    )
  }
  const handleServerAlert = (type, txt) => {
    return(
      <Alert severity={type}>{txt}</Alert>
    )
  }
  const handleClose3 = () => {
    setShowServerAlert(false);
    setShowServerAlert2(false);
  }
  const handleOpenVerification = () => {
    setShowNamecheapVerificationCodeInput(true)
  }
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose3}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose3}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Wrapper>
      <Stack 
      divider={<Divider orientation="vertical" flexItem />}
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={4}
      >
        <Stack 
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        >
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{remTwofa}</Avatar>
          <Typography sx={{ mt: 4, mb: 2 }} variant="caption" component="div">
            Namecheap Backup Codes In Database.
          </Typography>
          </Stack>
      {remTwofa === 0 && (
        <Alert severity="error">Generate New Namecheap Two Factor Backup Auth Codes!</Alert>
      )}
      {remTwofa < 4 && remTwofa > 0 && (
        <Alert severity="warning">Namecheap Two Factor Auth Backup Codes Almost Running Out!</Alert>
      )}
      {remTwofa > 4 && (
        <Alert severity="info">Namecheap Two Factor Auth Codes Level Okay!</Alert>
      )}
        </Stack>
   <Grid container spacing={2}> 
        
      <Grid item xs={6} md={6}>
      
      
      <Stack spacing={2} direction="column">
      <form  onSubmit={handleAddTwofa}>
      <Stack spacing={2} direction="column">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Add Namecheap 2FA Backup Codes
          </Typography>
          <FormRow
              type="text"
              name="nacheap-backup-two-factor-auth-code"
              value={twofa}
              handleChange={(e) => setTwofa(e.target.value)}
              label="Namechaep Backup Code"
              
            />
            <Button type="submit" variant="contained">Add Namecheap Backup Code</Button>
            </Stack>
        </form>
      <Button type="submit" variant="outlined">Add Namecheap Backup Codes To Database</Button>
      </Stack>
        
      </Grid>
      <Grid item xs={6} md={6}>
      
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Added Namecheap Backup Codes
          </Typography>
          {addedTwofa.length === 0 && (
            <Stack spacing={1}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="caption" component="div">
            No Added Codes Yet
          </Typography>
            <Skeleton variant="rounded" width={'100%'} height={60} />
            <Skeleton variant="circular" width={40} height={40} />
          </Stack>
          )}
          <Demo>
          {addedTwofa.length > 0 && (
            <Timeline position="alternate">
            
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                
                <List >
                {addedTwofa.map((coded, index) => (
                  <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon 
                      onClick={() => {
                        const newTwofa = addedTwofa.filter((coded, i) => i !== index);
                        setAddedTwofa(newTwofa);
                      }}
                      />
                    </IconButton>
                  }
                >
                  <ListItemText
                    secondary={coded}
                  />
                </ListItem>
                ))}
                </List>
                
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Codes
                </Typography>
                <Typography>Add All Generated Codes.</Typography>
              </TimelineContent>
            </TimelineItem>
            
          </Timeline>
      
      )}
          </Demo>
          
      
      
       
      </Grid>
      </Grid>
    <Wrapper>
    
      <Box
      sx={{ width: '100%', height: 500,  bgcolor: 'background.paper' }}
    >
      {showServerAlert ? <Snackbar
        open={showServerAlert}
        autoHideDuration={6000}
        onClose={handleClose3}
        message="Process started successfully."
      />: null}
      {showServerAlert2 ? <Snackbar
        open={showServerAlert2}
        autoHideDuration={6000}
        onClose={handleClose3}
        message="Error Occured. Please try again."
      />: null}
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    {showAlert ? handleAlert() : null}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2} direction="column">
          <form className="form" onSubmit={handleSubmit}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Add Emails
          </Typography>
        <Stack spacing={3} direction="column">
          <FormRow
              type="text"
              name="emailname"
              value={emailname}
              handleChange={(e) => setEmailname(e.target.value)}
              
            />
            <FormRow
              type="text"
              name="emailpwd"
              value={emailpwd}
              handleChange={(e) => handlePassword(e.target.value)}
              
            />
            <PasswordStrengthBar 
            password={emailpwd}
            minLength={8}
             />
             
            {emailpwd.length !== 0 ? (
            <p className="message" style={{ color: getActiveColor(message) }}>
              Your password is {message}
            </p>
          ) : null}
            <Button type="submit" variant="contained" disabled={buttonDisabled}>{buttonDisabled ? "Make Password Stronger": "Submit"}</Button>
        </Stack>
        
      </form>
      <div>
        <Stack spacing={2} direction="column">
        <Button variant="outlined" onClick={handleClickOpen}>
        Create Added Emails
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleOpenVerification}>
        Add Verification Code
      </Button>
        </Stack>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>NAMECHEAP LOGIN DETAILS</DialogTitle>
        <DialogContent>
          <DialogContentText seconday>
            For security reasons, you have to enter the Namecheap login details manually.<br></br>
            The app will not store your login details.<br></br>
            
          </DialogContentText>
          <DialogContentText>
            <b>NOTE: You will recieve a prompt soon for the verification code sent to your email from Namecheap.</b> <br></br> 
            You will have to enter the verification code manually.
          </DialogContentText>
          <form className="form" >
            <TextField
              autoFocus
              margin="dense"
              id="namecheapEmail"
              label="Namecheap Username"
              type="text"
              fullWidth
              variant="standard"
              value={namecheapEmail}
              onChange={(e) => setNamecheapEmail(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="namecheapPwd"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              value={namecheapPwd}
              onChange={(e) => setNamecheapPwd(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="necheapdomain"
              label="Domain"
              type="domain"
              fullWidth
              variant="standard"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </form>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSendData}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
          </Stack>
        
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Added Emails
          </Typography>
          {emails.length === 0 && (
            <Stack spacing={1}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="caption" component="div">
            No Added Emails Yet
          </Typography>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={'100%'} height={60} />
          </Stack>
          )}
      
          <Demo>
            {emails.length > 0 && (
                <List >
                {emails.map((email, index) => (
                  <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon 
                      onClick={() => {
                        const newEmails = emails.filter((email, i) => i !== index);
                        setEmails(newEmails);
                      }}
                      />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <InboxIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={email.emailname}
                    secondary={email.emailpwd}
                  />
                </ListItem>
                ))}
                </List>
            )}
              
          </Demo>
        </Grid>
      </Grid>
      {/* {showNamecheapVerificationCodeInput ? (
        <Dialog open={showNamecheapVerificationCodeInput} onClose={handleClose2}>
        <DialogTitle>Input Verification Code</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the verification code sent to your email from Namecheap.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Namecheap Verification Code"
            type="text"
            fullWidth
            variant="standard"
            value={namecheapVerificationCodeInput}
            onChange={(e) => setNamecheapVerificationCodeInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Cancel</Button>
          <Button onClick={handleVerificationCodeSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      ) : null} */}
    </Box>
      
      
    
    
    
      </Wrapper>
      </Wrapper>
  );
}

export default CreateEmails;
