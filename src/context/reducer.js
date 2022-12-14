import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  CREATE_ADVISOR_BEGIN,
  CREATE_ADVISOR_SUCCESS,
  CREATE_ADVISOR_ERROR,
  GET_ADVISORS_BEGIN,
  GET_ADVISORS_SUCCESS,
  SET_EDIT_ADVISOR,
  DELETE_ADVISOR_BEGIN,
  EDIT_ADVISOR_BEGIN,
  EDIT_ADVISOR_SUCCESS,
  EDIT_ADVISOR_ERROR,
  SHOW_ADVISOR_STATS_BEGIN,
  SHOW_ADVISOR_STATS_SUCCESS,
  CLEAR_ADVISOR_FILTERS,
  CHANGE_ADVISOR_PAGE,
  CLEAR_ADVISOR_VALUES,
  HANDLE_ADVISOR_CHANGE,
  HANDLE_AGENT_CHANGE,
  CLEAR_AGENT_VALUES,
  GET_AGENTS_BEGIN,
  GET_AGENTS_SUCCESS,
  CREATE_AGENT_BEGIN,
  CREATE_AGENT_SUCCESS,
  CREATE_AGENT_ERROR,
  SET_EDIT_AGENT,
  DELETE_AGENT_BEGIN,
  EDIT_AGENT_BEGIN,
  EDIT_AGENT_SUCCESS,
  EDIT_AGENT_ERROR,
  SHOW_AGENT_STATS_BEGIN,
  SHOW_AGENT_STATS_SUCCESS,
  CLEAR_AGENT_FILTERS,
  CHANGE_AGENT_PAGE, 
  SHOW_AGENT_STATS_ERROR,
  SHOW_ADVISOR_STATS_ERROR,
  CREATE_DEALER_BEGIN,
  CREATE_DEALER_SUCCESS,
  CREATE_DEALER_ERROR,
  GET_DEALERS_BEGIN,
  GET_DEALERS_SUCCESS,
  GET_DEALERS_ERROR,
  SET_EDIT_DEALER,
  DELETE_DEALER_BEGIN,
  EDIT_DEALER_BEGIN,
  EDIT_DEALER_SUCCESS,
  EDIT_DEALER_ERROR,
  CLEAR_DEALER_FILTERS,
  CHANGE_DEALER_PAGE,
  HANDLE_DEALER_CHANGE,
  CLEAR_DEALER_VALUES,
  CREATE_EMAILGROUP_BEGIN,
  CREATE_EMAILGROUP_SUCCESS,
  CREATE_EMAILGROUP_ERROR,
  GET_EMAILGROUP_BEGIN,
  GET_EMAILGROUP_SUCCESS,
  GET_EMAILGROUP_ERROR,
  SET_EDIT_EMAILGROUP,
  DELETE_EMAILGROUP_BEGIN,
  EDIT_EMAILGROUP_BEGIN,
  EDIT_EMAILGROUP_SUCCESS,
  EDIT_EMAILGROUP_ERROR,
  CLEAR_EMAILGROUP_FILTERS,
  CHANGE_EMAILGROUP_PAGE,
  HANDLE_EMAILGROUP_CHANGE,
  CLEAR_EMAILGROUP_VALUES,
  HANDLE_EMAILTEMPLATE_SAVE,
  HANDLE_EMAILTEMPLATE_SAVE2,
  GET_EMAILTEMPLATE_BEGIN,
  GET_EMAILTEMPLATE_SUCCESS,
  GET_EMAILTEMPLATE_ERROR,
  SET_EDIT_EMAILTEMPLATE,
  DELETE_EMAILTEMPLATE_BEGIN,
  EDIT_EMAILTEMPLATE_BEGIN,
  EDIT_EMAILTEMPLATE_SUCCESS,
  EDIT_EMAILTEMPLATE_ERROR,
  CREATE_EMAILTEMPLATE_BEGIN,
  CREATE_EMAILTEMPLATE_SUCCESS,
  CREATE_EMAILTEMPLATE_ERROR,
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === HANDLE_EMAILTEMPLATE_SAVE){
    return {
      ...state,
      emailTemplate: action.payload
    }
  }
  // add email template to array

  if(action.type === HANDLE_EMAILTEMPLATE_SAVE2){
    return {
      ...state,
      emailTemplates: [...state.emailTemplates, action.payload]
    }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload,
      userLocation: action.payload.userLocation,
      jobLocation: action.payload.jobLocation,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload,
      userLocation: action.payload.userLocation,
      jobLocation: action.payload.jobLocation,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting...",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.userLocation,
      jobLocation: action.payload.jobLocation,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      jobLocation: "",
      userLocation: "",
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if(action.type === HANDLE_ADVISOR_CHANGE){
    return {
      ...state,
      advisorPage: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if(action.type === HANDLE_AGENT_CHANGE){
    return {
      ...state,
      agentPage: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if(action.type === HANDLE_DEALER_CHANGE){
    return{
      ...state,
      dealerPage: 1,
      [action.payload.name]: action.payload.value
    }
  }
  if(action.type === HANDLE_EMAILGROUP_CHANGE){
    return{
      ...state,
      emailGroupPage: 1,
      [action.payload.name]: action.payload.value
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: "",
      position: "",
      company: "",
      jobLocation: state.userLocation || "",
      jobType: "full-time",
      status: "pending",
    };
    return {
      ...state,
      ...initialState,
    };
  }
  if(action.type === CLEAR_ADVISOR_VALUES){
    const initialState = {
      name: "",
      email: "",
      phone: "",
      dealerCode: "",
      timeZone: "",
      fromTime: "",
      toTime: "",
      buddy_list: "",
      alert_email: "",
      alert_phone_number: "",
      email_allowed_from: "",
      email_allowed_to: "",
      sms_allowed_from: "",
      sms_allowed_to: "",
      sendOnlyOneMessage: 0,
      enable_reassign: 0,
      isEditingAdvisor: false,
    };
    return {
      ...state,
      ...initialState,
    };
  }
  if(action.type === CLEAR_AGENT_VALUES){
    const initialState = {
      agentName: "",
      agentCode: "",
      fromTimeCT: "",
      toTimeCT: "",
      dailyGoal: 0,
      weeklyGoal: 0,
      monthlyGoal: 0,
      isEditingAgent: false
    };
    return {
      ...state,
      ...initialState,
    };
  }

if(action.type === CLEAR_DEALER_VALUES){
  const initialState = {
    dealerName: "",
  dealerCode: "",
  dealerFromTime: "",
  dealerToTime: "",
  dealerTimeZone: "",
  companyId: "",
  Level1Email: [],
  Level2Email: [],
  Level3Email: [],
  isEditingDealer: false

  }
  return{
    ...state,
    ...initialState
  }
}
if(action.type === CLEAR_EMAILGROUP_VALUES){
  const initialState = {
    emailGroupName: "",
    emailGroup: [],
    isEditingEmailGroup: false
  }
  return{
    ...state,
    ...initialState
  }
}
  if (action.type === CREATE_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === CREATE_ADVISOR_BEGIN){
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === CREATE_AGENT_BEGIN){
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === CREATE_DEALER_BEGIN){
    return{
      ...state,
      isLoading: true
    }
  }
  if(action.type === CREATE_EMAILGROUP_BEGIN){
    return{
      ...state,
      isLoading: true
    }
  }
  if(action.type === CREATE_EMAILTEMPLATE_BEGIN){
    return{
      ...state,
      isLoading: true
    }
  }
  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Job Created!",
    };
  }
  if(action.type === CREATE_ADVISOR_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Advisor Created!",
    };
  }
  if(action.type === CREATE_AGENT_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Agent Created!",
    };
  }
  if(action.type === CREATE_DEALER_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Dealer Created"
    }
  }
  if(action.type === CREATE_EMAILGROUP_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Email Group Created"
    }
  }
  if(action.type === CREATE_EMAILTEMPLATE_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Email Template Created"
    }
  }
  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if(action.type === CREATE_ADVISOR_ERROR){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if(action.type === CREATE_AGENT_ERROR){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if(action.type === CREATE_DEALER_ERROR){
    return{
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg
    }
  }
  if(action.type === CREATE_EMAILGROUP_ERROR){
    return{
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg
    }
  }
  if(action.type === CREATE_EMAILTEMPLATE_ERROR){
    return{
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg
    }
  }
  if (action.type === GET_JOBS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if(action.type === GET_ADVISORS_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if(action.type === GET_AGENTS_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if(action.type === GET_DEALERS_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }
  if(action.type === GET_EMAILGROUP_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }
  if(action.type === GET_EMAILTEMPLATE_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if(action.type === GET_ADVISORS_SUCCESS){
    return {
      ...state,
      isLoading: false,
      advisors: action.payload.advisors,
      totalAdvisors: action.payload.totalAdvisors,
      numOfAdvisorPage: action.payload.numOfAdvisorPage,
    };
  }
  if(action.type === GET_AGENTS_SUCCESS){
    return {
      ...state,
      isLoading: false,
      agents: action.payload.agents,
      totalAgents: action.payload.totalAgents,
      numOfAgentPage: action.payload.numOfAgentPage,
    };
  }
  if(action.type === GET_DEALERS_SUCCESS){
    return {
      ...state,
      isLoading: false,
      dealers: action.payload.dealers,
      totalDealers: action.payload.totalDealers,
      numOfDealerPage: action.payload.numOfDealerPage,
    }
  }
  if(action.type === GET_EMAILGROUP_SUCCESS){
    return {
      ...state,
      isLoading: false,
      emailGroup: action.payload.emailGroup,
      totalEmailGroups: action.payload.totalEmailGroups,
      numOfEmailGroupPage: action.payload.numOfEmailGroupPage,
      emailGroups: [...state.emailGroups, ...action.payload.emailGroup],
      emailGroupsNames: [...state.emailGroupsNames, ...action.payload.emailGroupsNames]
    }
  }
  if(action.type === GET_EMAILTEMPLATE_SUCCESS){
    return {
      ...state,
      isLoading: false,
      emailTemplate: action.payload.emailtemplates[0],
      emailTemplates: action.payload.emailtemplates,
    }
  }
  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id);
    const { _id, position, company, jobLocation, jobType, status } = job;
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      jobLocation,
      jobType,
      status,
    };
  }
  if(action.type === SET_EDIT_ADVISOR){
    const advisor = state.advisors.find((advisor) => advisor._id === action.payload.id);
    const { _id, name, email, phone, dealerCode, timeZone, fromTime, toTime, buddy_list, alert_email, alert_phone_number, email_allowed_from, email_allowed_to, sms_allowed_from, sms_allowed_to, sendOnlyOneMessage, enable_reassign } = advisor;
    return {
      ...state,
      isEditingAdvisor: true,
      editAdvisorId: _id,
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
      enable_reassign
    };
  }
  if(action.type === SET_EDIT_AGENT){
    const agent = state.agents.find((agent) => agent._id === action.payload.id);
    const { _id, agentName, agentCode, fromTimeCT, toTimeCT, dailyGoal, weeklyGoal, monthlyGoal } = agent;
    return {
      ...state,
      isEditingAgent: true,
      editAgentId: _id,
      agentName,
      agentCode,
      fromTimeCT,
      toTimeCT,
      dailyGoal,
      weeklyGoal,
      monthlyGoal
    };
  }
  if(action.type === SET_EDIT_DEALER){
    const dealer = state.dealers.find((dealer) => dealer._id === action.payload.id);
    const { _id, dealerName, dealerCode, dealerFromTime, dealerToTime, dealerTimeZone, companyId, Level1Email, Level2Email, Level3Email} = dealer;
    return {
      ...state,
      isEditingDealer: true,
      editDealerId: _id,
      dealerName,
      dealerCode,
      dealerFromTime,
      dealerToTime,
      dealerTimeZone,
      companyId,
      Level1Email,
      Level2Email,
      Level3Email
    }
  }
  if(action.type === SET_EDIT_EMAILGROUP){
    const emailGroup1 = state.emailGroup.find((emailGroup) => emailGroup._id === action.payload.id);
    const { _id, groupName, emailGroup } = emailGroup1;
    return {
      ...state,
      isEditingEmailGroup: true,
      editEmailGroupId: _id,
      groupName,
      emailGroup
    }
  }
  if(action.type === SET_EDIT_EMAILTEMPLATE){
    const emailTemplate1 = state.emailTemplates.find((emailTemplate) => emailTemplate._id === action.payload.id);
    const { _id, templateName, html, design } = emailTemplate1;
    return {
      ...state,
      isEditingEmailTemplate: true,
      editEmailTemplateId: _id,
      emailTemplate: emailTemplate1
    }
  }
  if (action.type === DELETE_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === DELETE_ADVISOR_BEGIN){
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === DELETE_AGENT_BEGIN){
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === DELETE_DEALER_BEGIN){
    return {
      ...state,
      isLoading: true,
    }
  }
  if(action.type === DELETE_EMAILGROUP_BEGIN){
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === DELETE_EMAILTEMPLATE_BEGIN){
    return {
      ...state,
      isLoading: false,
    }
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === EDIT_ADVISOR_BEGIN){
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === EDIT_AGENT_BEGIN){
    return {
      ...state,
      isLoading: true,
    };
  }
  if(action.type === EDIT_DEALER_BEGIN){
    return {
      ...state,
      isLoading: true,
    }
  }
  if(action.type === EDIT_EMAILGROUP_BEGIN){
    return {
      ...state,
      isLoading: true,
    }
  }
  if(action.type === EDIT_EMAILTEMPLATE_BEGIN){
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Job Updated!",
    };
  }
  if(action.type === EDIT_ADVISOR_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Advisor Updated!",
    };
  }
  if(action.type === EDIT_AGENT_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Agent Updated!",
    };
  }
  if(action.type === EDIT_DEALER_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Dealer Updated!",
    }
  }
  if(action.type === EDIT_EMAILGROUP_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Email Group Updated!",
    }
  }
  if(action.type === EDIT_EMAILTEMPLATE_SUCCESS){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Email Template Updated!",
    }
  }
  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if(action.type === EDIT_ADVISOR_ERROR){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if(action.type === EDIT_AGENT_ERROR){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if(action.type === EDIT_DEALER_ERROR){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    }
  }
  if(action.type === EDIT_EMAILGROUP_ERROR){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    }
  }
  if(action.type === EDIT_EMAILTEMPLATE_ERROR){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    }
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if(action.type === SHOW_AGENT_STATS_ERROR){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if(action.type === SHOW_ADVISOR_STATS_ERROR){
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if(action.type === SHOW_ADVISOR_STATS_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if(action.type === SHOW_AGENT_STATS_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }
  if(action.type === SHOW_ADVISOR_STATS_SUCCESS){
    return {
      ...state,
      isLoading: false,
      advisorStats: action.payload.advisorStats,
      advisorMonthlyApplications: action.payload.advisorMonthlyApplications,
    };
  }
  if(action.type === SHOW_AGENT_STATS_SUCCESS){
    return {
      ...state,
      isLoading: false,
      agentStats: action.payload.agentStats,
      agentMonthlyApplications: action.payload.agentMonthlyApplications,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: "",
      searchStatus: "all",
      searchType: "all",
      sort: "latest",
    };
  }
  if(action.type === CLEAR_ADVISOR_FILTERS){
    return {
      ...state,
      advisorSearch: "",
      advisorSearchStatus: "all",
      advisorSearchType: "all",
      advisorSort: "latest",
    };
  }
  if(action.type === CLEAR_AGENT_FILTERS){
    return {
      ...state,
      agentSearch: "",
      agentSearchStatus: "all",
      agentSearchType: "all",
      agentSort: "latest",
    };
  }
  if(action.type === CLEAR_DEALER_FILTERS){
    return {
      ...state,
      dealerSearch: "",
      dealerSearchStatus: "all",
      dealerSearchType: "all",
      dealerSort: "latest",
    }
  }
  if(action.type === CLEAR_EMAILGROUP_FILTERS){
    return {
      ...state,
      emailGroupSearch: "",
      emailGroupSearchStatus: "all",
      emailGroupSearchType: "all",
      emailGroupSort: "latest",
    }
  }
  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      page: action.payload.page,
    };
  }
  if(action.type === CHANGE_ADVISOR_PAGE){
    return {
      ...state,
      advisorPage: action.payload.page,
    };
  }
  if(action.type === CHANGE_AGENT_PAGE){
    return {
      ...state,
      agentPage: action.payload.page,
    };
  }
  if(action.type === CHANGE_DEALER_PAGE){
    return {
      ...state,
      dealerPage: action.payload.page,
    }
  }
  if(action.type === CHANGE_EMAILGROUP_PAGE){
    return {
      ...state,
      emailGroupPage: action.payload.page,
    }
  }
  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
