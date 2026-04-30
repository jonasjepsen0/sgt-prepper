import { Div, Heading, Paragraph } from "../components/atoms/index.js"

const renderFooter = () => {
    const footer = document.querySelector('#footer')

    const wrapper = Div("flex flex-col gap-1")

    const name = Heading(3, "Sgt. Prepper ApS", "font-bold")
    const address = Paragraph("Prepperstræde 12, 2200 København N")
    const email = Paragraph("kontakt@sgtprepper.dk")
    const cvr = Paragraph("CVR: 38476052")
    const cert = Paragraph("Medlem af e-mærket og Tryghedsmærket")

    wrapper.append(name, address, email, cvr, cert)
    footer.append(wrapper)
}

export default renderFooter
