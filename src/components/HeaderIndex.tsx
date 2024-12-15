
import "./headerCSS.css";


export default function headerIndex(){
    return(

        <>
            <section className="header">
                <aside className="back-header">
                    <nav className="nav1">
                        <a href="#iabaut">Engenheiro</a>
                        <a href="#iabaut">Sobre a Empresa</a>
                        <a href="#iprojects">Projetos</a>
                        <a href="#iservices">Serviços</a>
                    </nav>

                    <nav className="nav2">
                        <a href="#">Tecnologias</a>
                        <a href="#">Área do Cliente </a>
                        <a href="#icontact">Contatos</a>
                    </nav>

                </aside>
            </section>
        </>

    )

}
