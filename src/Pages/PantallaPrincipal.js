import BarraNavega from "./BarraNavega";
import Lista from "./ListaViajes";

const PPrincipal = () => {
    return(
        <div>
            <BarraNavega></BarraNavega>
            <div className="container">
                <Lista></Lista>

                <Lista></Lista>
                <Lista></Lista>
            </div>
        </div>
    );

}

export default PPrincipal;