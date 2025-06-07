import { useState } from "react"

export default function FormNotas() {
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [nota4, setNota4] = useState(0)
    const [media, setMedia] = useState(0)
    const [mensagem, setMensagem] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        let m = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
        setMedia(m);
        if (m >= 7) {
            setMensagem("Aprovado");
        }
        else if (m >= 5) {
            setMensagem("Recuperação");
        } else {
            setMensagem("Reprovado");
        }
    }

    return (
        <div>
            <form className="formulario" onSubmit={handleSubmit}>
                <label htmlFor="nota1">Nota 1: </label>
                <input type="number" name="nota1" id="nota1" required value={nota1} onChange={(e) => setNota1(parseFloat(e.target.value))} />

                <label htmlFor="nota2">Nota 2: </label>
                <input type="number" name="nota2" id="nota2" required value={nota2} onChange={(e) => setNota2(parseFloat(e.target.value))} />

                <label htmlFor="nota3">Nota 3: </label>
                <input type="number" name="nota3" id="nota3" required value={nota3} onChange={(e) => setNota3(parseFloat(e.target.value))} />

                <label htmlFor="nota4">Nota 4: </label>
                <input type="number" name="nota4" id="nota4" required value={nota4} onChange={(e) => setNota4(parseFloat(e.target.value))} />

                <label>Média: {media.toFixed(2)} | {mensagem}</label>
                <button className="botao">Calcular</button>
            </form>
        </div>
    )
}
