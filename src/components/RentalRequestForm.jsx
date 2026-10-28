import { useEffect, useRef, useState } from 'react'

const formularioVazio = { nome: '', email: '', retirada: '', devolucao: '' }

function formatarData(data) {
  const [ano, mes, dia] = data.split('-')
  return `${dia}/${mes}/${ano}`
}

function dataDeHoje() {
  const hoje = new Date()
  const mes = String(hoje.getMonth() + 1).padStart(2, '0')
  const dia = String(hoje.getDate()).padStart(2, '0')
  return `${hoje.getFullYear()}-${mes}-${dia}`
}

function validar(dados) {
  const erros = {}

  if (dados.nome.trim().length < 3) {
    erros.nome = 'Informe seu nome (pelo menos 3 letras).'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email.trim())) {
    erros.email = 'Informe um e-mail válido, como nome@exemplo.com.'
  }

  if (dados.retirada === '') {
    erros.retirada = 'Escolha a data de retirada.'
  } else if (dados.retirada < dataDeHoje()) {
    erros.retirada = 'A retirada não pode ser antes de hoje.'
  }

  if (dados.devolucao === '') {
    erros.devolucao = 'Escolha a data de devolução.'
  } else if (dados.devolucao <= dados.retirada) {
    erros.devolucao = 'A devolução precisa ser depois da retirada.'
  }

  return erros
}

function RentalRequestForm({ carro, onFechar }) {
  const dialogRef = useRef(null)
  const [dados, setDados] = useState(formularioVazio)
  const [erros, setErros] = useState({})
  const [resumo, setResumo] = useState(null)

  const temErros = Object.keys(erros).length > 0
  const diaria = carro.diaria.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  useEffect(() => {
    dialogRef.current.showModal()
  }, [])

  function fechar() {
    dialogRef.current.close()
  }

  function alterarCampo(evento) {
    const { name, value } = evento.target
    setDados({ ...dados, [name]: value })
  }

  function enviar(evento) {
    evento.preventDefault()
    const novosErros = validar(dados)
    setErros(novosErros)

    if (Object.keys(novosErros).length === 0) {
      setResumo(dados)
      setDados(formularioVazio)
    }
  }

  function classeDoCampo(campo) {
    const borda = erros[campo] ? 'border-red-600' : 'border-zinc-300'
    return `mt-1 w-full rounded-lg border bg-white px-3 py-2 ${borda}`
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onFechar}
      aria-labelledby="titulo-consulta"
      className="m-auto w-11/12 max-w-lg rounded-2xl bg-white p-6 text-zinc-900 shadow-2xl backdrop:bg-zinc-950/70 sm:p-8"
    >
      <h2 id="titulo-consulta" className="text-2xl font-bold">
        Consulta do {carro.marca} {carro.modelo}
      </h2>
      <p className="mt-1 text-zinc-600">
        {carro.ano} · {carro.categoria} · {diaria} / dia (valor ilustrativo)
      </p>

      <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-950">
        Este formulário é só uma demonstração: ele não cria reserva e não envia nem salva os
        dados digitados.
      </p>

      {resumo ? (
        <div role="status" className="mt-6 rounded-lg border border-emerald-300 bg-emerald-50 p-4">
          <h3 className="text-lg font-bold text-emerald-950">
            Simulação concluída. Nenhuma reserva foi feita.
          </h3>
          <p className="mt-2 text-emerald-950">
            Os dados não foram enviados nem salvos e o {carro.marca} {carro.modelo} não foi
            reservado. Período simulado: {formatarData(resumo.retirada)} a{' '}
            {formatarData(resumo.devolucao)}.
          </p>
          <button
            type="button"
            onClick={fechar}
            autoFocus
            className="mt-4 rounded-lg bg-zinc-900 px-5 py-2.5 font-semibold text-white hover:bg-zinc-700"
          >
            Fechar
          </button>
        </div>
      ) : (
        <form noValidate onSubmit={enviar} className="mt-6 grid gap-4">
          <div>
            <label htmlFor="consulta-nome" className="block text-sm font-medium">
              Nome
            </label>
            <input
              id="consulta-nome"
              name="nome"
              type="text"
              value={dados.nome}
              onChange={alterarCampo}
              required
              aria-invalid={erros.nome ? true : false}
              aria-describedby="erro-nome"
              className={classeDoCampo('nome')}
            />
            <p id="erro-nome" className="mt-1 text-sm text-red-700">
              {erros.nome}
            </p>
          </div>

          <div>
            <label htmlFor="consulta-email" className="block text-sm font-medium">
              E-mail
            </label>
            <input
              id="consulta-email"
              name="email"
              type="email"
              value={dados.email}
              onChange={alterarCampo}
              required
              aria-invalid={erros.email ? true : false}
              aria-describedby="erro-email"
              className={classeDoCampo('email')}
            />
            <p id="erro-email" className="mt-1 text-sm text-red-700">
              {erros.email}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="consulta-retirada" className="block text-sm font-medium">
                Data de retirada
              </label>
              <input
                id="consulta-retirada"
                name="retirada"
                type="date"
                min={dataDeHoje()}
                value={dados.retirada}
                onChange={alterarCampo}
                required
                aria-invalid={erros.retirada ? true : false}
                aria-describedby="erro-retirada"
                className={classeDoCampo('retirada')}
              />
              <p id="erro-retirada" className="mt-1 text-sm text-red-700">
                {erros.retirada}
              </p>
            </div>

            <div>
              <label htmlFor="consulta-devolucao" className="block text-sm font-medium">
                Data de devolução
              </label>
              <input
                id="consulta-devolucao"
                name="devolucao"
                type="date"
                min={dados.retirada}
                value={dados.devolucao}
                onChange={alterarCampo}
                required
                aria-invalid={erros.devolucao ? true : false}
                aria-describedby="erro-devolucao"
                className={classeDoCampo('devolucao')}
              />
              <p id="erro-devolucao" className="mt-1 text-sm text-red-700">
                {erros.devolucao}
              </p>
            </div>
          </div>

          {temErros && (
            <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-800">
              Confira os campos marcados em vermelho.
            </p>
          )}

          <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={fechar}
              className="rounded-lg border border-zinc-300 px-5 py-2.5 font-medium hover:bg-stone-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-amber-400 px-5 py-2.5 font-semibold text-zinc-950 hover:bg-amber-300"
            >
              Simular consulta
            </button>
          </div>
        </form>
      )}
    </dialog>
  )
}

export default RentalRequestForm
