import { Meta } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'

const items = [
  {
    img: 'https://picsum.photos/1042/580?v=1',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://picsum.photos/1042/580?v=2',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://picsum.photos/1042/580?v=3',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider
} as Meta

export const Default = {
  render: (args: BannerSliderProps) => (
    <div
      style={{
        maxWidth: '130rem',
        margin: '0 auto' // Center the banner horizontally
      }}
    >
      <BannerSlider {...args} />
    </div>
  ),
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
}
