function CarCard({ carro, onSelecionar }) {
  const diaria = carro.diaria.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <img
        src={carro.imagem}
        alt={`Foto de um ${carro.marca} ${carro.modelo}`}
        loading="lazy"
        className="aspect-[16/10] w-full bg-stone-200 object-cover"
      />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold">
          <span className="font-medium text-zinc-500">{carro.marca}</span> {carro.modelo}
        </h3>
        <p className="mt-1 text-sm text-zinc-600">
          {carro.ano} · {carro.categoria}
        </p>
        <p className="mt-3 flex-1 text-zinc-700">{carro.descricao}</p>

        <p className="mt-4">
          <span className="text-2xl font-bold">{diaria}</span>
          <span className="text-zinc-600"> / dia</span>
        </p>
        <p className="text-xs text-zinc-500">Valor ilustrativo, sem disponibilidade real.</p>

        {onSelecionar && (
          <button
            type="button"
            onClick={() => onSelecionar(carro)}
            className="mt-5 rounded-lg bg-zinc-900 px-4 py-3 font-semibold text-white hover:bg-zinc-700"
          >
            Solicitar consulta
            <span className="sr-only"> do {carro.marca} {carro.modelo}</span>
          </button>
        )}
      </div>
    </article>
  )
}

export default CarCard
