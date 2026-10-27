# AutoPrime Import

Sistema web de locação de carros importados. Checkpoint 6 de Web Development, Engenharia de Software, FIAP, turma 1ESPF.

## Tecnologias

- React 19
- Vite 7
- Tailwind CSS 4
- React Router DOM 7

## Como executar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
  components/  Navbar, Footer, Card, ScrollToTop
  pages/       Home, Carros, NaoEncontrada
  data/        catálogo de veículos
  utils/       cálculo de locação e formatação de moeda
  App.jsx      rotas da aplicação
```

## Rotas

| Rota      | Página         |
| --------- | -------------- |
| `/`       | Home           |
| `/carros` | Carros         |
| `*`       | NaoEncontrada  |

## Regra de desconto

| Período         | Desconto |
| --------------- | -------- |
| 1 a 6 dias      | 0%       |
| 7 a 14 dias     | 10%      |
| 15 dias ou mais | 15%      |

## Tarefas

| Branch              | Escopo                                        |
| ------------------- | --------------------------------------------- |
| `feature/navbar`    | Componente Navbar com menu responsivo         |
| `feature/footer`    | Componente Footer                             |
| `feature/card`      | Catálogo, utilitários e componente Card       |
| `feature/home`      | Página Home                                   |
| `feature/carros`    | Página Carros com filtros e simulador         |
| `feature/rotas`     | Rotas no App.jsx, página 404 e scroll ao topo |
| `feature/entrega`   | integrante.txt e documentação                 |
