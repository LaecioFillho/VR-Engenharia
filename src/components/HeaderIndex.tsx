
import "./headerCSS.css";

export default function headerIndex(){
    return(

        <>
            <section className="header">
                <div className="Logo">
                    <h1>Logo</h1>
                </div>
                <nav>
                    <a href="#">Sobre a Empresa</a>
                    <a href="#">Serviços</a>
                    <a href="#">Projetos</a>
                    <a href="#">Contatos</a>
                </nav>
            </section>
        </>

    )

}