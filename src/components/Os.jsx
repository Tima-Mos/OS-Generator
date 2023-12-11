import React, {useRef, useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from "react-bootstrap";
import {
    Outlet,
    useNavigate
} from "react-router-dom";


const Os = ({updateMap, resultString}) => {

    const navigate = useNavigate()
    const resultInput = useRef()

    function insertResult(){
        resultInput.current.value = resultString
    }



    return (
        <div>
            {/*два селекта для скрипта ОС и языка ОС*/}
            <div className="top-selects">
                <Form.Select
                    aria-label="Default select example"
                    className="select-left"
                    onChange={event => navigate(event.target.value)}
                >
                    <option value={'script1'}>script1</option>
                    <option value={'script2'}>script2</option>
                    <option value={'script4'}>script4</option>

                </Form.Select>
                <Form.Select
                    aria-label="Default select example"
                    className="select-right" >
                </Form.Select>
            </div>

            {/*4 инпута*/}
            <div>
                <Container>
                    <Row >
                        <Col  className="cols left-col">
                            <InputGroup size="lg" className="single-col">
                                <Form.Control
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="Ваше Имя"
                                    onChange={event => updateMap("yourName" ,event.target.value)}
                                />
                            </InputGroup>
                        </Col>

                    </Row>
                    <Row >
                        <Col  className="cols left-col">
                            <InputGroup size="lg" >
                                <Form.Control
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="Имя ребёнка"
                                    onChange={event => updateMap("childName" ,event.target.value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col  className="cols right-col">
                            <InputGroup size="lg" >
                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={event => updateMap("childGender" ,event.target.value)}
                                >
                                    <option>Мальчик</option>
                                    <option>Девочка</option>
                                </Form.Select>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="cols left-col">
                            <InputGroup size="lg" >
                                <Form.Control
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="Имя родителя"
                                    onChange={event => updateMap("parentName" ,event.target.value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col className="cols right-col">
                            <InputGroup size="lg" >
                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={event => updateMap("subject" ,event.target.value)}
                                >
                                    <option>Выберите предмет</option>
                                    <option>Python</option>
                                    <option>Unity</option>
                                    <option>Scratch</option>
                                    <option>Roblox</option>
                                    <option>Minecraft</option>
                                    <option>Web</option>
                                    <option>Digital Creativity</option>
                                </Form.Select>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/*больше поле для просмотра результата
            и редактирования дял результата*/}
            <div className="textArea">
                <div id="detail">
                    <Outlet />
                </div>
            </div>

            {/*кнопка генерации текста*/}
            <div className="d-grid gap-2 button">
                <Button  variant="primary" size="lg" onClick={insertResult} >
                    Сгенерировать
                </Button>
            </div>


            {/*текстареа для результата*/}
            <div>
                <InputGroup size="lg">
                    <Form.Control as="textarea"
                                  aria-label="Large"
                                  aria-describedby="inputGroup-sizing-sm"
                                  ref={resultInput}
                                  style={{minHeight: '860px', marginTop:"20px"}}

                    />
                </InputGroup>
            </div>
        </div>
    );
};

export default Os;