import React from "react";
import { Grid,  Typography, Card,  CardContent,  Box, TextField  } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LoadingButton } from '@mui/lab';
import MenuItem from '@mui/material/MenuItem';

import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";
import {  Alert } from "../../components";
const timezones = [
    {
      "label": "Pacific/Honolulu (GMT-10:00)",
      "tzCode": "Pacific/Honolulu",
      "name": "(GMT-10:00) Honolulu, East Honolulu, Pearl City, Hilo, Kailua",
      "utc": "-10:00"
    },
    {
      "label": "America/Anchorage (GMT-09:00)",
      "tzCode": "America/Anchorage",
      "name": "(GMT-09:00) Anchorage, Fairbanks, Eagle River, Badger, Knik-Fairview",
      "utc": "-09:00"
    },
    {
      "label": "America/Los_Angeles (GMT-08:00)",
      "tzCode": "America/Los_Angeles",
      "name": "(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle",
      "utc": "-08:00"
    },
    {
      "label": "America/Denver (GMT-07:00)",
      "tzCode": "America/Denver",
      "name": "(GMT-07:00) Denver, El Paso, Albuquerque, Colorado Springs, Aurora",
      "utc": "-07:00"
    },
    {
      "label": "America/Phoenix (GMT-07:00)",
      "tzCode": "America/Phoenix",
      "name": "(GMT-07:00) Phoenix, Tucson, Mesa, Chandler, Gilbert",
      "utc": "-07:00"
    },
    {
      "label": "America/Chicago (GMT-06:00)",
      "tzCode": "America/Chicago",
      "name": "(GMT-06:00) Chicago, Houston, San Antonio, Dallas, Austin",
      "utc": "-06:00"
    },
    {
      "label": "America/New_York (GMT-05:00)",
      "tzCode": "America/New_York",
      "name": "(GMT-05:00) New York City, Brooklyn, Queens, Philadelphia, Manhattan",
      "utc": "-05:00"
    },
    {
      "label": "America/Puerto_Rico (GMT-04:00)",
      "tzCode": "America/Puerto_Rico",
      "name": "(GMT-04:00) San Juan, Bayamón, Carolina, Ponce, Caguas",
      "utc": "-04:00"
    }
]
const numOptions = [0,1]

export default function AddAdvisorPage() {
    const { 
        isLoading, 
        showAlert, 
        displayAlert,
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
        sendOnlyOneMessage,
        enable_reassign,
        editAdvisor,
        createAdvisor,
        clearAdvisorValues,
        isEditingAdvisor,
        advisorsHandleChange
    } = useAppContext();
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(`${name} : ${value}`);
        advisorsHandleChange({ name, value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone || !dealerCode || !timeZone || !fromTime || !toTime) {
          displayAlert();
          return;
        }
    
        if (isEditingAdvisor) {
          // eventually edit job
          editAdvisor();
          return;
        }
        createAdvisor();
        console.log("create-advisor");
    };

    return (
        <Wrapper>
        
        
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
                {isEditingAdvisor ? "Edit Advisor" : "Add Advisor"}
            </Typography>
            {showAlert && <Alert />}
            </Grid>
            <Grid item xs={12}>
            <Card>
                <CardContent>
                <Stack spacing={3}>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 2 },
            }}
            validate="true"
            autoComplete="off"
            >
                <Stack spacing={2} direction="row">
                <TextField
                    sx={{ width: '30ch' }}
                    //  variant="filled"  
                    // color="secondary" 
                    required
                    name="name"
                    label="Name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                sx={{ width: '30ch' }}
                //  variant="filled"  
                    // color="secondary" 
                    required
                    
                    name="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                />
                </Stack> 
                <Stack spacing={2} direction="row">
                <TextField
                sx={{ width: '30ch' }}
                //  variant="filled"  
                // color="secondary" 
                    required
                    type="tel"
                    name="phone"
                    label="Phone"
                    value={phone}
                    onChange={handleChange}
                />
                <TextField
                sx={{ width: '30ch' }}
                //  variant="filled"  
                // color="secondary"
                    required
                    name="dealerCode"
                    label="Dealer Code"
                    type="text"
                    value={dealerCode}
                    onChange={handleChange}
                />
                </Stack>
                <Stack spacing={2} direction="row">
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                    select
                    name="timeZone"
                    label="Time Zone"
                    value={timeZone}
                    onChange={handleChange}
                >
                {
                    timezones.map((option) => (
                        <MenuItem key={option.tzCode} value={option.tzCode}>
                            {option.label}
                        </MenuItem>
                    ))
                }
                </TextField>
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                    name="fromTime"
                    label="From Time"
                    type="time"
                    value={fromTime}
                    onChange={handleChange}
                />
                </Stack>
                <Stack spacing={2} direction="row">
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                    name="toTime"
                    label="To Time"
                    type="time"
                    value={toTime}
                    onChange={handleChange}
                />
                <TextField
                    //  variant="filled"  
                    // color="secondary" 
                    sx={{ width: '30ch' }}
                    name="buddy_list"
                    label="Buddy List"
                    type="text"
                    value={buddy_list}
                    onChange={handleChange}
                />
                </Stack>
                
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                    name="alert_email"
                    label="Alert Email"
                    type="email"
                    value={alert_email}
                    onChange={handleChange}
                />
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                    name="alert_phone_number"
                    label="Alert Phone Number"
                    type="tel"
                    value={alert_phone_number}
                    onChange={handleChange}
                />
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                    name="email_allowed_from"
                    label="Email Allowed From"
                    type="time"
                    value={email_allowed_from}
                    onChange={handleChange}
                />
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                    
                    name="email_allowed_to"
                    label="Email Allowed To"
                    type="time"
                    value={email_allowed_to}
                    onChange={handleChange}
                />
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                
                    name="sms_allowed_from"
                    label="SMS Allowed From"
                    type="time"
                    value={sms_allowed_from}
                    onChange={handleChange}
                />
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
               
                    name="sms_allowed_to"
                    label="SMS Allowed To"
                    type="time"
                    value={sms_allowed_to}
                    onChange={handleChange}
                />
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                    select
                    name="sendOnlyOneMessage"
                    label="Send Only One Message"
                    value={sendOnlyOneMessage}
                    onChange={handleChange}
                >
                {
                    numOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))
                }
                </TextField>
                <TextField
                //  variant="filled"  
                // color="secondary" 
                sx={{ width: '30ch' }}
                    required
                    select
                    name="enable_reassign"
                    label="enable reassign"
                    value={enable_reassign}
                    onChange={handleChange}
                >
                {
                    numOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))
                }
                </TextField>
                
                {/* <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-start' }}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Is Active
                    </Typography>
                <Checkbox
                    name="is_active"
                    label="Is Active"
                    value={is_active}
                    onChange={handleChange}
                />
                </Box> */}
            </Box>
                
            </Stack>
            <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }} spacing={3}>
                <LoadingButton
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                    loading={false}
                >
                    {isEditingAdvisor ? 'Update Advisor' : 'Create Advisor'}
                </LoadingButton>
                <LoadingButton
                    type="clear"
                    variant="contained"
                    onClick={(e) => {
                        e.preventDefault();
                        clearAdvisorValues();
                      }}
                    loading={false}
                >
                    {isEditingAdvisor ? 'Cancel' : 'Clear'}
                </LoadingButton>
            </Stack>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
        </Wrapper>
    );
}