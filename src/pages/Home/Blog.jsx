// import React from 'react';

const Blog = () => {
    return (
        <div className="container">
            <h1>My Question blog</h1>
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
        </div>
    );
};

export default Blog;