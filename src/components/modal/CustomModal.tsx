import type React from 'react'
import type { ViewProps } from 'react-native'
import { Modal, View } from 'react-native'

import clsx from 'clsx'

import { Column } from '../ui/Column'

interface CustomModalInterface extends ViewProps {
  showModal: boolean
  defaultPadding?: boolean
  transparent?: boolean
  hideBG?: boolean
}

export const CustomModal: React.FC<CustomModalInterface> = ({
  children,
  showModal = false,
  defaultPadding = false,
  transparent = false,
  hideBG = false,
  ...props
}) => {
  const standardClasses = defaultPadding ? 'px-[26] py-[40] m-4' : undefined

  const className = clsx('items-center rounded-lg', standardClasses, !hideBG && 'bg-white')

  return (
    <Modal className="flex-1" animationType="slide" transparent={true} visible={showModal}>
      <View className={clsx('flex justify-center flex-1', transparent ? undefined : 'bg-transparent')}>
        <Column {...props} className={className}>
          {children}
        </Column>
      </View>
    </Modal>
  )
}
