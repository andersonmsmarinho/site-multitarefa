export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Site Multitarefa</h1>
      <p className="mb-2">
        Este aplicativo demonstra conversões em tempo real sem necessidade de botões:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Conversor de Dólar ↔ Real</li>
        <li>Conversor de Temperatura (°C ↔ °F)</li>
        <li>Conversor de Distância (m ↔ pés/polegadas)</li>
      </ul>
      <p>Use o menu acima para navegar.</p>
    </>
  )
}

//