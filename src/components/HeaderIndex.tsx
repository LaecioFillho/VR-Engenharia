
import "./headerCSS.css";

export default function headerIndex(){
    return(

        <>
            <section className="header">
                <aside className="back-header">
                    <div className="Logo"></div>
                    <p className="p-header">Engenharia Especializada em design de predios, interiores e duplex. Construindo o seu Lar...</p>
                    <nav>
                        <a href="#iabaut">Engenheiro</a>
                        <a href="#iservices">Serviços</a>
                        <a href="#iprojects">Projetos</a>
                        <a href="#icontact">Contatos</a>
                    </nav>
                </aside>
            </section>
        </>

    )

}