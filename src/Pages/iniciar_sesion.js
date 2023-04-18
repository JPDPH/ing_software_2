import BarraNavega from "./BarraNavega";

const Sesion = () => {
    return(
        <div>
            <BarraNavega></BarraNavega>
            <div className="container">
                <div>
                    <h1>Iniciar Sesion</h1>
                    <div>
                        <label className="form-label">
                            Usuario
                        </label>
                        <input className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">
                        Password
                        </label>
                        <input type="password" className="form-control"  />
                    </div>
                </div>
                <a href="#" >Login</a>
            </div>
        </div>
    );

}

export default Sesion;