function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm md:grid-cols-2">
        <div>
          <p className="text-base font-semibold text-white">Locação de Carros Importados</p>
          <p className="mt-2">Projeto acadêmico do Checkpoint 6 da disciplina Front-End.</p>
          <p className="mt-1">Feito com React, Vite e Tailwind CSS.</p>
        </div>
        <div className="md:text-right">
          <p>Preços e dados dos carros são fictícios.</p>
          <p className="mt-1">Este site não faz reservas e não envia nem salva dados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
