export default function Eventos() {
    const handleClick = () => alert("Clicado!");

    return (
        <div>
            <h2>Trabalhando com eventos</h2>
            <button onClick={handleClick}>Evento de click</button>
            <p>Segundo botão de evento</p>
            <button onClick={() => alert("Clicado!")}>Evento de click 2</button>
        </div>
    )
}
