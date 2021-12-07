import video from './assets/mp4/bg.mov';
import './Login.css';
import logo from './assets/img/LogoBlanco.png'
import AuthenticationService from './service/AuthenticationService'
import { useState } from 'react';

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorValidacion, setErrorvalidacion] = useState("");

    function validate() {
        AuthenticationService.validateUser(username, password)
            .then((function (resultData) {
                props.funcEstaLogeado(resultData.result);
                props.funcCiudad(resultData.city);
                props.funcUrlBackend(resultData.url);
                
                if (resultData.result === false) {
                    setErrorvalidacion("Usuario o clave incorrectos")
                }
            }));

    }

    return (
        <>
            <video className="bg-video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop"><source src={video} type="video/mp4" /></video>
            <div className="masthead">
                <div className="masthead-content text-white">
                    <div className="container-fluid px-4 px-lg-0">
                        <img src={logo} width="200px" alt="logo" />
                        <h1 className="fst-italic lh-1 mb-4"><span className="titulo"><span>Pet</span>ter Mascotas</span></h1>
                        <p className="mb-5">Bienvenido a nuestra tienda de mascotas!</p>
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="row">
                                <div className="col"><input className="form-control" id="username" value={username} onChange={function (event) {
                                    setUsername(event.currentTarget.value)
                                }} type="text" placeholder="usuario" /></div>
                                <div className="col"><input className="form-control" id="password" value={password} onChange={function (event) {
                                    setPassword(event.currentTarget.value)
                                }} type="password" placeholder="clave" /></div>
                                <div className="col-auto">
                                    <button className="btn btn-sm btnvalidar " id="submitButton" type="button" onClick={validate} >Validar</button>
                                </div>
                            </div>
                        </form>

                        <p><span className="text-danger">{errorValidacion}</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
