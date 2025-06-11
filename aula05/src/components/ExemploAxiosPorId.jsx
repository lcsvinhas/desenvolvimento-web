import axios from "axios"
import { use, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function ExemploAxiosPorId() {
    const [clienteData, setClienteData] = useState(null)
    const [clienteId, setClienteId] = useState("")

    const buscarClientePorId = () => {
        axios.get(`https://6848a4a2ec44b9f34941853b.mockapi.io/clientes/${clienteId}`)
            .then((response) => setClienteData(response.data))
            .catch(() => console.error("Erro ao buscar cliente"))
        setClienteData(null)
        setClienteId("")
    }

    return (
        <div className="container">
            <h2>Buscar Cliente por ID</h2>
            <div className="mb-3">
                <label className="form-label">Id do cliente: </label>
                <input
                    type="text"
                    className="form-control"
                    value={clienteId}
                    onChange={(e) => setClienteId(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={buscarClientePorId}>Buscar cliente</button>
            {clienteData && (
                <div className="mt-3">
                    <h3>Dados do Cliente</h3>
                    <p>ID: {clienteData.id}</p>
                    <p>Nome: {clienteData.nome}</p>
                    <p>Email: {clienteData.email}</p>
                </div>
            )}
        </div>
    )
}
