import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Formulario = ({showDatas}) => {

    const [photoValue, setPhotoValue] = useState('');
    const [name, setName] = useState('');    
    const [paterno, setPaterno] = useState('');
    const [materno, setMaterno] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const [nacimiento, setNacimiento] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [colonia, setColonia] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [estado, setEstado] = useState('');
    const [cp, setCP] = useState('');


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
        let width = 500;
        let height = width / (16 / 9);
        let photo = photoRef.current;
        let video = videoRef.current;
        photo.width = width;
        photo.height = height;

        let context = photo.getContext('2d');
        context.drawImage(video, 0, 0, photo.width, photo.height);

        let photo64 = photo.toDataURL();

        setPhotoValue(photo64);
    }

    
    useEffect(() => {
        getUserCamera();
    }, [videoRef]);

    return (
        <Form onSubmit={handleSubmit} method="POST">
            <FormGroup>
                <Label>Nombre:</Label>
                <Input 
                    type='text' 
                    name='nombre' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </FormGroup>
            <FormGroup>
                <Label>Apellido Paterno:</Label>
                <Input 
                    type='text' 
                    name='paterno' 
                    value={paterno} 
                    onChange={(e) => setPaterno(e.target.value)} 
                />
            </FormGroup>
            <FormGroup>
                <Label>Apellido Materno:</Label>
                <Input 
                    type='text' 
                    name='materno'
                    value={materno} 
                    onChange={(e) => setMaterno(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>Edad:</Label>
                <Input 
                    type='number' 
                    name='edad' 
                    value={edad} 
                    onChange={(e) => setEdad(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>Email:</Label>
                <Input 
                    type='email' 
                    name='email'  
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>Fecha de nacimiento:</Label>
                <Input 
                    type='date' 
                    name='nacimiento' 
                    value={nacimiento} 
                    onChange={(e) => setNacimiento(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label><strong>Datos</strong></Label>
            </FormGroup>
            <FormGroup>
                <Label>Calle:</Label>
                <Input 
                    type='text' 
                    name='calle'  
                    value={calle} 
                    onChange={(e) => setCalle(e.target.value)}
                />
                <Label>Numero:</Label>
                <Input 
                    type='text'
                    name='numero' 
                    value={numero} 
                    onChange={(e) => setNumero(e.target.value)}
                />
                <Label>Colonia:</Label>
                <Input 
                    type='text' 
                    name='colonia' 
                    value={colonia} 
                    onChange={(e) => setColonia(e.target.value)} 
                />
                <Label>Delegación / Municipio:</Label>
                <Input 
                    type='text' 
                    name='municipio'  
                    value={municipio} 
                    onChange={(e) => setMunicipio(e.target.value)} 
                />
                <Label>Estado:</Label>
                <Input 
                    type='text' 
                    name='estado'  
                    value={estado} 
                    onChange={(e) => setEstado(e.target.value)} 
                />
                <Label>Codigo Postal:</Label>
                <Input 
                    type='number' 
                    name='cp' 
                    value={cp} 
                    onChange={(e) => setCP(e.target.value)} />
            </FormGroup>
             <FormGroup>
                <video ref={videoRef}></video>
                <br />
                <Button onClick={takePicture} color='warning'>Tomar foto</Button>
                <br />
                <canvas ref={photoRef}></canvas>
            </FormGroup>
            <Button 
                onClick={() => showDatas(photoValue, name, paterno, materno, edad, email, nacimiento, calle, numero, colonia, municipio, estado, cp)} 
                color='primary' 
                type='submit'>
                    Submit
            </Button>
        </Form>
    )
    }

export default Formulario;