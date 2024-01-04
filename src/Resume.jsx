import { useState } from "react";
import {
    MdKeyboardArrowDown,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardArrowUp,
} from "react-icons/md";
import "./resume.scss";

let content = [];

// education
content[0] = (
    <>
        <h1>university of california san diego</h1>
        <p>
            b.s. computer engineering, b.s. applied mathematics <br />
            gpa: <b>3.96/4.00</b>, sep. 2022 — jun. 2026 <br />
            awards: haag scholarship, provost honors (x4)
        </p>
        <br />
        <h1>the harker school</h1>
        <p>
            gpa: <b>4.51/4.30</b>, aug. 2018 — jun. 2022
        </p>
    </>
);

// experience
content[1] = (
    <>
        <h1>uc san diego mathematics — grader</h1>
        <ul>
            <li>
                graded weekly matlab and proof-based assignments for linear
                algebra and mathematical reasoning courses.
            </li>
        </ul>
    </>
);

// skills
content[2] = [
    <>
        <h1>languages</h1>
        <i className="devicon-javascript-plain" title="javascript" />
        <i className="devicon-typescript-plain" title="typescript" />
        <i className="devicon-html5-plain" title="html5" />
        <i className="devicon-css3-plain" title="css3" />
        <i className="devicon-sass-original" title="sass" />
        <i className="devicon-python-plain" title="python" />
        <i className="devicon-java-plain" title="java" />
        <i className="devicon-c-line" title="c" />
        <i className="devicon-cplusplus-line" title="c++" />
        <i className="devicon-markdown-plain" title="markdown" />
        <i className="devicon-latex-plain" title="latex" />
    </>,
    <>
        <h1>web development</h1>
        <i className="devicon-react-original" title="react" />
        <i className="devicon-nodejs-plain" title="node.js" />
        <i className="devicon-express-original" title="express" />
        <i className="devicon-redux-plain" title="redux" />
        <i className="devicon-webpack-plain" title="webpack" />
        <i className="devicon-materialui-plain" title="materialui" />
        <i className="devicon-npm-plain" title="npm" />
        <i className="devicon-jest-plain" title="jest" />
        <i className="devicon-eslint-plain" title="eslint" />
    </>,
    <>
        <h1>data science / machine learning</h1>
        <i className="devicon-pytorch-original" title="pytorch" />
        <i className="devicon-opencv-plain" title="opencv" />
        <i className="devicon-numpy-original" title="numpy" />
        <i className="devicon-pandas-original" title="pandas" />
        <i className="devicon-anaconda-plain" title="anaconda" />
        <i className="devicon-jupyter-plain" title="jupyter" />
    </>,
    <>
        <h1>tools</h1>
        <i className="devicon-git-plain" title="git" />
        <i className="devicon-github-original" title="github" />
        <i className="devicon-bash-plain" title="bash" />
        <i className="devicon-docker-original" title="docker" />
        <i className="devicon-vscode-plain" title="vscode" />
        <i className="devicon-vim-plain" title="vim" />
        <i className="devicon-selenium-plain" title="selenium" />
        <i className="devicon-intellij-plain" title="intellij" />
        <i className="devicon-matlab-plain" title="matlab" />
        <i className="devicon-gimp-plain" title="gimp" />
        <i className="devicon-figma-plain" title="figma" />
        <i className="devicon-blender-plain" title="blender" />
    </>,
    <>
        <h1>databases</h1>
        <i className="devicon-mongodb-plain" title="mongodb" />
        <i className="devicon-redis-plain" title="redis" />
    </>,
];

// projects
content[3] = [
    <>
        <h1>disneyland tracker</h1>
        <ul>
            <li>
                created a <b>full-stack</b> web application with <b>react</b> to
                track disneyland wait times, displaying data analytics through a
                responsive <b>materialui</b> and <b>d3</b> dashboard.
            </li>
            <li>
                implemented a <b>bun</b> backend with <b>express</b> and{" "}
                <b>mongodb</b> to store and retrieve time-series data, deploying
                with <b>docker</b> and <b>digitalocean</b>.
            </li>
            <li>
                created a <b>typescript</b> program to regularly scrape data
                from the disneyland website using <b>selenium</b>
            </li>
        </ul>
    </>,
    <>
        <h1>personal sleep data analysis</h1>
        <ul>
            <li>
                utilized <b>python</b>, <b>pandas</b>, and <b>matplotlib</b> to
                analyze personal sleep data
            </li>
            <li>
                performed comprehensive data preprocessing, including cleaning
                and feature engineering, to extract key insights and improve
                sleep quality
            </li>
            <li>
                used <b>scikit-learn</b> to apply both{" "}
                <b>supervised and unsupervised learning</b> techniques to
                identify trends
            </li>
        </ul>
    </>,
    <>
        <h1>custom perceptron</h1>
        <ul>
            <li>
                developed a <b>deep learning</b> network from scratch in{" "}
                <b>java</b> that classifies the number of fingers in an image of
                a hand with 95% accuracy.
            </li>
            <li>
                implemented generalized architecture with the perceptron
                learning algorithm and sigmoid activation function.
            </li>
            <li>
                created a custom dataset of images, developing a preprocessing
                pipeline to extract grayscale vectors, reducing noise and
                improving accuracy.
            </li>
        </ul>
    </>,
    <>
        <h1>linguistics quiz generator</h1>
        <ul>
            <li>
                developed a <b>react</b> web application to generate quizzes for
                an introductry linguistics course, using <b>chakra ui</b> to
                create a responsive design.
            </li>
            <li>
                extensively prompt engineered to utilize the GPT-4 API to
                generate a parsable set of questions and answers.
            </li>
        </ul>
    </>,
    <>
        <h1>mips compiler</h1>
        <ul>
            <li>
                developed a compiler in <b>java</b> to compile a subset of the
                pascal language into MIPS <b>assembly</b> code.
            </li>
            <li>
                implemented a lexical analyzer, recursive descent parser,
                abstract syntax tree, and code generator.
            </li>
        </ul>
    </>,
];

// organizations
content[4] = (
    <>
        <h1>organizations and other experience</h1>
        <p>
            the intermission orchestra — president (2022 - now) <br />
            acm — membership staff (2023 - now) <br />
            ieee eta kappa nu (2023 - now) <br />
            student arts council (2022 - now) <br />
            tapioca express — barista (2023) <br />
            ascension competitive dance team (2022 - 2023) <br />
            ucsd chamber orchestra (2022)
        </p>
    </>
);

// courses
content[5] = [
    <>
        <h1>cs courses</h1>
        <p>
            cse 101: design and analysis of algorithms (pending) <br />
            lign 167: deep learning for nlp (pass) <br />
            cse 100: advanced data structures (a) <br />
            cse 30: systems programming (a+) <br />
            cse 15l: software tools and techniques (a+) <br />
            neural networks (a+) <br />
            compilers & interpreters (a+) <br />
        </p>
    </>,
    <>
        <h1>math courses</h1>
        <p>
            math 170a: numerical analysis i (pending)
            <br />
            econ 109: game theory (a) <br />
            math 154: graph theory (a+) <br />
            math 109: mathematical reasoning (a+) <br />
            math 18: linear algebra (a+) <br />
            math 20d: differential equations (a+) <br />
        </p>
    </>,
    <>
        <h1>other courses</h1>
        <p>
            ece 65: components and circuits lab (pending) <br />
            lign 121: syntax i (a) <br />
            ece 45: circuits and systems (a) <br />
            ece 35: intro to analog design (a-) <br />
        </p>
    </>,
];

const Resume = () => {
    const [section, setSection] = useState(0);
    const [page, setPage] = useState(0);

    const handleKeyDown = (e) => {
        switch (e.key) {
            case "ArrowLeft":
                handleLeft();
                break;
            case "ArrowRight":
                handleRight();
                break;
            case "ArrowUp":
                handleUp();
                break;
            case "ArrowDown":
                handleDown();
                break;
            default:
                break;
        }
    };

    const handleLeft = () => {
        if (!Array.isArray(content[section])) return;
        if (page === 0) return;
        setPage(page - 1);
    };

    const handleRight = () => {
        if (!Array.isArray(content[section])) return;
        if (page === content[section].length - 1) return;
        setPage(page + 1);
    };

    const handleUp = () => {
        if (section === 0) return;
        setSection(section - 1);
        setPage(0);
    };

    const handleDown = () => {
        if (section === content.length - 1) return;
        setSection(section + 1);
        setPage(0);
    };

    return (
        <div id="resume" tabIndex="0" onKeyDown={handleKeyDown}>
            <div>
                {Array.isArray(content[section])
                    ? content[section][page]
                    : content[section]}
            </div>

            <button
                id="left"
                onClick={handleLeft}
                className={
                    !Array.isArray(content[section]) || page === 0
                        ? "inactive"
                        : ""
                }
            >
                <MdKeyboardArrowLeft />
            </button>
            <button
                id="right"
                onClick={handleRight}
                className={
                    !Array.isArray(content[section]) ||
                    page === content[section].length - 1
                        ? "inactive"
                        : ""
                }
            >
                <MdKeyboardArrowRight />
            </button>
            <button
                id="up"
                onClick={handleUp}
                className={section === 0 ? "inactive" : ""}
            >
                <MdKeyboardArrowUp />
            </button>
            <button
                id="down"
                onClick={handleDown}
                className={section === content.length - 1 ? "inactive" : ""}
            >
                <MdKeyboardArrowDown />
            </button>
        </div>
    );
};

export default Resume;
