import React, {useRef} from "react";
import { Col, Row } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import emailjs from '@emailjs/browser';

import FormInput from "../form-input/form-input.component";
import FormTextArea from "../form-textarea/form-textarea.component";

import "./contactos.styles.scss";

function Contactos() {

    const formRef = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bdee6sh', 'template_jstzauf', formRef.current, 'R1NIR7L2ooPO9fiiZ')
        .then((result) => {
            console.log(result.text);
            console.log("message sent!")
        }, (error) => {
            console.log(error.text);
        });

        emailjs.sendForm('service_bdee6sh', 'template_fwv23u7', formRef.current, 'R1NIR7L2ooPO9fiiZ')
        .then((result) => {
            console.log(result.text);
            console.log("message sent 2!")
        }, (error) => {
            console.log(error.text);
        });

        alert("Mensagem enviada com sucesso!")
        window.scrollTo(0, 0)
        navigate('/');
    };
  
    return (
        <>
            <Row className="enviar-msg-container">
                <Col md="5" className="text-enviar-msg">
                    <form  ref={formRef} onSubmit={sendEmail}>
                        <h2 id="title-enviar-msg">
                            <strong>Entre em contacto!</strong>
                        </h2>

                        <FormInput
                            id='input-form'
                            type="text"
                            name="user_name"
                            placeholder="Nome"
                            required
                        />

                        <FormInput
                            id='input-form'
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                        />
                        <FormInput
                            id='input-form'
                            type="text"
                            name="user_phone"
                            placeholder="Telefone"
                            required
                        />
                        <FormTextArea
                            className='msg-enviar-msg'
                            id='input-form'
                            type="text"
                            name="user_message"
                            placeholder="Mensagem"
                            required
                        />
                        <Row className="row-btn-enviar-msg">
                            <button type="submit" value="Send" className="btn-enviar-msg">
                                <strong>ENVIAR MENSAGEM</strong>
                            </button>
                        </Row>
                    </form>
                </Col>
                <Col md="7">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48322.80783246368!2d-8.002902399999998!3d40.802137300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23456c4ace62c1%3A0xf61ad335808e3ae!2sQuinta%20das%20Fontes%20Turismo!5e0!3m2!1spt-PT!2spt!4v1692212469238!5m2!1spt-PT!2spt" 
                    width="100%" 
                    height="700px" 
                    style={{ border: 0}}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    frameBorder="0"
                    aria-hidden="false"
                    tabIndex="0"
                    id="adjust-details"
                    title="map"
                />
                </Col>
            </Row>
        </>
    );
}

export default Contactos;   