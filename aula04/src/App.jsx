import { useState } from "react";
import Alunos from "./components/Alunos";
import UserProvider from "./contexts/user";

export default function App() {
  return (
    <UserProvider>
      <div>
        <h1>Escola XPTO...</h1>
        <hr />
        <Alunos />
      </div>
    </UserProvider>
  )
}
