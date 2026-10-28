# Locação de Carros Importados

Projeto acadêmico do Checkpoint 6 da disciplina Front-End (Engenharia de Software, turma 1ESPI). É uma aplicação web de demonstração para locação de carros importados, feita com React, Vite e Tailwind CSS.

> Preços e dados dos carros são fictícios, e as fotos são ilustrativas. O site não tem backend: não cria reservas e não envia nem salva dados.

## Funcionalidades

- Página inicial com apresentação, carros em destaque e um passo a passo.
- Página de carros com busca por marca ou modelo, filtro por categoria e aviso quando nada é encontrado.
- Formulário de consulta demonstrativo, com validação de nome, e-mail e período de locação.
- Página para endereços inexistentes.
- Layout responsivo, navegação por teclado e foco visível.

## Tecnologias

- React e Vite
- Tailwind CSS (plugin `@tailwindcss/vite`)
- React Router (`react-router-dom`), com as rotas definidas em `src/App.jsx`
- Fonte Archivo, instalada pelo pacote `@fontsource-variable/archivo` (licença OFL)
- oxlint para análise do código

## Como executar

É preciso ter o Node.js 20.19 (ou superior) ou 22.12 (ou superior).

```bash
npm install
npm run dev
```

Depois, abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Outros comandos:

```bash
npm run build    # gera a versão de produção na pasta dist
npm run preview  # abre a versão gerada pelo build
npm run lint     # verifica o código com o oxlint
```

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Início (`src/pages/Home.jsx`) |
| `/carros` | Catálogo de carros (`src/pages/Carros.jsx`) |
| qualquer outra | Página não encontrada (`src/pages/NotFound.jsx`) |

## Estrutura de pastas

```text
public/
  favicon.svg       ícone padrão do template do Vite
  images/           fotos dos carros (Wikimedia Commons)
src/
  components/
    Navbar.jsx
    Footer.jsx
    CarCard.jsx
    CarFilters.jsx
    RentalRequestForm.jsx
  data/
    carros.js       dados fictícios do catálogo
  pages/
    Home.jsx
    Carros.jsx
    NotFound.jsx
  App.jsx           rotas da aplicação
  main.jsx
  index.css
```

## Créditos das fotos

As fotos são do [Wikimedia Commons](https://commons.wikimedia.org/) e têm licença livre. Usei a versão de 960 px de largura que o próprio Commons gera. No site, elas são recortadas para caber no cartão. As fotos mostram o modelo de cada carro, mas nem sempre o mesmo ano ou versão do catálogo.

| Carro | Autor | Licença | Arquivo original |
| --- | --- | --- | --- |
| BMW X5 | Mr.choppers | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [Commons](https://commons.wikimedia.org/wiki/File:2020_BMW_X5_xDrive_40i,_front_left.jpg) |
| Porsche Cayenne | HJUdall | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | [Commons](https://commons.wikimedia.org/wiki/File:23_Porsche_Cayenne_Base.jpg) |
| Volvo XC60 | Alexander Migl | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Commons](https://commons.wikimedia.org/wiki/File:Volvo_XC60_(SPA)_FL_1X7A6405.jpg) |
| Mercedes-Benz Classe C | Charles from Port Chester, New York | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | [Commons](https://commons.wikimedia.org/wiki/File:Mercedes-Benz_C_300_e_(W206,_2025)_(54863904821).jpg) |
| Audi A6 | Damian B Oh | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Commons](https://commons.wikimedia.org/wiki/File:Audi_A6_Quattro_S_Line_C8_Daytona_Grey_Metallic.jpg) |
| BMW Série 3 | Charles from Port Chester, New York | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | [Commons](https://commons.wikimedia.org/wiki/File:BMW_330e_(G20,_2025)_(54727546426).jpg) |
| Porsche 911 Carrera | Alexandre Prevot | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Commons](https://commons.wikimedia.org/wiki/File:Porsche_992_Carrera_(2).jpg) |
| Ford Mustang GT | TaurusEmerald | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Commons](https://commons.wikimedia.org/wiki/File:2024_Ford_Mustang_GT_Las_Vegas_2025.jpg) |
| BMW Z4 | Damian B Oh | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Commons](https://commons.wikimedia.org/wiki/File:BMW_G29_Z4_sDrive20i_San_Francisco_Red_(1).jpg) |
| Porsche 718 Boxster | HJUdall | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | [Commons](https://commons.wikimedia.org/wiki/File:17_Porsche_718_Boxster_Base.jpg) |

## Uso de IA

Usei IA (Claude, da Anthropic) para revisar o código, dar uma polida no design e escrever este README.

## Entrega

O arquivo `integrante.txt`, na raiz do projeto, deve conter o RM, o nome e o link público do repositório.
