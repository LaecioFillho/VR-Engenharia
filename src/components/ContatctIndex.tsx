import "./contactCSS.css"

export default function() {
    return (
        <>
            <section className="warraper-contact">
                <aside className="text-initial-contact">
                    <h1 className="h1-contact">Faça seu Orçamento</h1>
                    <p className="p-contact">Já garanta o seu projeto do jeitinho que você deseja, pelo o preço que cabe no seu bolso!</p>
                </aside>

                <aside>
                    <h1 className="h1-alternative-contact">Entre em <span>contato</span></h1>
                </aside>
                <aside className="div-contact">
                    <div>
                        <form action="" className="form-contact">
                            <label htmlFor="imessege" className="label-contact">Mensagem</label>
                            <textarea name="text-area" id="imenssege" placeholder="Ex: Olá, gostaria de realizar um orçamento estrutural, por gentileza!">

                            </textarea>
                            <div className="inputs-contact">
                                <div>
                                    <label htmlFor="iname" className="label-contact">Seu nome:</label>
                                    <input type="text" name="name" id="iname" placeholder="Cliente Junior..."/>
                                </div>
                                <div>
                                    <label htmlFor="iemail" className="label-contact">Seu email:</label>
                                    <input type="email" name="email" id="iemail" placeholder="cliente@gmail.com..." />
                                </div>
                            </div>
                            <button className="btn-env-contact">Enviar</button>
                        </form>
                    </div>

                    <div>

                    </div>
                </aside>
            </section>
        </>
    )
}