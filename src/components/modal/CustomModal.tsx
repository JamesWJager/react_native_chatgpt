import type React from 'react'
import type { GestureResponderEvent, ViewProps } from 'react-native'
import { Modal, TouchableOpacity } from 'react-native'

import clsx from 'clsx'

import { Column } from '../ui/Column'

import { View } from '~components/ui/View'

interface CustomModalInterface extends ViewProps {
  showModal: boolean
  defaultPadding?: boolean
  transparent?: boolean
  hideBG?: boolean
  onPressOut?: ((event: GestureResponderEvent) => void) | undefined
}

export const CustomModal: React.FC<CustomModalInterface> = ({
  children,
  showModal = false,
  defaultPadding = false,
  transparent = false,
  hideBG = false,
  onPressOut = () => null,
  ...props
}) => {
  const standardClasses = defaultPadding ? 'px-[26] py-[40] m-4' : undefined

  const className = clsx('items-center rounded-lg', standardClasses, !hideBG && 'bg-white')
  return (
    <Modal className="flex-1 relative" animationType="slide" transparent={true} visible={showModal}>
      <View className="flex-1 absolute bg-black opacity-50 h-full w-full" />
      <TouchableOpacity
        className={clsx('flex justify-center flex-1', transparent ? 'bg-transparent' : undefined)}
        activeOpacity={1}
        onPressOut={onPressOut}>
        <Column {...props} className={className}>
          {children}
        </Column>
      </TouchableOpacity>
    </Modal>
  )
}
