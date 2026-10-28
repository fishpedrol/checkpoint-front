function CarFilters({ busca, categoria, categorias, onMudarBusca, onMudarCategoria, onLimpar }) {
  return (
    <div className="grid gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_auto_auto] sm:items-end sm:p-5">
      <div>
        <label htmlFor="busca" className="block text-sm font-medium">
          Buscar por marca ou modelo
        </label>
        <input
          id="busca"
          type="search"
          value={busca}
          onChange={(evento) => onMudarBusca(evento.target.value)}
          placeholder="Ex.: Porsche ou X5"
          className="mt-1 h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 placeholder:text-zinc-500"
        />
      </div>

      <div>
        <label htmlFor="categoria" className="block text-sm font-medium">
          Categoria
        </label>
        <select
          id="categoria"
          value={categoria}
          onChange={(evento) => onMudarCategoria(evento.target.value)}
          className="mt-1 h-11 w-full rounded-lg border border-zinc-300 bg-white px-3"
        >
          <option value="">Todas as categorias</option>
          {categorias.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={onLimpar}
        className="h-11 rounded-lg border border-zinc-300 px-4 font-medium hover:bg-stone-100"
      >
        Limpar filtros
      </button>
    </div>
  )
}

export default CarFilters
