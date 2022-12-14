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
import parse from 'html-react-parser';

const Template =({
    _id,
    emailTemplate
}) => {
    const { setEditTemplate, deleteTemplate } = useAppContext();
    return (
        <Wrapper>
            <header>
            <div className="main-icon">{emailTemplate.templateName.charAt(0)}</div>
            <div className="info">
            <Stack direction="row" spacing={2}>
            <p>Name : </p> {emailTemplate.templateName}
                </Stack>
            </div>
            </header>
            <Stack direction="row" spacing={2} height={300}>

            </Stack>
            <div className="content">
            <div className="content-center">
            {parse(emailTemplate.html)}
            </div>
            </div>
            <footer>
            <div className="footer-center">
                <div className="footer-icons">
                <Link to={`/editTemplate/${_id}`}>
                    <button
                    className="btn"
                    onClick={() => setEditTemplate(_id)}
                    >
                    Edit
                    </button>
                </Link>
                <button
                    className="btn"
                    onClick={() => deleteTemplate(_id)}
                >
                    Delete
                </button>
                </div>
            </div>
            </footer>
        </Wrapper>
    );
};

export default Template;
