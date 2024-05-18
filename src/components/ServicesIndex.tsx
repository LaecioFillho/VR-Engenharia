import "./servicesCSS.css"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2"
import { HiBuildingLibrary } from "react-icons/hi2"
import { HiArrowLongRight } from "react-icons/hi2"

export default function ServicesIndex() {

    const services = [
        {
            title: "Projetos Arquitetonicos",
            description: "Criando projetos e designes graficos 3D para realizar aprensentação de toda estrutura, antes da excução da obra.",
            icon: <HiOutlineBuildingOffice2 className="service-icon"/>,
        },
        {
            title: "Projetos Estruturais",
            description: "Criando projetos e designes graficos 3D para realizar aprensentação de toda estrutura, antes da excução da obra.",
            icon: <HiBuildingLibrary className="service-icon"/>,
        },
        {
            title: "Lev. da Construção",
            description: "Criando projetos e designes graficos 3D para realizar aprensentação de toda estrutura, antes da excução da obra.",
            icon: <HiOutlineClipboardDocumentCheck className="service-icon"/>,
        },
    ]
    return(
        <>
            <section className="warraper-services" id="iservices">
                <h1 className="h1-services">Serviços & <span className="text-alternative">Especialidades</span></h1>
                <p className="p-services">Meus tipos de serviços, e tudo que posso fazer para le atender.</p>

                <div className="general-service">
                    {services.map((service, index) => (
                    <div className="card-services">   
                        <div className="card" key={`service-${index}`}>
                            <h1 className="h1-services">{service.title}</h1>
                            <p className="p-services">{service.description}</p>
                            <div>{service.icon}</div>
                            <div> <HiArrowLongRight  className="arrow-next"/> </div>
                        </div>         
                    </div>))}
                </div>
            </section>
        </>
    )
}