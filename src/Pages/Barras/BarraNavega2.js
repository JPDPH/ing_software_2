import { useNavigate } from "react-router-dom"

const BarraNavega2 = () => {

    const navigate = useNavigate()

    function fin (){
        localStorage.removeItem('turista')
        navigate('/')
    }

    return(
        <div class="container">
            <div className="row">

                <div className="col-4">
                    <h1>TourIzi</h1>
                </div>

                <div className="col-6">
                    <nav class="navbar navbar-expand-lg" >
                        <div class="container-fluid">
                            <div>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="/sesion">Tours</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/guia">Support</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="col-2">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={fin}>Log out</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default BarraNavega2;