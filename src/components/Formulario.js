import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import './formulario';

const Formulario = ({showDatas}) => {
    const [name, setName] = useState('');    
    const [paterno, setPaterno] = useState('');
    const [materno, setMaterno] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const [nacimiento, setNacimiento] = useState('');
    const [imagen, setImagen] = useState('');
    const [datos, setDatos] = useState({
        calle: '',
        numero: '',
        colonia: '',
        delegacion: '',
        estado: '',
        imagen: '',
        cp: '',
    });



    const handleSubmit = (e) => {
        e.preventDefault();
    }
    //foto

    let videoRef = useRef(null);

    let photoRef = useRef(null);

    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: true
            
        }).then((stream) => {
            let video = videoRef.current;

            video.srcObject = stream;
            video.play();
        }).catch((error) => console.error(error))
    }

    const takePicture = () => {
        let width = 300;
        let height = width / (16 / 9);
        let photo = photoRef.current;
        let video = videoRef.current;
        photo.width = width;
        photo.height = height;

        let context = photo.getContext('2d');
        context.drawImage(video, 0, 0, photo.width, photo.height);

        let photo64 = photo.toDataURL();

        setImagen(photo64);

        console.log(photo64);
    }

    
    useEffect(() => {
        getUserCamera();
    }, [videoRef]);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setDatos({
            ...datos,
            [name]: value
        })

    }

    return (
        <>
        
        <h2 style={{paddingBottom: "2rem"}}>Registro</h2>

        <Form onSubmit={handleSubmit} method="POST">
            <Container>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Nombre:</Label>
                            <Input 
                                type='text' 
                                name='nombre' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Apellido Paterno:</Label>
                            <Input 
                                type='text' 
                                name='paterno' 
                                value={paterno} 
                                onChange={(e) => setPaterno(e.target.value)} 
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Apellido Materno:</Label>
                            <Input 
                                type='text' 
                                name='materno'
                                value={materno} 
                                onChange={(e) => setMaterno(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Edad:</Label>
                            <Input 
                                type='number' 
                                name='edad' 
                                value={edad} 
                                onChange={(e) => setEdad(e.target.value)}
                            />
                        </FormGroup>
    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input 
                                type='email' 
                                name='email'  
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Fecha de nacimiento:</Label>
                            <Input 
                                type='date' 
                                name='nacimiento' 
                                value={nacimiento} 
                                onChange={(e) => setNacimiento(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label><strong>Dirección</strong></Label>
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Calle:</Label>
                            <Input 
                                type='text' 
                                name='calle'  
                                value={datos.calle} 
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Numero:</Label>
                            <Input 
                                type='text'
                                name='numero' 
                                value={datos.numero} 
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Colonia:</Label>
                            <Input 
                                type='text' 
                                name='colonia' 
                                value={datos.colonia} 
                                onChange={handleChange} 
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Delegación / Municipio:</Label>
                            <Input 
                                type='text' 
                                name='delegacion'  
                                value={datos.delegacion} 
                                onChange={handleChange} 
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Estado:</Label>
                            <Input 
                                type='text' 
                                name='estado'  
                                value={datos.estado} 
                                onChange={handleChange} 
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Codigo Postal:</Label>
                            <Input 
                                type='number' 
                                name='cp' 
                                value={datos.cp} 
                                onChange={handleChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <label><strong>Fotografía de registro</strong></label>
                <FormGroup style={{marginTop: "2rem"}}>
                    <video ref={videoRef} className="video"style={{width: "300px", height:"250px"}}></video>
                    <br />
                    <Button style={{marginBottom: "2rem"}} onClick={takePicture} color='warning'>Tomar foto</Button>
                    <br />
                    <canvas ref={photoRef}></canvas>
                </FormGroup>
                <Button 
                    style={{marginBottom: "2rem"}}
                    onClick={() => showDatas(imagen, name, paterno, materno, edad, email, nacimiento, datos)} 
                    color='primary' 
                    type='submit'>
                        Submit
                </Button>
            </Container>
        </Form>
        </>
    )
    }

export default Formulario;