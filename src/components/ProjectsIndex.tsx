import "./projectsCSS.css"

export default function ProjectsIndex() {
    
    return(
        <>
            <section className="warraper-projects" id="iprojects">
                <aside className="text-initial-projects">
                    <h1 className="h1-projects"><span className="h1-alter-projects">Projetos</span> & Execuções</h1>
                    <p className="p-projects">Alguns dos projetos que já foram realizados e executados em diversas obras.</p>
                </aside>

                <div className="projects-desc">
                    <h1 className="h1-projects">Projeto Estrutural</h1>
                </div>

                <aside className="box-projects">
                    <div>
                        <h2 className="h2-projects">Vista 1</h2>
                        <p className="p-projects"> lorem ypsum</p>
                        <div className="card-project one"></div>
                    </div>
                    <div>
                        <h2 className="h2-projects">Vista 2</h2>
                        <p className="p-projects"> lorem ypsum</p>
                        <div className="card-project two"></div>
                    </div>
                    <div>
                        <h2 className="h2-projects">Vista 3</h2>
                        <p className="p-projects"> lorem ypsum</p>
                        <div className="card-project three"></div>
                    </div>
                </aside>
            </section>
        </>
    )
}