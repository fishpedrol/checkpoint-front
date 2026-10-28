import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard.jsx'
import carros from '../data/carros.js'

const passos = [
  {
    titulo: 'Busque',
    texto: 'Pesquise pela marca ou pelo modelo que você procura.',
  },
  {
    titulo: 'Filtre',
    texto: 'Escolha uma categoria: SUV, sedã, esportivo ou conversível.',
  },
  {
    titulo: 'Simule',
    texto: 'Preencha a consulta demonstrativa. Nenhuma reserva é criada.',
  },
]

function Home() {
  const destaques = carros.filter((carro) => carro.destaque)
  const carroDaCapa = carros.find((carro) => carro.id === 'carro-10')

  return (
    <>
      <section className="bg-zinc-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Locação de carros importados
            </h1>
            <p className="mt-4 max-w-xl text-lg text-zinc-300">
              Conheça SUVs, sedãs, esportivos e conversíveis, compare diárias ilustrativas e simule
              uma consulta de locação.
            </p>
            <Link
              to="/carros"
              className="mt-8 inline-block rounded-lg bg-amber-400 px-6 py-3 font-semibold text-zinc-950 hover:bg-amber-300"
            >
              Ver carros
            </Link>
            <p className="mt-6 text-sm text-zinc-400">Projeto acadêmico com dados fictícios.</p>
          </div>

          <img
            src={carroDaCapa.imagem}
            alt={`Foto de um ${carroDaCapa.marca} ${carroDaCapa.modelo}`}
            className="aspect-[16/10] w-full rounded-3xl bg-zinc-800 object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Destaques</h2>
            <p className="mt-2 text-zinc-600">Alguns modelos do catálogo de demonstração.</p>
          </div>
          <Link
            to="/carros"
            className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800"
          >
            Ver todos os carros
          </Link>
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destaques.map((carro) => (
            <li key={carro.id}>
              <CarCard carro={carro} />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <h2 className="text-3xl font-bold">Como funciona</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {passos.map((passo, indice) => (
              <li key={passo.titulo} className="border-t-2 border-zinc-900 pt-5">
                <h3 className="text-xl font-bold">
                  <span className="text-amber-700">{indice + 1}.</span> {passo.titulo}
                </h3>
                <p className="mt-2 text-zinc-600">{passo.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

export default Home
