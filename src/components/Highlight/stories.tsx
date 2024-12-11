import { Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

export const Default = {
  render: (args: HighlightProps) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  ),
  args: {
    title: 'Read Dead it s back',
    subtitle: 'Come see John s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
}

export const withFloatImage = {
  render: (args: HighlightProps) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  ),
  args: {
    title: 'Read Dead it s back',
    subtitle: 'Come see John s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    floatImage: '/img/red-dead-float.png',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
}
