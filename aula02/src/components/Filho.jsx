export default function Filho({users}) {
  return (
    <div>
        <h2>Lista com dados dos usuários</h2>
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    <p>Nome: {user.nome}</p>
                    <p>Email: {user.email}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
