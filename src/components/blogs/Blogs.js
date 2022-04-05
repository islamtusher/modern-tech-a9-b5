import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                        <div className="answer context-api">
                            <h3>React Context Api</h3>
                            <p>
                                React Context is a method to pass props from parent to child component(s). Also we can say, that's A alternative to "prop drilling" or moving props from grandparent to child to parent. So we used context to share data with multiple components, without having to pass through props in every child component manually.So Context makes developer codding to easier, lighter approach.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className="answer Semantics Tag">
                            <h3>Semantics Tag</h3>
                            <p>
                                Semantics Tag is a type of HTML tag.A semantics tag has a meaningful name That will describes the meaning of the element and help the browser and developer to understand the purpose of those element or contend. It's also help the autistic persons to understand purpose of the web-page and help search engines to read the page and find the required information faster.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;