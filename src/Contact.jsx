import {
    PiEnvelopeSimpleThin as EmailIcon,
    PiGithubLogoThin as GithubIcon,
    PiLinkedinLogoThin as LinkedinIcon,
} from "react-icons/pi";

import "./contact.scss";

const Contact = () => (
    <div id="contact">
        <ul>
            <li>
                <a href="mailto:brandonmpark@gmail.com">
                    <EmailIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/brandonmpark"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GithubIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/brandonmpark/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedinIcon />
                </a>
            </li>
        </ul>
    </div>
);

export default Contact;
