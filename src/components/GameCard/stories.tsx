import { Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard
} as Meta

export const Default = {
  render: (args: GameCardProps) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  ),
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://picsum.photos/300/140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  }
}

export const WithRibbon = {
  render: (args: GameCardProps) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  ),
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://picsum.photos/300/140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
    ribbon: '20% OFF',
    ribbonSize: 'small',
    ribbonColor: 'primary'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  }
}
