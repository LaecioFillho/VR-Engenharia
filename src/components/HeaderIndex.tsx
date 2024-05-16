
import "./headerCSS.css";

export default function headerIndex(){
    return(

        <>
            <section className="header">
                <aside className="back-header">
                    <div className="Logo">
                        <img className="img-logo" src="../src/assets/Logos/vr-white.svg" alt="Logo Marca" />
                    </div>
                    <p className="p-header">Engenharia Especializada em design de predios, interiores e duplex. Construindo o seu Lar...</p>
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