export function Componente1() {
  return (
    <>
      <h1>Componente1</h1>
    </>
  );
}

export function Componente2() {
  const times = [
    "Vasco",
    "América",
    "Flamengo",
    "Fluminense",
    "Botafogo",
    "Bangu",
  ];
  const listaDeTimes = times.map((time, index) => <li key={index}>{time}</li>);
  const numeros = [1, 10, 20, 18, 30, 50];
  const calculo = numeros.reduce((total, numero) => total + numero, 0);
  const maiorQueCinco = times.filter(time => time.length > 5 && time[0]);
  return (
    <>
      <h1>Componente2</h1>
      <ul>{listaDeTimes}</ul>
      <p>Soma:{calculo}</p>
      <p>Times com mais de 5 caracteres: {maiorQueCinco.join(", ")}</p>
    </>
  );
}
