import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
      <h1 className="text-3xl font-bold sm:text-4xl">Página não encontrada</h1>
      <p className="mt-4 text-zinc-600">
        Erro 404: o endereço que você tentou abrir não existe neste site.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-lg bg-zinc-900 px-5 py-2.5 font-semibold text-white hover:bg-zinc-700"
        >
          Voltar para o início
        </Link>
        <Link
          to="/carros"
          className="rounded-lg border border-zinc-300 px-5 py-2.5 font-medium hover:bg-stone-100"
        >
          Ver carros
        </Link>
      </div>
    </section>
  )
}

export default NotFound
