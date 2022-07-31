# React Persist State

Library for caching state

# Usage
Provider:
```
import { PersitStateProvider } from 'use-persist-state'

function Index() {
  return (
    <PersitStateProvider>
      <App />
    </PersitStateProvider>
  );
}
```

In component:
```
import * as React from 'react'
import { usePersistState } from 'use-persist-state'

const Dashboard = () => {
  const [count, setCount] = usePersistState(0, "dashboard")
 
  const upCount = () => {
    setCount(count => count + 1)
  }

  return (
    <div>
      Dashboard {count}
      <button onClick={upCount}>
        +
      </button>
    </div>
  )
}

```
