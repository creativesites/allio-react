import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  { id: 5, text: "Profile", path: "/profile", icon: <ImProfile /> },
  {id: 1, text: "All Advisors", path: "/all-advisors", icon: <MdQueryStats />},
  {id: 2, text: "Add Advisor", path: "/add-advisor", icon: <FaWpforms />},
  // {id: 3, text: "Advisor Stats", path: "/advisor-stats", icon: <IoBarChartSharp />},
  {id: 4, text: "Add Agent", path: "/add-agent", icon: <FaWpforms />},
  {id: 6, text: "All Agents", path: "/all-agents", icon: <MdQueryStats />},
  {id: 7, text: "All Dealers", path: "/all-dealers", icon: <MdQueryStats />},
  {id: 8, text: "Add Dealer", path: "/add-dealer", icon: <FaWpforms />},
  // {id: 9, text: "Create Email", path: "/create-email", icon: <FaWpforms />},
  {id: 10, text: "Create Emails", path: "/create-emails", icon: <FaWpforms />}
  // {id: 10, text: "Add Email Group", path: "/add-emailgroup", icon: <FaWpforms />},
  // {id: 11, text: "All Email Templates", path: "/all-email-templates", icon: <MdQueryStats />},
  // {id: 12, text: "Email Client Inbox", path: "/email-client-inbox", icon: <FaWpforms />},
];

export default links;
