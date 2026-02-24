'use client'
import {useState} from 'react'
import styles from './page.module.css'

export default function Home() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [count, setCount] = useState(1)
  const [results, setResults] = useState<number[]>([])

  const generate = () => {
    const nums: number[] = []
    for (let i = 0; i < count; i++) {
      nums.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    setResults(nums)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎲 Random Number Generator</h1>
      
      <div className={styles.controls}>
        <div>
          <label>Min</label>
          <input type="number" value={min} onChange={e => setMin(parseInt(e.target.value) || 0)} />
        </div>
        <div>
          <label>Max</label>
          <input type="number" value={max} onChange={e => setMax(parseInt(e.target.value) || 0)} />
        </div>
        <div>
          <label>Count</label>
          <input type="number" value={count} onChange={e => setCount(parseInt(e.target.value) || 1)} min="1" max="100" />
        </div>
      </div>

      <button onClick={generate} className={styles.btn}>Generate</button>

      {results.length > 0 && (
        <div className={styles.results}>
          {results.map((num, i) => (
            <div key={i} className={styles.number}>{num}</div>
          ))}
        </div>
      )}
    </div>
  )
}