import Button from "./Button"
import Caixa from "./Caixa"
import Eventos from "./Eventos"
import * as styles from "./ExemploCss.module.css"

export default function ExemploCss() {
    const texto = {
        color: "green",
        fontSize: "2em"
    }

    return (
        <div>
            <h1 style={{ color: "#f019", fontSize: "4em" }}>Aula de React - CSS</h1>
            <h2 style={texto}>Css incorporado</h2>
            <h3 className="frase">Css do arquivo</h3>
            <Caixa cor="orange" />
            <Button />
            <button className={styles.botao}>Clique aqui 2</button>
            <Eventos />
        </div>
    )
}
