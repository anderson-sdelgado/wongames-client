import { Meta } from '@storybook/react'

import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default = {
  render: (args: MenuProps) => <Menu {...args} />,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
}
