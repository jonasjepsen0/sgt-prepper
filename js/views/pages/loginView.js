import { Button, Div, Form, Heading, Input, Label, Paragraph } from "../components/atoms/index.js"

export const loginView = onSubmit => {
    const root = document.querySelector("#root")

    const wrapper = Div("max-w-md")

    const h1 = Heading(1, "Log ind", "text-2xl font-bold mb-4")

    const form = Form("flex flex-col gap-3")

    const usernameLabel = Label("Brugernavn", "username")
    const usernameInput = Input("text", "username", "border p-2 rounded")
    usernameInput.id = "username"

    const passwordLabel = Label("Adgangskode", "password")
    const passwordInput = Input("password", "password", "border p-2 rounded")
    passwordInput.id = "password"

    const submit = Button("Log ind", "bg-slate-700 text-white px-3 py-2 rounded")
    submit.type = "submit"

    const error = Paragraph("", "text-red-500")

    form.addEventListener("submit", async event => {
        event.preventDefault()
        error.innerText = ""
        try {
            await onSubmit(usernameInput.value, passwordInput.value)
        } catch {
            error.innerText = "Login fejlede"
        }
    })

    form.append(usernameLabel, usernameInput, passwordLabel, passwordInput, submit, error)
    wrapper.append(h1, form)
    root.append(wrapper)
}
