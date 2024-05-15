
import "./headerCSS.css";

export default function headerIndex(){
    return(

        <>
            <section className="header">
                <aside className="back-header">
                    <div className="Logo">
                        <img className="img-logo" src="../src/assets/Logos/vr-white.png" alt="" />
                    </div>
                    <h4>Engenharia Especializada em design de predios, interiores e duplex. Construindo o seu Lar...</h4>
                    <nav>
                        <a href="#">Engenheiro</a>
                        <a href="#">Serviços</a>
                        <a href="#">Projetos</a>
                        <a href="#">Contatos</a>
                    </nav>
                </aside>
            </section>
        </>

    )

}