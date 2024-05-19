import './index.css';
import * as s from './index.module.css'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('div'))
  el.classList.add(s.main)
})
