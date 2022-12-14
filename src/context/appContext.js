import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
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
  GET_ADVISORS_ERROR ,
  HANDLE_AGENT_CHANGE,
  CLEAR_AGENT_VALUES,
  CREATE_AGENT_BEGIN,
  CREATE_AGENT_SUCCESS,
  CREATE_AGENT_ERROR,
  GET_AGENTS_BEGIN,
  GET_AGENTS_SUCCESS,
  GET_AGENTS_ERROR,
  SET_EDIT_AGENT,
  DELETE_AGENT_BEGIN,
  EDIT_AGENT_BEGIN,
  EDIT_AGENT_SUCCESS,
  EDIT_AGENT_ERROR,
  SHOW_AGENT_STATS_BEGIN,
  SHOW_AGENT_STATS_SUCCESS,
  SHOW_ADVISOR_STATS_ERROR,
  CLEAR_AGENT_FILTERS,
  CHANGE_AGENT_PAGE,
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
  CREATE_EMAILTEMPLATE_BEGIN,
  CREATE_EMAILTEMPLATE_SUCCESS,
  CREATE_EMAILTEMPLATE_ERROR,
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
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user3");
const userLocation = localStorage.getItem("location");
const emailtemplates = localStorage.getItem("emailtemplates");
const latestEmailTemplate = localStorage.getItem("latestEmailTemplate");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  userLocation: userLocation || "",
  showSidebar: false,
  isEditing: false,
  editJobId: "",
  position: "",
  company: "",
  jobLocation: userLocation || "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
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
  advisorGreeting: "",
  advisors: [],
  totalAdvisors: 0,
  numOfAdvisorPages: 1,
  advisorPage: 1,
  advisorStats: {},
  advisorMonthlyApplications: [],
  advisorSearch: "",
  advisorSearchStatus: "all",
  advisorSearchDealerCode: "all",
  advisorSearchTimeZone: "all",
  advisorSort: "latest",
  advisorSortOptions: ["latest", "oldest", "a-z", "z-a"],
  isEditingAdvisor: false,
  editAdvisorId: "",
  agentName: "",
  agentCode: "",
  fromTimeCT: "",
  toTimeCT: "",
  dailyGoal: 0,
  weeklyGoal: 0,
  monthlyGoal: 0,
  agents: [],
  totalAgents: 0,
  numOfAgentPages: 1,
  agentPage: 1,
  agentStats: {},
  agentMonthlyApplications: [],
  agentSearch: "",
  agentSort: "latest",
  agentSortOptions: ["latest", "oldest", "a-z", "z-a"],
  isEditingAgent: false,
  editAgentId: "",
  dealerName: "",
  dealerCode: "",
  dealerFromTime: "",
  dealerToTime: "",
  dealerTimeZone: "",
  companyId: "",
  Level1Email: [],
  Level2Email: [],
  Level3Email: [],
  dealers: [],
  totalDealers: 0,
  numOfDealerPages: 1,
  dealerPage: 1,
  dealerStats: {},
  dealerMonthlyApplications: [],
  dealerSearch: "",
  dealerSort: "latest",
  dealerSortOptions: ["latest", "oldest", "a-z", "z-a"],
  isEditingDealer: false,
  editDealerId: "",
  emailTemplates: [],
  activeEmailTemplate: {},
  selectedEmailTemplate: {},
  emailGroupName: "",
  emailGroup: [],
  emailGroups: [],
  emailGroupStats: {},
  emailGroupMonthlyApplications: [],
  emailGroupsNames: [],
  totalEmailGroups: 0,
  emailGroupSearch: "",
  emailGroupSort: "latest",
  emailGroupSortOptions: ["latest", "oldest", "a-z", "z-a"],
  isEditingEmailGroup: false,
  emailGroupPage: 1,
  numOfEmailGroupPages: 1,
  editEmailGroupId: "",
  emailTemplate: latestEmailTemplate ? JSON.parse(latestEmailTemplate) : {},
  emailTemplateId: "",
  emailTemplateSubject: "",
  emailTemplates: emailtemplates ? JSON.parse(emailtemplates) : [],
  isEditingEmailTemplate: false,
  emailTemplateSearch: "",
  emailTemplateSort: "latest",
  emailTemplateSortOptions: ["latest", "oldest", "a-z", "z-a"],
  emailTemplatePage: 1,
  templateName: "",
  designTemp: {},
  htmlTemp: ""
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios default global headers:
  // axios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;

  // axios authFetch
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  // axios request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // axios response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        //logOutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
    // dispatch({ type: CLEAR_ALERT });
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user3", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };
  const addEmailTemplateToLocalStorage = ({design} ) => {
    console.log(typeof design)
    localStorage.setItem("latestEmailTemplate", JSON.stringify(design));
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user3");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/auth/register", currentUser);

      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      // LocalStorage
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/auth/signin", currentUser);

      const { user, token, location } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      });

      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/auth/signin`,
        currentUser
      );

      const { user, token, location } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });

      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logOutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/auth/updateUser", currentUser);

      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });
      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.message },
        });
      }
    }
    clearAlert();
  };
  // update / handle value changes (dynamic object updating - look at reducer)
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };
  const advisorsHandleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_ADVISOR_CHANGE, payload: { name, value } });
  };
  const agentsHandleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_AGENT_CHANGE, payload: { name, value } });
  };
  const dealersHandleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_DEALER_CHANGE, payload: { name, value } });
  };
  const emailGroupHandleChange = ({name, value}) => {
    dispatch({type: HANDLE_EMAILGROUP_CHANGE, payload: {name, value}});
  }
  const handleEmailTemplateChange = ({design}) => {
    dispatch({type: HANDLE_EMAILTEMPLATE_SAVE, payload: {design}});
    //push value to state.emailTemplates

    // let newEmailTemplatesArray = [...oldEmailTemplatesArray, html];
    addEmailTemplateToLocalStorage({design});
    console.log(state.emailTemplates.length)
    // localStorage.setItem("emailTemplates", JSON.stringify(newEmailTemplatesArray));
    dispatch({type: HANDLE_EMAILTEMPLATE_SAVE2, payload: {design}});

  }
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };
  const clearAdvisorValues = () => {
    dispatch({ type: CLEAR_ADVISOR_VALUES });
  };
  const clearAgentValues = () => {
    dispatch({ type: CLEAR_AGENT_VALUES });
  };
  const clearDealerValues = () => {
    dispatch({ type: CLEAR_DEALER_VALUES });
  };
  const clearEmailGroupValues = () => {
    dispatch({type: CLEAR_EMAILGROUP_VALUES});
  }

  const createJob = async () => {
    dispatch({ type: CREATE_JOB_BEGIN });
    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.post("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/jobs", {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: CREATE_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_JOB_ERROR,
        payload: { msg: error.message },
      });
      clearAlert();
    }
    clearAlert();
  };
  const createAdvisor = async (advisor) => {
    dispatch({ type: CREATE_ADVISOR_BEGIN });
    try {
      const { name, email, phone, dealerCode, timeZone, fromTime, toTime, alert_email, alert_phone_numbe,email_allowed_from,  email_allowed_to, sms_allowed_from, sms_allowed_to, sendOnlyOneMessage, enable_reassign, advisorGreeting } = state;
      await axios.post("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/advisor/create", {
        name, email, phone, dealerCode, timeZone, fromTime, toTime, alert_email, alert_phone_numbe,email_allowed_from,  email_allowed_to, sms_allowed_from, sms_allowed_to, sendOnlyOneMessage, enable_reassign, advisorGreeting
      });
      dispatch({ type: CREATE_ADVISOR_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_ADVISOR_ERROR,
        payload: { msg: error.message },
      });
      clearAlert();
    }
    clearAlert();
  };
  const createAgent = async (agent) => {
    dispatch({ type: CREATE_AGENT_BEGIN });
    try {
      const { agentName, agentCode, fromTimeCT, toTimeCT, dailyGoal, weeklyGoal, monthlyGoal} = state;
      let name = agentName;
      await axios.post("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/agent/create", {
        name, agentCode, fromTimeCT, toTimeCT, dailyGoal, weeklyGoal, monthlyGoal
      });
      dispatch({ type: CREATE_AGENT_SUCCESS });
      getAgents();
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      dispatch({
        type: CREATE_AGENT_ERROR,
        payload: { msg: error.message },
      });
      if (error.response.status === 401) return;
    }
    clearAlert();
  };
  const createDealer = async (dealer) => {
    dispatch({ type: CREATE_DEALER_BEGIN });
    try {
      const { dealerName, dealerCode, dealerFromTime, dealerToTime, dealerTimeZone, companyId, Level1Email, Level2Email, Level3Email} = state;

      const { data } = await axios.post("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/dealer/create", {
        dealerName, dealerCode, dealerFromTime, dealerToTime, dealerTimeZone, companyId, Level1Email, Level2Email, Level3Email
      });
      dispatch({ type: CREATE_DEALER_SUCCESS });
      getDealers();
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      dispatch({
        type: CREATE_DEALER_ERROR,
        payload: { msg: error.message },
      });
      if (error.response.status === 401) return;
    }
    clearAlert();
  };
  const createEmailGroup = async () => {
    dispatch({type: CREATE_EMAILGROUP_BEGIN});
    try {
      const { emailGroupName, emailGroup} = state;
      const {data} = await axios.post("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/emailgroup/create", {
        emailGroupName, emailGroup
      });
      dispatch({type: CREATE_EMAILGROUP_SUCCESS});
      getEmailGroups();
      dispatch({type: CLEAR_EMAILGROUP_VALUES});
    } catch (error) {
      dispatch({
        type: CREATE_EMAILGROUP_ERROR,
        payload: {msg: error.message}
      })
      return
    }
    clearAlert();
  }
  const createEmailTemplate = async () => {
    dispatch({type: CREATE_EMAILTEMPLATE_BEGIN});
    try {
      const { templateName, designTemp, htmlTemp} = state;
      let emailGroup = ""
      let design = designTemp
      let html = htmlTemp
      const {data} = await axios.post("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/emailtemplate/create", {
        templateName, html, design, emailGroup
      });
      dispatch({type: CREATE_EMAILTEMPLATE_SUCCESS});
      getEmailTemplates();
    } catch (error) {
      dispatch({
        type: CREATE_EMAILTEMPLATE_ERROR,
        payload: {msg: error.message}
      })
      return
    }
    clearAlert();
  }
  const getEmailTemplates = async () => {
    dispatch({type: GET_EMAILTEMPLATE_BEGIN});
    try {
      const {data} = await axios.get("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/emailtemplate");
      
      dispatch({
        type: GET_EMAILTEMPLATE_SUCCESS,
        payload: {emailtemplates}
      })
    } catch (error) {
      dispatch({
        type: GET_EMAILTEMPLATE_ERROR,
        payload: {msg: error.message}
      })
      return
    }
    clearAlert();
  }
  const getAdvisors = async () => {
    const { advisorPage, advisorSort, advisorSearch } = state;
    let url = `https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/advisor?advisorPage=${advisorPage}&advisorSort=${advisorSort}`;
    if (advisorSearch){
      url += `&advisorSearch=${advisorSearch}`;
    } 
    dispatch({ type: GET_ADVISORS_BEGIN });
    try {
      const { data } = await axios.get(url);
      const { advisors, totalAdvisors, numOfAdvisorPages } = data;
      dispatch({ 
        type: GET_ADVISORS_SUCCESS,
         payload: { advisors, totalAdvisors, numOfAdvisorPages }, 
        });
    } catch (error) {
      try {
        setTimeout(async() => {
          const { data } = await axios.get(url);
      const { advisors, totalAdvisors, numOfAdvisorPages } = data;
      dispatch({ 
        type: GET_ADVISORS_SUCCESS,
         payload: { advisors, totalAdvisors, numOfAdvisorPages }, 
        });
        }, 3000);
      } catch (error) {
        if (error.response.status === 401) return;
      dispatch({
        type: GET_ADVISORS_ERROR,
        payload: { msg: error.message },
      });
      }
      
    }
  };
  const getAgents = async () => {
    const { agentPage, agentSort, agentSearch } = state;
    let url = `https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/agent?agentPage=${agentPage}&agentSort=${agentSort}`;
    if (agentSearch){
      url += `&agentSearch=${agentSearch}`;
    }
    dispatch({ type: GET_AGENTS_BEGIN });
    try {
      const { data } = await axios.get(url);
      const { agents, totalAgents, numOfAgentPages } = data;
      dispatch({
        type: GET_AGENTS_SUCCESS,
        payload: { agents, totalAgents, numOfAgentPages },
      });
    } catch (error) {
      try {
        setTimeout(async() => {
          const { data } = await axios.get(url);
      const { agents, totalAgents, numOfAgentPages } = data;
      dispatch({
        type: GET_AGENTS_SUCCESS,
        payload: { agents, totalAgents, numOfAgentPages },
      });
        }, 3000);
      } catch (error) {
        if (error.response.status === 401) return;
        dispatch({
          type: GET_AGENTS_ERROR,
          payload: { msg: error.message },
        });
      }
     
    }
  };
  const getDealers = async () => {
    const { dealerPage, dealerSort, dealerSearch } = state;
    let url = `https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/dealer?dealerPage=${dealerPage}&dealerSort=${dealerSort}`;
    if (dealerSearch){
      url += `&dealerSearch=${dealerSearch}`;
    }
    dispatch({ type: GET_DEALERS_BEGIN });
    try {
      const { data } = await axios.get(url);
      const { dealers, totalDealers, numOfDealerPages } = data;
      dispatch({
        type: GET_DEALERS_SUCCESS,
        payload: { dealers, totalDealers, numOfDealerPages },
      });
    } catch (error) {
      try {
        setTimeout(async() => {
          const { data } = await axios.get(url);
      const { dealers, totalDealers, numOfDealerPages } = data;
      dispatch({
        type: GET_DEALERS_SUCCESS,
        payload: { dealers, totalDealers, numOfDealerPages },
      });

        }, 3000);
      } catch (error) {
        if (error.response.status === 401) return;
        dispatch({
          type: GET_DEALERS_ERROR,
          payload: { msg: error.message },
        });
      }

    }
  };
  const getEmailGroups = async () => {
    const { emailGroups, emailGroupSearch, emailGroupSort, emailGroupPage } = state;
    let url = `https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/emailgroup?emailGroupPage=${emailGroupPage}&emailGroupSort=${emailGroupSort}`;
    if (emailGroupSearch){
      url += `&emailGroupSearch=${emailGroupSearch}`;
    }
    dispatch({type: GET_EMAILGROUP_BEGIN});
    try {
      const {data} = await axios.get(url);
      const {emailGroups, totalEmailGroups, numOfEmailGroupPages} = data;
      dispatch({
        type: GET_EMAILGROUP_SUCCESS,
        payload: {emailGroups, totalEmailGroups, numOfEmailGroupPages, emailGroupsNames: emailGroups.map(emailGroup => emailGroup.emailGroupName)}
      })
    }
    catch (error) {
      try {
        setTimeout(async() => {
          const {data} = await axios.get(url);
      const {emailGroups, totalEmailGroups, numOfEmailGroupPages} = data;
      dispatch({
        type: GET_EMAILGROUP_SUCCESS,
        payload: {emailGroups, totalEmailGroups, numOfEmailGroupPages}
      })
        }, 3000);
      } catch (error) {
        if (error.response.status === 401) return;
        dispatch({
          type: GET_EMAILGROUP_ERROR,
          payload: {msg: error.message}
        })
      }
      
    }

  }
  const getJobs = async () => {
    const { page, search, searchStatus, searchType, sort } = state;
    let url = `https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;

    if (search) {
      url = url + `&search=${search}`;
    }

    dispatch({ type: GET_JOBS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = data;
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: { jobs, totalJobs, numOfPages },
      });
    } catch (error) {
      //logOutUser();
    }
    clearAlert();
  };

  const setEditJob = (id) => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } });
  };
  const setEditAdvisor = (id) => {
    dispatch({ type: SET_EDIT_ADVISOR, payload: { id } });
  };
  const setEditAgent = (id) => {
    dispatch({ type: SET_EDIT_AGENT, payload: { id } });
  };
  const setEditDealer = (id) => {
    dispatch({ type: SET_EDIT_DEALER, payload: { id } });
  };
  const setEditEmailGroup = (id) => {
    dispatch({ type: SET_EDIT_EMAILGROUP, payload: { id } });
  };
  const setEditEmailTemplate = (id) => {

    dispatch({ type: SET_EDIT_EMAILTEMPLATE, payload: { id } });
  };
  const editJob = async () => {
    dispatch({ type: EDIT_JOB_BEGIN });
    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.patch(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/jobs/${state.editJobId}`, {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: EDIT_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_JOB_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };
 const editAdvisor = async () => {
    dispatch({ type: EDIT_ADVISOR_BEGIN });
    try {
      const { name, email, phone, dealerCode, timeZone, fromTime, toTime, alert_email, alert_phone_numbe,email_allowed_from,  email_allowed_to, sms_allowed_from, sms_allowed_to, sendOnlyOneMessage, enable_reassign } = state;
      await axios.patch(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/advisor/${state.editAdvisorId}`, {
        name, email, phone, dealerCode, timeZone, fromTime, toTime, alert_email, alert_phone_numbe,email_allowed_from,  email_allowed_to, sms_allowed_from, sms_allowed_to, sendOnlyOneMessage, enable_reassign
      });
      dispatch({ type: EDIT_ADVISOR_SUCCESS });
      dispatch({ type: CLEAR_ADVISOR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_ADVISOR_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const editEmailTemplate = async () => {
    dispatch({ type: EDIT_EMAILTEMPLATE_BEGIN });
    
    try {
      const { templateName, emailTemplate} = state;
      let emailGroup = ""
      let design = emailTemplate.design
      let html = emailTemplate.html
      await axios.patch(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/emailtemplate/${state.editEmailTemplateId}`, {
        templateName, emailGroup, design, html
      });
      dispatch({ type: EDIT_EMAILTEMPLATE_SUCCESS });
      getEmailTemplates()
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_EMAILTEMPLATE_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const editAgent = async () => {
    dispatch({ type: EDIT_AGENT_BEGIN });
    try {
      const { agentName, agentCode, fromTimeCT, toTimeCT, dailyGoal, weeklyGoal, monthlyGoal } = state;
      let name = agentName;
      await axios.patch(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/agent/${state.editAgentId}`, {
        name, agentCode, fromTimeCT, toTimeCT, dailyGoal, weeklyGoal, monthlyGoal
      });
      dispatch({ type: EDIT_AGENT_SUCCESS });
      getAgents();
      dispatch({ type: CLEAR_AGENT_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_AGENT_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };
  const editDealer = async () => {
    dispatch({ type: EDIT_DEALER_BEGIN });
    try {
      const { dealerName, dealerCode, dealerFromTime, dealerToTime, dealerTimeZone, companyId, Level1Email, Level2Email, Level3Email } = state;

      const { data} = await axios.patch(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/dealer/${state.editDealerId}`, {
        dealerName, dealerCode, dealerFromTime, dealerToTime, dealerTimeZone, companyId, Level1Email, Level2Email, Level3Email
      });
      dispatch({ type: EDIT_DEALER_SUCCESS });
      getDealers();
      dispatch({ type: CLEAR_DEALER_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_DEALER_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };
  const editEmailGroup = async () => {
    dispatch({ type: EDIT_EMAILGROUP_BEGIN });
    try {
      const { emailGroupName,emailGroup } = state;
      await axios.patch(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/emailgroup/${state.editEmailGroupId}`, {
        emailGroupName,emailGroup
      });
      dispatch({ type: EDIT_EMAILGROUP_SUCCESS });
      getEmailGroups();
      dispatch({ type: CLEAR_EMAILGROUP_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_EMAILGROUP_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const deleteJob = async (jobId) => {
    dispatch({ type: DELETE_JOB_BEGIN });
    try {
      await axios.delete(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/jobs/${jobId}`);
      getJobs();
    } catch (error) {
      //logOutUser();
    }
  };
  const deleteAdvisor = async (advisorId) => {
    dispatch({ type: DELETE_ADVISOR_BEGIN });
    try {
      await axios.delete(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/advisor/${advisorId}`);
      getAdvisors();
    } catch (error) {
      //logOutUser();
    }
  };
  const deleteAgent = async (agentId) => {
    dispatch({ type: DELETE_AGENT_BEGIN });
    try {
      await axios.delete(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/agent/${agentId}`);
      getAgents();
    } catch (error) {
      //logOutUser();
    }
  };
  const deleteDealer = async (dealerId) => {
    dispatch({ type: DELETE_DEALER_BEGIN });
    try {
      await axios.delete(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/dealer/${dealerId}`);
      getDealers();
    } catch (error) {
      //logOutUser();
    }
  };
  const deleteEmailGroup = async (emailGroupId) => {
    dispatch({ type: DELETE_EMAILGROUP_BEGIN });
    try {
      await axios.delete(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/emailgroup/${emailGroupId}`);
      getEmailGroups();
    } catch (error) {
      //logOutUser();
    }
  };
  const deleteEmailTemplate = async (emailTemplateId) => {
    dispatch({ type: DELETE_EMAILTEMPLATE_BEGIN });
    try {
      await axios.delete(`https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/emailtemplate/${emailTemplateId}`);
      getEmailTemplates();
    } catch (error) {
      //logOutUser();
    }
  };
  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN });

    try {
      const { data } = await authFetch("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/jobs/stats");
      console.log(data);
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          monthlyApplications: data.monthlyApplications,
        },
      });
    } catch (error) {
      logOutUser();
    }
    clearAlert();
  };
  const showAdvisorStats = async () => {
    dispatch({ type: SHOW_ADVISOR_STATS_BEGIN });

    try {
      const { data } = await axios.get("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/advisor/stats");
      console.log(data);
      dispatch({
        type: SHOW_ADVISOR_STATS_SUCCESS,
        payload: {
          advisorMonthlyApplications: data.monthlyApplications,
        },
      });
    } catch (error) {
      dispatch({
        type: SHOW_ADVISOR_STATS_ERROR,
        payload: { msg: error.message },
      });
      //logOutUser();
    }
    clearAlert();
  };
  const showAgentStats = async () => {
    dispatch({ type: SHOW_AGENT_STATS_BEGIN });
    try {
      const { data } = await axios.get("https://us-central1-autoservice1-wfjfmj.cloudfunctions.net/helloWorld/api/v1/agent/stats");
      console.log(data);
      dispatch({
        type: SHOW_AGENT_STATS_SUCCESS,
        payload: {
          agentMonthlyApplications: data.monthlyApplications,
        },
      });

    } catch (error) {
      
    }
    clearAlert();
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  const clearAdvisorFilters = () => {
    dispatch({ type: CLEAR_ADVISOR_FILTERS });
  };
  const clearAgentFilters = () => {
    dispatch({ type: CLEAR_AGENT_FILTERS });
  };
  const clearDealerFilters = () => {
    dispatch({ type: CLEAR_DEALER_FILTERS });
  };
  const clearEmailGroupFilters = () => {
    dispatch({ type: CLEAR_EMAILGROUP_FILTERS });
  };
  const changePage = (page) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: {
        page,
      },
    });
  };
  const changeAdvisorPage = (advisorPage) => {
    dispatch({
      type: CHANGE_ADVISOR_PAGE,
      payload: {
        advisorPage,
      },
    });
  };
  const changeAgentPage = (agentPage) => {
    dispatch({
      type: CHANGE_AGENT_PAGE,
      payload: {
        agentPage,
      },
    });
  };
  const changeDealerPage = (dealerPage) => {
    dispatch({
      type: CHANGE_DEALER_PAGE,
      payload: {
        dealerPage,
      },
    });
  };
  const changeEmailGroupPage = (emailGroupPage) => {
    dispatch({
      type: CHANGE_EMAILGROUP_PAGE,
      payload: {
        emailGroupPage,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        setupUser,
        toggleSidebar,
        logOutUser,
        updateUser,
        handleChange,
        clearValues,
        createJob,
        getJobs,
        setEditJob,
        deleteJob,
        editJob,
        showStats,
        clearFilters,
        changePage,
        createAdvisor,
        getAdvisors,
        setEditAdvisor,
        deleteAdvisor,
        editAdvisor,
        showAdvisorStats,
        advisorsHandleChange,
        clearAdvisorValues,
        clearAdvisorFilters,
        clearAgentValues,
        agentsHandleChange,
        createAgent,
        getAgents,
        setEditAgent,
        deleteAgent,
        editAgent,
        showAgentStats,
        clearAgentFilters,
        changeAdvisorPage,
        changeAgentPage,
        createDealer,
        getDealers,
        setEditDealer,
        deleteDealer,
        editDealer,
        dealersHandleChange,
        clearDealerValues,
        clearDealerFilters,
        changeDealerPage,
        createEmailGroup,
        getEmailGroups,
        setEditEmailGroup,
        deleteEmailGroup,
        editEmailGroup,
        emailGroupHandleChange,
        clearEmailGroupValues,
        clearEmailGroupFilters,
        handleEmailTemplateChange,
        createEmailTemplate,
        getEmailTemplates,
        editEmailTemplate,
        deleteEmailTemplate
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
