'use client'

import { useState, useCallback } from 'react'

export default function Home() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [result, setResult] = useState<number | null>(null)
  const [history, setHistory] = useState<number[]>([])
  const [isAnimating, setIsAnimating] = useState(false)

  const generateNumber = useCallback(() => {
    setIsAnimating(true)
    
    let count = 0
    const interval = setInterval(() => {
      setResult(Math.floor(Math.random() * (max - min + 1)) + min)
      count++
      if (count > 10) {
        clearInterval(interval)
        const final = Math.floor(Math.random() * (max - min + 1)) + min
        setResult(final)
        setHistory(prev => [final, ...prev].slice(0, 10))
        setIsAnimating(false)
      }
    }, 50)
  }, [min, max])

  const copyResult = useCallback(() => {
    if (result !== null) {
      navigator.clipboard.writeText(result.toString())
    }
  }, [result])

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl shadow-lg">🎲</div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Random Number</h1>
                <p className="text-sm text-slate-500">Generator</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-3xl shadow-xl mb-6">🎲</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Random Number Generator</h2>
            <p className="text-lg md:text-xl text-slate-600">Generate random numbers within your custom range. Perfect for games, drawings, and decisions.</p>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Minimum</label>
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(Number(e.target.value))}
                className="input text-center text-lg font-mono"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Maximum</label>
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                className="input text-center text-lg font-mono"
              />
            </div>
          </div>

          <button
            onClick={generateNumber}
            disabled={isAnimating}
            className="w-full btn-primary bg-green-600 hover:bg-green-700 py-4 text-lg mb-6"
          >
            {isAnimating ? '🎲 Generating...' : '🎲 Generate Number'}
          </button>

          {result !== null && (
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-5xl font-bold text-white shadow-xl mb-4">
                {result}
              </div>
              <button
                onClick={copyResult}
                className="block mx-auto text-sm font-medium text-green-600 hover:text-green-700"
              >
                📋 Copy Result
              </button>
            </div>
          )}

          {history.length > 0 && (
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Recent Results</h3>
              <div className="flex flex-wrap gap-2">
                {history.map((num, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 text-slate-700 font-mono font-semibold"
                  >
                    {num}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2024 SmartOK Tools. Free online tools.</p>
        </div>
      </footer>
    </div>
  )
}
