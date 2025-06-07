import { useState } from "react";

export default function Estado() {
    //   let valor = 100;
    const [valor, setValor] = useState(1);
    const [nome, setNome] = useState("Antônio")
    const [numero, setNumero] = useState(0);
    const mudarNome = () => {setNome((prevNome) => (prevNome === "Antônio" ? "João" : "Antônio"))}

    function calcular() {
        setValor(valor * 2)
        console.log(valor);
    }

    function incrementar() {
        setNumero(numero + 1)
    }

    function decrementar() {
        setNumero(numero - 1)
    }

    function resetar() {
        setNumero(0)
    }
    return (
        <div>
            <h1>Exemplo uso do States</h1>
            <p>Resultado:{valor}</p>
            <p>Nome: {nome}</p>
            <p>Contador: {numero}</p>
            <button onClick={calcular}>Calcular</button>
            <button onClick={mudarNome}>Mudar nome</button>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={resetar}>Resetar</button>
        </div>
    );
}
