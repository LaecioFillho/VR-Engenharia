import "./servicesCSS.css"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2"
import { HiBuildingLibrary } from "react-icons/hi2"
import { HiArrowLongRight } from "react-icons/hi2"

export default function ServicesIndex() {

    const messegerwapp = "Olá, gostaria de realizar um Orçamento de um projeto do meu sonho!"


    const services = [
        {
            title: "Projetos Arquitetonicos",
            description: "Um projeto arquitetônico é a concepção e o planejamento detalhado de uma construção, buscando harmonizar aspectos estéticos, funcionais e de conforto. ",
            icon: <HiOutlineBuildingOffice2 className="service-icon"/>,
            link: `https://wa.me/5588994899283?text=${messegerwapp}`,
        },
        {
            title: "Projetos Estruturais",
            description: "Criando projetos e designes graficos 3D para realizar aprensentação de toda estrutura, antes da excução da obra.",
            icon: <HiBuildingLibrary className="service-icon"/>,
            link: `https://wa.me/5588994899283?text=${messegerwapp}`,
        },
        {
            title: "Projetos de Instalações",
            description: "A criação de projetos de instalações Hidraulicas e de Intalções Eletricas.",
            icon: <HiOutlineClipboardDocumentCheck className="service-icon"/>,
            link: `https://wa.me/5588994899283?text=${messegerwapp}`,
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
                            <a className="a-Service" href={service.link}>Fazer Orçamento</a>
                        </div>         
                    </div>))}
                </div>
            </section>
        </>
    )
}