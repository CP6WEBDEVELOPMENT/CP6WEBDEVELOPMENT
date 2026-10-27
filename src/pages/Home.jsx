import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { carros } from '../data/carros'

const destaques = carros.filter((carro) => carro.destaque)

const etapas = [
  {
    numero: '01',
    titulo: 'Escolha o carro',
    texto: 'Filtre por categoria, compare preços e simule o valor total da sua locação.',
  },
  {
    numero: '02',
    titulo: 'Defina o período',
    texto: 'A partir de 7 dias você ganha 10% de desconto, e a partir de 15 dias, 15%.',
  },
  {
    numero: '03',
    titulo: 'Retire e aproveite',
    texto: 'Seguro incluso, vistoria digital e entrega no endereço que você preferir.',
  },
]