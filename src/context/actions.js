export const DISPLAY_ALERT = "SHOW_ALERT";
export const CLEAR_ALERT = "CLEAR_ALERT";

export const REGISTER_USER_BEGIN = "REGISTER_USER_BEGIN";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const LOGIN_USER_BEGIN = "LOGIN_USER_BEGIN";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

// *** Will use the SETUP_ prefix to begin, as both functionalities are quite similar. But when introducing other auth functionality (i.e. email verification, password reset, etc..) will revert back to indivdual Context Workflows for each action.

export const SETUP_USER_BEGIN = "SETUP_USER_BEGIN";
export const SETUP_USER_SUCCESS = "SETUP_USER_SUCCESS";
export const SETUP_USER_ERROR = "SETUP_USER_ERROR";

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const LOGOUT_USER = "LOGOUT_USER";

export const UPDATE_USER_BEGIN = "UPDATE_USER_BEGIN";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const CLEAR_VALUES = "CLEAR_VALUES";

export const HANDLE_ADVISOR_CHANGE = "HANDLE_ADVISOR_CHANGE";
export const CLEAR_ADVISOR_VALUES = "CLEAR_ADVISOR_VALUES";

export const HANDLE_AGENT_CHANGE = "HANDLE_AGENT_CHANGE";
export const CLEAR_AGENT_VALUES = "CLEAR_AGENT_VALUES";

export const HANDLE_DEALER_CHANGE = "HANDLE_DEALER_CHANGE";
export const CLEAR_DEALER_VALUES = "CLEAR_DEALER_VALUES";

export const CREATE_JOB_BEGIN = "CREATE_JOB_BEGIN";
export const CREATE_JOB_SUCCESS = "CREATE_JOB_SUCCESS";
export const CREATE_JOB_ERROR = "CREATE_JOB_ERROR";

export const GET_JOBS_BEGIN = "GET_JOBS_BEGIN";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";

export const SET_EDIT_JOB = "SET_EDIT_JOB";

export const DELETE_JOB_BEGIN = "DELETE_JOB_BEGIN";

export const EDIT_JOB_BEGIN = "EDIT_JOB_BEGIN";
export const EDIT_JOB_SUCCESS = "EDIT_JOB_SUCCESS";
export const EDIT_JOB_ERROR = "EDIT_JOB_ERROR";

export const SHOW_STATS_BEGIN = "SHOW_STATS_BEGIN";
export const SHOW_STATS_SUCCESS = "SHOW_STATS_SUCCESS";

export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const CHANGE_PAGE = "CHANGE_PAGE";

export const CREATE_ADVISOR_BEGIN = "CREATE_ADVISOR_BEGIN";
export const CREATE_ADVISOR_SUCCESS = "CREATE_ADVISOR_SUCCESS";
export const CREATE_ADVISOR_ERROR = "CREATE_ADVISOR_ERROR";

export const GET_ADVISORS_BEGIN = "GET_ADVISORS_BEGIN";
export const GET_ADVISORS_SUCCESS = "GET_ADVISORS_SUCCESS";
export const GET_ADVISORS_ERROR = "GET_ADVISORS_ERROR";

export const SET_EDIT_ADVISOR = "SET_EDIT_ADVISOR";

export const DELETE_ADVISOR_BEGIN = "DELETE_ADVISOR_BEGIN";

export const EDIT_ADVISOR_BEGIN = "EDIT_ADVISOR_BEGIN";
export const EDIT_ADVISOR_SUCCESS = "EDIT_ADVISOR_SUCCESS";
export const EDIT_ADVISOR_ERROR = "EDIT_ADVISOR_ERROR";

export const SHOW_ADVISOR_STATS_BEGIN = "SHOW_ADVISOR_STATS_BEGIN";
export const SHOW_ADVISOR_STATS_SUCCESS = "SHOW_ADVISOR_STATS_SUCCESS";
export const SHOW_ADVISOR_STATS_ERROR = "SHOW_ADVISOR_STATS_ERROR";

export const CLEAR_ADVISOR_FILTERS = "CLEAR_ADVISOR_FILTERS";

export const CHANGE_ADVISOR_PAGE = "CHANGE_ADVISOR_PAGE";

export const CREATE_AGENT_BEGIN = "CREATE_AGENT_BEGIN";
export const CREATE_AGENT_SUCCESS = "CREATE_AGENT_SUCCESS";
export const CREATE_AGENT_ERROR = "CREATE_AGENT_ERROR";

export const GET_AGENTS_BEGIN = "GET_AGENTS_BEGIN";
export const GET_AGENTS_SUCCESS = "GET_AGENTS_SUCCESS";
export const GET_AGENTS_ERROR = "GET_AGENTS_ERROR";

export const SET_EDIT_AGENT = "SET_EDIT_AGENT";

export const DELETE_AGENT_BEGIN = "DELETE_AGENT_BEGIN";

export const EDIT_AGENT_BEGIN = "EDIT_AGENT_BEGIN";
export const EDIT_AGENT_SUCCESS = "EDIT_AGENT_SUCCESS";
export const EDIT_AGENT_ERROR = "EDIT_AGENT_ERROR";

export const SHOW_AGENT_STATS_BEGIN = "SHOW_AGENT_STATS_BEGIN";
export const SHOW_AGENT_STATS_SUCCESS = "SHOW_AGENT_STATS_SUCCESS";
export const SHOW_AGENT_STATS_ERROR = "SHOW_AGENT_STATS_ERROR";

export const CLEAR_AGENT_FILTERS = "CLEAR_AGENT_FILTERS";

export const CHANGE_AGENT_PAGE = "CHANGE_AGENT_PAGE";

export const CREATE_DEALER_BEGIN = "CREATE_DEALER_BEGIN";
export const CREATE_DEALER_SUCCESS = "CREATE_DEALER_SUCCESS";
export const CREATE_DEALER_ERROR = "CREATE_DEALER_ERROR";

export const GET_DEALERS_BEGIN = "GET_DEALERS_BEGIN";
export const GET_DEALERS_SUCCESS = "GET_DEALERS_SUCCESS";
export const GET_DEALERS_ERROR = "GET_DEALERS_ERROR";

export const SET_EDIT_DEALER = "SET_EDIT_DEALER";

export const DELETE_DEALER_BEGIN = "DELETE_DEALER_BEGIN";

export const EDIT_DEALER_BEGIN = "EDIT_DEALER_BEGIN";
export const EDIT_DEALER_SUCCESS = "EDIT_DEALER_SUCCESS";
export const EDIT_DEALER_ERROR = "EDIT_DEALER_ERROR";

export const CLEAR_DEALER_FILTERS = "CLEAR_DEALER_FILTERS";

export const CHANGE_DEALER_PAGE = "CHANGE_DEALER_PAGE";

export const CREATE_EMAIL_TEMPLATE = "CREATE_EMAIL_TEMPLATE";

export const CREATE_EMAILUSER_BEGIN = "CREATE_EMAILUSER_BEGIN";
export const CREATE_EMAILUSER_SUCCESS = "CREATE_EMAILUSER_SUCCESS";
export const CREATE_EMAILUSER_ERROR = "CREATE_EMAILUSER_ERROR";

export const GET_EMAILUSER_BEGIN = "GET_EMAILUSER_BEGIN";
export const GET_EMAILUSER_SUCCESS = "GET_EMAILUSER_SUCCESS";
export const GET_EMAILUSER_ERROR = "GET_EMAILUSER_ERROR";

export const SET_EDIT_EMAILUSER = "SET_EDIT_EMAILUSER";

export const DELETE_EMAILUSER_BEGIN = "DELETE_EMAILUSER_BEGIN";

export const EDIT_EMAILUSER_BEGIN = "EDIT_EMAILUSER_BEGIN";
export const EDIT_EMAILUSER_SUCCESS = "EDIT_EMAILUSER_SUCCESS";
export const EDIT_EMAILUSER_ERROR = "EDIT_EMAILUSER_ERROR";

export const CLEAR_EMAILUSER_FILTERS = "CLEAR_EMAILUSER_FILTERS";

export const CHANGE_EMAILUSER_PAGE = "CHANGE_EMAILUSER_PAGE";

export const CREATE_EMAILGROUP_BEGIN = "CREATE_EMAILGROUP_BEGIN";
export const CREATE_EMAILGROUP_SUCCESS = "CREATE_EMAILGROUP_SUCCESS";
export const CREATE_EMAILGROUP_ERROR = "CREATE_EMAILGROUP_ERROR";

export const GET_EMAILGROUP_BEGIN = "GET_EMAILGROUP_BEGIN";
export const GET_EMAILGROUP_SUCCESS = "GET_EMAILGROUP_SUCCESS";
export const GET_EMAILGROUP_ERROR = "GET_EMAILGROUP_ERROR";

export const SET_EDIT_EMAILGROUP = "SET_EDIT_EMAILGROUP";

export const DELETE_EMAILGROUP_BEGIN = "DELETE_EMAILGROUP_BEGIN";

export const EDIT_EMAILGROUP_BEGIN = "EDIT_EMAILGROUP_BEGIN";
export const EDIT_EMAILGROUP_SUCCESS = "EDIT_EMAILGROUP_SUCCESS";
export const EDIT_EMAILGROUP_ERROR = "EDIT_EMAILGROUP_ERROR";

export const CLEAR_EMAILGROUP_FILTERS = "CLEAR_EMAILGROUP_FILTERS";

export const CHANGE_EMAILGROUP_PAGE = "CHANGE_EMAILGROUP_PAGE";

export const HANDLE_EMAILGROUP_CHANGE = "HANDLE_EMAILGROUP_CHANGE";

export const CLEAR_EMAILGROUP_VALUES = "CLEAR_EMAILGROUP_VALUES";

export const CREATE_EMAILTEMPLATE_BEGIN = "CREATE_EMAILTEMPLATE_BEGIN";
export const CREATE_EMAILTEMPLATE_SUCCESS = "CREATE_EMAILTEMPLATE_SUCCESS";
export const CREATE_EMAILTEMPLATE_ERROR = "CREATE_EMAILTEMPLATE_ERROR";

export const GET_EMAILTEMPLATE_BEGIN = "GET_EMAILTEMPLATE_BEGIN";
export const GET_EMAILTEMPLATE_SUCCESS = "GET_EMAILTEMPLATE_SUCCESS";
export const GET_EMAILTEMPLATE_ERROR = "GET_EMAILTEMPLATE_ERROR";

export const SET_EDIT_EMAILTEMPLATE = "SET_EDIT_EMAILTEMPLATE";

export const EDIT_EMAILTEMPLATE_BEGIN = "EDIT_EMAILTEMPLATE_BEGIN";
export const EDIT_EMAILTEMPLATE_SUCCESS = "EDIT_EMAILTEMPLATE_SUCCESS";
export const EDIT_EMAILTEMPLATE_ERROR = "EDIT_EMAILTEMPLATE_ERROR";

export const DELETE_EMAILTEMPLATE_BEGIN = "DELETE_EMAILTEMPLATE_BEGIN";

export const HANDLE_EMAILTEMPLATE_SAVE = "HANDLE_EMAILTEMPLATE_SAVE";
export const HANDLE_EMAILTEMPLATE_SAVE2 = "HANDLE_EMAILTEMPLATE_SAVE2";

export const CREATE_EMAIL_BOX_BEGIN = "CREATE_EMAIL_BOX_BEGIN";
export const CREATE_EMAIL_BOX_SUCCESS = "CREATE_EMAIL_BOX_SUCCESS";




