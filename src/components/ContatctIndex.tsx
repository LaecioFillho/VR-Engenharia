import "./contactCSS.css"
import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { FaSpinner, FaWhatsapp } from "react-icons/fa"
import { HiCheckCircle, HiOutlineEnvelope, HiOutlineMapPin, } from "react-icons/hi2"

export default function() {
    const form = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    
        if (!form.current) return
    
        setLoading(true)
    
        emailjs
          .sendForm(
            "service_u3yozc3",
            "template_6g3pita",
            form.current,
            "SpbQR3KtRqd7YG4yh"
          )
          .then(
            () => {
              setSuccess(true)
              setLoading(false)
            },
            (error) => {
              setError(true)
              setLoading(false)
              console.error(error)
            }
          )
      }

      const contacts = [
        {
          name: "WhatsApp",
          description: "+55 88 9 9489-9283",
          link: "https://wa.me/5588994899283?text=Olá,tudo.bem?Gostaria.decombinar.um.projeto.para.o.meu.trabalho",
          icon: <FaWhatsapp className="icon-contact" />,
        },
        {
          name: "Email",
          description: "victor.ramirez.oxford@gmail.com",
          link: "mailto:victor.ramirez.oxford@gmail.com?subject=Olá...",
          icon: <HiOutlineEnvelope className="icon-contact" />,
        },
        {
          name: "Juazeiro do Norte",
          description: "Ceará BR",
          link: "#",
          icon: <HiOutlineMapPin className="icon-contact" />,
        },
      ]
    
    return (
        <>
            <section className="warraper-contact" id="icontact">
                <aside className="text-initial-contact">
                    <h1 className="h1-contact">Faça seu Orçamento</h1>
                    <p className="p-contact">Já garanta o seu projeto do jeitinho que você deseja, pelo o preço que cabe no seu bolso!</p>
                </aside>

                <aside>
                    <h1 className="h1-alternative-contact">Entre em <span>contato</span></h1>
                </aside>
                <aside className="div-contact">
                    <div>
                        <form ref={form} onSubmit={sendEmail} className="form-contact">
                            <label htmlFor="imessege" className="label-contact">Mensagem</label>
                            <textarea name="imessege" id="imenssege" required placeholder="Ex: Olá, gostaria de realizar um orçamento estrutural, por gentileza!">

                            </textarea>
                            <div className="inputs-contact">
                                <div>
                                    <label htmlFor="iname" className="label-contact">Seu nome:</label>
                                    <input type="text" name="iname" id="iname" placeholder="Cliente Junior..." required />
                                </div>
                                <div>
                                    <label htmlFor="iemail" className="label-contact">Seu email:</label>
                                    <input type="email" name="iemail" id="iemail" placeholder="cliente@gmail.com..." required />
                                </div>
                            </div>
                            <button type="submit" disabled={loading} className="btn-env-contact">
                                {loading && <FaSpinner className="animation-btn" />}
                                {success && <HiCheckCircle className="animation-btn-conclued" />}
                                Enviar mensagem
                            </button>
                                {error && (
                                <p className="p-contact"> Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde.</p>)}
                        </form>
                    </div>
                    
                    <div className="contacts-alternative">
                        {contacts.map((contact, index) => (

                        <div key={`contact-${index}`} className="contact-wpp">
                            {contact.icon}
                            <div>
                                <p className="p-contact-alternative">{contact.name}</p>
                                <a href={contact.link} target="_blank" className="a-contact">{contact.description}</a>
                            </div>
                        </div>
                        ))}
                    </div>
                </aside>
            </section>
        </>
    )
}