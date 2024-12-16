import { Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner
} as Meta

export const Default = {
  render: (args: BannerProps) => (
    <div
      style={{
        maxWidth: '104rem',
        margin: '0 auto' // Center the banner horizontally
      }}
    >
      <Banner {...args} />
    </div>
  ),
  args: {
    img: 'https://picsum.photos/1042/580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export const WithRibbon = {
  render: (args: BannerProps) => (
    <div
      style={{
        maxWidth: '104rem',
        margin: '0 auto' // Center the banner horizontally
      }}
    >
      <Banner {...args} />
    </div>
  ),
  args: {
    img: 'https://picsum.photos/1042/580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: '20% OFF'
  },
  parameters: {
    layout: 'fullscreen'
  }
}
