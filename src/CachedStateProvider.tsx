import * as React from 'react'
import Cachedstate from './CachedState'
import { Provider } from './useCachedState'

export const CachedStateProvider = ({ children }: { children: JSX.Element }) => {
  const stateKeeper = React.useRef(new Cachedstate())
  return (
    <Provider value={stateKeeper.current}>
      {children}
    </Provider>
  )
}