import Botao from "./Botao";

export default function Evento() {
    function testeEvento(){
        console.log("Teste de evento");
    }

    function segundoEvento(){
        console.log("Segundo evento");
    }



return (
    <div>
        <Botao evento={testeEvento} text="Botão 1"/>
        <Botao evento={segundoEvento} text="Botão 2"/>
    </div>
  )
}
