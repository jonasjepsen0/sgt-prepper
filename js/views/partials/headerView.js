import { Heading, Link } from "../components/atoms/index.js"

const renderHeader = () => {
    const header = document.querySelector('#header')

    const h1 = Heading(1, 'Sgt. Prepper', 'text-2xl font-bold')

    const link = Link("/index.htm#/")

    link.append(h1)
    header.append(link)
}

export default renderHeader