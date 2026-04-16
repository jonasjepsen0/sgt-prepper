import { Ul } from "../components/atoms/index.js"
import { Li } from "../components/atoms/index.js"
import { Link } from "../components/atoms/index.js"

const renderNav = async data => {
    const nav = document.querySelector('#nav')
    
    const ul = Ul("flex")

    data.map(item => {
        const li = Li("mr-6")
        const a = Link(`/index.htm#/produkter/${item.slug}`)
        a.innerText = item.title
        li.append(a)
        ul.append(li)
    })
    nav.append(ul)
}

export default renderNav