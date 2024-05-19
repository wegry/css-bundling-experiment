import { buildColumns } from '../build-columns.mjs'
import './sync.css'
import * as s from './sync.module.css'

const grid = [
  {
    sync: true,
    css: 'global',
    use: () => 'chunkGlobal',
  },
  {
    sync: true,
    css: 'local',
    use: () => s.main,
  },
  {
    sync: false,
    css: 'global',
    use: async () => {
      await import('./lazy.css', { with: { type: 'css' } })
      return 'chunkLazyGlobal'
    },
  },
  {
    sync: false,
    css: 'local',
    use: async () => {
      const classes = await import('./lazy.module.css', {
        with: { type: 'css' },
      })
      return classes.main
    },
  },
]

for (const row of grid) {
  buildColumns({ jsLoadedSync: false, ...row })
}
