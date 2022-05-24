import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';

const Formulario = () => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

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
        let OriPhoto = photo64.split(',')[1];

        console.log(OriPhoto);
    }

    
    useEffect(() => {
        getUserCamera();
    }, [videoRef])

    return (
        <Form onSubmit={handleSubmit}>

            <FormGroup>
                <video ref={videoRef}></video>
                <br />
                <Button onClick={takePicture} color='warning'>Tomar foto</Button>
                <br />
                <canvas ref={photoRef}></canvas>
            </FormGroup>
            <br />

            <FormGroup>
                <Label>Nombre:</Label>
                <Input type='text' name='nombre' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label>Apellido Paterno:</Label>
                <Input type='text' name='paterno' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label>Apellido Materno:</Label>
                <Input type='text' name='materno' onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label>Edad:</Label>
                <Input type='number' name='edad' onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label>Email:</Label>
                <Input type='email' name='email' onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label>Fecha de nacimiento:</Label>
                <Input type='date' name='nacimiento' onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label><strong>Datos</strong></Label>
            </FormGroup>
            <FormGroup>
                <Label>Calle:</Label>
                <Input type='text' name='calle' onChange={handleChange}/>
                <Label>Numero:</Label>
                <Input type='number' name='numero' onChange={handleChange}/>
                <Label>Colonia:</Label>
                <Input type='text' name='colonia' onChange={handleChange}/>
                <Label>Delegación / Municipio:</Label>
                <Input type='text' name='municipio' onChange={handleChange}/>
                <Label>Estado:</Label>
                <Input type='text' name='estado' onChange={handleChange}/>
                <Label>Codigo Postal:</Label>
                <Input type='number' name='cp' onChange={handleChange}/>
            </FormGroup>
            <Button color='primary' type='submit'>Submit</Button>
        </Form>
    )
    }

export default Formulario;