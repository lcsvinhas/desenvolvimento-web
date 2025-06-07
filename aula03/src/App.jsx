import FormNotas from "./components/FormNotas";
import Header from "./components/Header";
import "./App.css"

export default function App() {
  return (
    <div>
      <Header title="Cálculo do IMC" />
      <div className="corpo">
        <FormNotas />
      </div>
    </div>
  )
}
