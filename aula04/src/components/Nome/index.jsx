import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";

export default function Nome() {
  const [novoNome, setNovoNome] = useState("");
  const { nomeAluno, setNomeAluno, total } = useContext(UserContext);

  return (
    <div>
      <p>Total: {total}</p>
      <h2>Nome do aluno: {nomeAluno}</h2>
      <input type="text" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} />
      <button onClick={() => { setNomeAluno(novoNome) }}>Alterar nome</button>
    </div>
  )
}
