import "./projectsCSS.css"

export default function ProjectsIndex() {
    
    return(
        <>
            <section className="warraper-projects">
                <aside className="text-initial-projects">
                    <h1 className="h1-projects"><span className="h1-alter-projects">Projetos</span> & Execuções</h1>
                    <p className="p-projects">Alguns dos projetos que já foram realizados e executados em diversas obras.</p>
                </aside>

                <aside className="box-projects">
                    <div>
                        <div className="card-project one"></div>
                    </div>
                    <div>
                        <div className="card-project two"></div>
                    </div>
                    <div>
                        <div className="card-project three"></div>
                    </div>
                </aside>
            </section>
        </>
    )
}