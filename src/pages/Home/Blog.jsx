// import React from 'react';

import { Button } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";

import jsPDF from 'jspdf';
const Blog = () => {

    const handleDownloadPDF = () => {
        // Generate PDF code here
        const doc = new jsPDF('p', 'pt', 'a4');
        const paragraph = 'This is the following question asked by Programming Hero Team:- [1] Tell us the differences between uncontrolled and controlled components. [2] How to validate React props using PropTypes, [3] Tell us the difference between nodejs and express js.,[4] What is a custom hook, and why will you create a custom hook?';

        doc.setFontSize(12);
        doc.text(paragraph, 50, 50, { maxWidth: 500 });
        doc.save('sample.pdf');
    };




    return (
        <div className="container">
            <h1 className="text-center">My Question blog
                <div className="text-center my-3 d-flex justify-content-center align-items-center">
                    <Button className="bg-danger d-flex justify-content-center align-items-center" onClick={handleDownloadPDF}>
                        <FaFilePdf></FaFilePdf>
                        <span className="ms-2">Down Load Pdf</span>
                    </Button>
                </div>

            </h1>
            <div>
                <h4>  Tell us the differences between uncontrolled and controlled components.</h4>
                <p>
                    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                </p>

                <h4>  How to validate React props using PropTypes</h4>
                <h3>React PropTypes validators:-</h3>
                <ul className="ms-4">
                    <li>  PropTypes.any : The prop can be of any data type.</li>
                    <li>PropTypes.bool : The prop should be a Boolean.</li>
                    <li>PropTypes.number : The prop should be a number.</li>
                    <li>PropTypes.string : The prop should be a string.</li>
                    <li>PropTypes.func : The prop should be a function.</li>
                    <li>
                        PropTypes.array : The prop should be an array.</li>
                </ul>

                <h4>   Tell us the difference between nodejs and express js.</h4>
                <p> NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>

                <h4>     What is a custom hook, and why will you create a custom hook?</h4>
                <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
            <div className="text-center my-3 d-flex justify-content-center align-items-center">
                <Button className="bg-danger d-flex justify-content-center align-items-center" onClick={handleDownloadPDF}>
                    <FaFilePdf></FaFilePdf>
                    <span className="ms-2">Down Load Pdf</span>
                </Button>
            </div>
        </div>

    );
};

export default Blog;