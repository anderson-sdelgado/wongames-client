import { Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now'
  }
}

export const withIcon = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now',
    icon: <AddShoppingCart />
  }
}

export const asLink = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    size: 'large',
    children: 'Buy now',
    as: 'a',
    href: '/link'
  }
}
