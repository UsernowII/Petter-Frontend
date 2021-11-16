import video from './assets/mp4/bg.mov';
import './Login.css';
import logo from './assets/img/LogoBlanco.png'

function Login() {
  return (
    <>
    <video className="bg-video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop"><source src={video} type="video/mp4" /></video>
        <div className="masthead">
            <div className="masthead-content text-white">
                <div className="container-fluid px-4 px-lg-0">
                    <img src={logo} width="200px" alt="logo" />
                    <h1 className="fst-italic lh-1 mb-4"><span className="titulo"><span>Pet</span>ter Mascotas</span></h1>
                    <p className="mb-5">Bienvenido a nuestra tienda de mascotas, todo para tus consentidos!</p>
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row">
                            <div className="col"><input className="form-control" id="username" type="text" placeholder="usuario" /></div>
                            <div className="col"><input className="form-control" id="password" type="password" placeholder="clave" /></div>
                            <div className="col-auto"><button className="btn btn-sm btnvalidar " id="submitButton" type="submit">Validar</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;
