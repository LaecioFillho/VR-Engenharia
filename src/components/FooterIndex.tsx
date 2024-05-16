import "./footerCSS.css"

export default function FooterIndex() {
    return(
        <>
            <section className="Warraper-footer">
                <p className="p-footer">
                    &copy; {new Date().getFullYear()} &middot; Todos os direitos reservados.
                </p>
                <ul className="ul-footer">
                    <li className="li-footer">&middot;</li>
                    <li className="li-footer">
                        <a className="a-footer" href="#">Termos de uso</a>
                    </li>
                    <li className="li-footer">&middot;</li>
                    <li className="li-footer">
                        <a className="a-footer" href="#">Política de privacidade</a>
                    </li>
                </ul>
            </section>
        </>
    )
}