import { useEffect, useState } from 'react'
import CarCard from '../components/CarCard.jsx'
import CarFilters from '../components/CarFilters.jsx'
import RentalRequestForm from '../components/RentalRequestForm.jsx'
import carros, { categorias } from '../data/carros.js'

function Carros() {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [carroSelecionado, setCarroSelecionado] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const termo = busca.trim().toLowerCase()
  const carrosFiltrados = carros.filter((carro) => {
    const nome = `${carro.marca} ${carro.modelo}`.toLowerCase()
    const combinaComBusca = nome.includes(termo)
    const combinaComCategoria = categoria === '' || carro.categoria === categoria
    return combinaComBusca && combinaComCategoria
  })

  function limparFiltros() {
    setBusca('')
    setCategoria('')
  }

  let textoResultado = `${carrosFiltrados.length} carros encontrados`
  if (carrosFiltrados.length === 1) {
    textoResultado = '1 carro encontrado'
  } else if (carrosFiltrados.length === 0) {
    textoResultado = 'Nenhum carro encontrado'
  }

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h1 className="text-3xl font-bold sm:text-4xl">Carros importados para locação</h1>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Busque por marca ou modelo, filtre por categoria e simule uma consulta. As informações
            e os valores são ilustrativos e não indicam disponibilidade real.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <CarFilters
          busca={busca}
          categoria={categoria}
          categorias={categorias}
          onMudarBusca={setBusca}
          onMudarCategoria={setCategoria}
          onLimpar={limparFiltros}
        />

        <h2 className="sr-only">Resultados</h2>
        <p aria-live="polite" className="mt-6 font-medium text-zinc-700">
          {textoResultado}
        </p>

        {carrosFiltrados.length > 0 ? (
          <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {carrosFiltrados.map((carro) => (
              <li key={carro.id}>
                <CarCard carro={carro} onSelecionar={setCarroSelecionado} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-12 text-center">
            <p className="text-lg font-semibold">Nenhum carro combina com a sua busca.</p>
            <p className="mt-2 text-zinc-600">
              Confira a grafia ou tente outra marca, outro modelo ou outra categoria.
            </p>
            <button
              type="button"
              onClick={limparFiltros}
              className="mt-6 rounded-lg bg-zinc-900 px-5 py-2.5 font-semibold text-white hover:bg-zinc-700"
            >
              Limpar busca e filtros
            </button>
          </div>
        )}
      </div>

      {carroSelecionado && (
        <RentalRequestForm carro={carroSelecionado} onFechar={() => setCarroSelecionado(null)} />
      )}
    </>
  )
}

export default Carros
