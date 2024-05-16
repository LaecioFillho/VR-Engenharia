import "./abautCSS.css"

export default function AbautIndex() {
    return(
        <>
            <main>
                <div className="warraper-bar">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar-max"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <section className="abaut">
                    <aside className="back-abaut"></aside>
                    
                    <article>
                        <h1 className="h1-abaut">Engenharia <span>Especializada</span></h1>
                        <p className="p-abaut">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="description-abaut">
                            <h2 className="h2-abaut">Sobre o <span className="h2-alternative">Engenheiro</span></h2>
                            <p className="p-description-abaut">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Reiciendis praesentium eos dicta tempora nesciunt expedita ipsa necessitatibus porro sapiente accusamus? 
                                Illum rem quaerat cupiditate debitis unde eius. Incidunt, deleniti nam.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Corporis assumenda voluptatum consequuntur porro cupiditate. 
                                Repellendus deserunt libero molestias mollitia, aut voluptas eaque dolores non provident quidem ipsum, 
                                inventore sequi error.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}