import { Suspense } from 'react'
import type { ErrorBoundaryProps } from 'react-native-error-boundary'
import RNErrorBoundary from 'react-native-error-boundary'

import { ErrorFallback } from './ErrorFallback'

type ErrorBoundaryType = Omit<ErrorBoundaryProps, 'FallbackComponent'>

export const ErrorBoundary: React.FC<ErrorBoundaryType> = props => {
  const { children } = props

  return (
    <Suspense>
      <RNErrorBoundary {...props} FallbackComponent={ErrorFallback}>
        {children}
      </RNErrorBoundary>
    </Suspense>
  )
}
