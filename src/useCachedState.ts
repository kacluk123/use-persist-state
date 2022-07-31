import * as React from 'react'
import Cachedstate from './CachedState'

type SetStateAction<S> = S | ((prevState: S) => S);
type useCachedStateReturnValue<T> = [T, (value: SetStateAction<T>) => void]
export const CachedStateContext = React.createContext<Cachedstate>({} as Cachedstate)
export const Provider = CachedStateContext.Provider

export function useCachedState<T>(value: T, key: string): useCachedStateReturnValue<T> {
  const cachedState = React.useContext(CachedStateContext)
  
  React.useEffect(() => {
    if (!cachedState.state.get(key)) {
      cachedState.state.set(key, value)
    }
  }, [])
  
  const setState = (val: SetStateAction<T>) => {
    if (typeof val === 'function') {
      const cb = val as ((prevState: T) => T)
      cachedState.setState(cb(cachedState.state.get(key)), key)
    } else {
      cachedState.setState(val, key)
    }
  }

  return [
    React.useSyncExternalStore(
      cachedState.pushListener(key),
      () => (cachedState.getState<T>(key))
    ),
    setState
  ]
}

