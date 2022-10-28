import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <Card className='my-5 p-4 shadow-lg'>
                <Card.Body>
                    <Card.Title>What is CORS 'cross-origin resource sharing'?</Card.Title>

                    <Card.Text>
                        Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-5 p-4 shadow-lg'>
                <Card.Body>
                    <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>

                    <Card.Text>
                        To go along with the current flow of technological development, every developer wants to build great apps, that will serve as business solutions. If you are one of them, then come on, you are in the right place. For this time, I’m going to help you discover the features and benefits of Firebase to help take your mobile app a notch higher. As a result, you'll understand which backend development solution works better for you, depending on your specific requirements, and the product type (final product, MVP, prototype).

                        Firebase is a toolkit and infrastructure that aims at supporting the process of building better applications and growing a successful business. This technique continues to innovate and dominate the BaaS (Backend as a Service) market. Along with the time, it has grown so much that it has become a key component of Google’s mobile strategy. It was bought by Google and now it is being constantly improved in order to make the user experience much more convenient and productive.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-5 p-4 shadow-lg'>
                <Card.Body>
                    <Card.Title>How does the private route work?</Card.Title>

                    <Card.Text>
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

                        The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-5 p-4 shadow-lg'>
                <Card.Body>
                    <Card.Title>What is Node? How does Node work?</Card.Title>

                    <Card.Text>
                        Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.

                        Now you can do much more with JavaScript than just making websites interactive.

                        JavaScript now has the capability to do things that other scripting languages like Python can do.

                        Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.

                        Why Node.js?
                        Here’s a formal definition as given on the official Node.js website:

                        Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.

                        Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

                        Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
                        We already discussed the first line of this definition: “Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.” Now let’s understand the other two lines so we can find out why Node.js is so popular.

                        I/O refers to input/output. It can be anything ranging from reading/writing local files to making an HTTP request to an API.

                        I/O takes time and hence blocks other functions.

                        Consider a scenario where we request a backend database for the details of user1 and user2 and then print them on the screen/console. The response to this request takes time, but both of the user data requests can be carried out independently and at the same time.
                    </Card.Text>

                </Card.Body>
            </Card>

        </div >
    );
};

export default Blog;