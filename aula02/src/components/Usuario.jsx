import Filho from "./Filho"

export default function Usuario() {
    const usuarios = [
        {
            "nome": "Antônio",
            "email": "a@gmail.com",
        },
        {
            "nome": "Carlos",
            "email": "c@gmail.com",
        },
        {
            "nome": "Adriana",
            "email": "adriana@gmail.com",
        }
    ]
    return (
        <div>
            <Filho users = {usuarios}/>
        </div>
    )
}
