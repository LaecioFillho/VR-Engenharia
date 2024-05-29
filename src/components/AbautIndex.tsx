import "./abautCSS.css"

export default function AbautIndex() {
    return(
        <>
            <main>
                <div className="warraper-bar" id="iabaut">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar-max"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <section className="abaut">
                    <div className="back-abaut-one">
                        <aside className="back-abaut"></aside>
                    </div>
                    
                    <article>
                        <h1 className="h1-abaut">Empresa Especializada em <span className="h2-alternative">Projetos BIM</span></h1>
                        <p className="p-abaut">Sempre pronta para realizar o seu Sonho!</p>
                        <div className="description-abaut">
                            <h2 className="h2-abaut">Sobre a <span className="h2-alternative">VR Engenharia</span></h2>
                            <p className="p-description-abaut">
                                A VR Engenharia é uma empresa especializada em projetos arquitetônicos e complementares, utilizando a metodologia BIM (Building Information Modeling) para garantir precisão e eficiência. Nossa equipe transforma as necessidades dos clientes em soluções personalizadas que combinam funcionalidade, estética e sustentabilidade. Com o BIM, oferecemos visualizações detalhadas e gestão eficiente dos recursos. Comprometidos com a qualidade e a satisfação do cliente, entregamos projetos que superam expectativas dentro do prazo e orçamento.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}