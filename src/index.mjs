import { buildColumns } from './build-columns.mjs'
import './index.css'
import * as s from './index.module.css'

const grid = [
  {
    sync: true,
    css: 'global',
    use: () => 'main',
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
      return 'lazy'
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

document.addEventListener('DOMContentLoaded', () => {
  for (const row of grid) {
    buildColumns({ jsLoadedSync: true, ...row })
  }

  import('./chunks/lazy.mjs')
})
