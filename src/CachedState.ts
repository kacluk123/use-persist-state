class Cachedstate {
  state: Map<string, any> = new Map()
  listeners: Map<string, () => void> = new Map()

  pushListener = (key: string) => (fn: () => void) => {
    this.listeners.set(key, fn)
    return () => {
      this.listeners.delete(key)
    }
  }

  setState = (state: any, key: string) => {
    this.state.set(key, state)
    this.listeners.get(key)?.()
  }

  getState = <T extends {}>(key: string) => {
    return this.state.get(key) as T
  }
}

export default Cachedstate