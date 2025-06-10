import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import Nome from "../Nome";

export default function Alunos() {
    const { nomeAluno } = useContext(UserContext);
    
    return (
        <div>
            <h1>Componente Alunos: {nomeAluno}</h1>
            <Nome />
        </div>
    )
}
