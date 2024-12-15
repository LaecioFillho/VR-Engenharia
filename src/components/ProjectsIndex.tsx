import "./projectsCSS.css"
import { HiCheckBadge } from "react-icons/hi2";
import imgOneLeft from "../../public/img-projects/One-Left.jpeg"
import imgOneFront from "../../public/img-projects/One-Front.jpeg"
import imgOneRight from "../../public/img-projects/One-Rigth.jpeg"

export default function ProjectsIndex() {

    return(
        <>
            <section className="warraper-projects" id="iprojects">
                <aside className="text-initial-projects">
                    <h1 className="h1-projects"><span className="h1-alter-projects">Projetos</span> & Execuções</h1>
                    <p className="p-projects">Alguns dos projetos que já foram realizados e executados em diversas obras.</p>
                </aside>

                <hr className="line" />

                <section className="projc">
                    <div className="projects-desc">
                        <h1 className="h1-projects">
                            Projeto de Instalações Hidráulicas
                        </h1>
                    </div>

                    <HiCheckBadge className="iconVerification"/>

                    <aside className="box-projects">
                        <div>
                            <h2 className="h2-projects">Vista Ângulo Esquerdo</h2>
                            <div>
                                <img className="imgs" src={imgOneLeft}/>
                            </div>
                        </div>
                        <div>
                            <h2 className="h2-projects">Vista Central</h2>
                            <div>
                                <img className="imgs" src={imgOneFront}/>
                            </div>
                        </div>
                        <div>
                            <h2 className="h2-projects">Vista Ângulo Direito</h2>
                            <div>
                                <img className="imgs" src={imgOneRight}/>
                            </div>
                        </div>

                    </aside>
                    <p className="p-projects">
                        Nesse projeto foi estruturado toda a Instalação Hidráulica e Elétrica.
                    </p>
                </section>

                <hr className="line" />

                <section className="projc">
                    <div className="projects-desc">
                        <h1 className="h1-projects">Projeto de Instalações Elétricas</h1>
                        <p className="p-projects">Nesse projeto foi estruturado toda a Instalação Hidraulica e Elétrica.</p>
                    </div>

                    <HiCheckBadge className="iconVerification"/>

                    <aside className="box-projects">
                        <div>
                            <h2 className="h2-projects">Vista Ângulo Esquerdo</h2>
                            <div className="align-imgs">

                                <a className="a-projects" href="https://www.instagram.com/vr.engenhariia/" target="_blank"></a></div>
                            </div>
                        <div>
                            <h2 className="h2-projects">Vista Central</h2>
                            <div className="card-project five"><a className="a-projects" href="https://www.instagram.com/vr.engenhariia/" target="_blank"></a></div>
                        </div>
                        <div>
                            <h2 className="h2-projects">Vista Ângulo Direito</h2>
                            <div className="card-project six"><a className="a-projects" href="https://www.instagram.com/vr.engenhariia/" target="_blank"></a></div>
                        </div>
                    </aside>
                </section>
            </section>
        </>
    )
}
