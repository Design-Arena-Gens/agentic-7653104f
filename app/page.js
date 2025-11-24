'use client'

import { useState } from 'react'

export default function Home() {
  const [billAmount, setBillAmount] = useState('')
  const [tipPercent, setTipPercent] = useState(15)
  const [splitCount, setSplitCount] = useState(1)

  const bill = parseFloat(billAmount) || 0
  const tipAmount = bill * (tipPercent / 100)
  const total = bill + tipAmount
  const perPerson = total / splitCount

  const presetTips = [10, 15, 18, 20, 25]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          margin: '0 0 10px 0',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}>
          ⚡ Blitzitip
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#666',
          marginTop: 0,
          marginBottom: '30px'
        }}>
          Lightning-fast tip calculator
        </p>

        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#333'
          }}>
            Bill Amount
          </label>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.5rem',
              color: '#667eea'
            }}>$</span>
            <input
              type="number"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              placeholder="0.00"
              style={{
                width: '100%',
                padding: '15px 15px 15px 35px',
                fontSize: '1.5rem',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#333'
          }}>
            Tip Percentage: {tipPercent}%
          </label>
          <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '15px'
          }}>
            {presetTips.map(percent => (
              <button
                key={percent}
                onClick={() => setTipPercent(percent)}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: tipPercent === percent ? '2px solid #667eea' : '2px solid #e0e0e0',
                  background: tipPercent === percent ? '#667eea' : 'white',
                  color: tipPercent === percent ? 'white' : '#333',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (tipPercent !== percent) {
                    e.target.style.borderColor = '#667eea'
                  }
                }}
                onMouseLeave={(e) => {
                  if (tipPercent !== percent) {
                    e.target.style.borderColor = '#e0e0e0'
                  }
                }}
              >
                {percent}%
              </button>
            ))}
          </div>
          <input
            type="range"
            min="0"
            max="50"
            value={tipPercent}
            onChange={(e) => setTipPercent(parseInt(e.target.value))}
            style={{
              width: '100%',
              height: '8px',
              borderRadius: '5px',
              background: '#e0e0e0',
              outline: 'none',
              cursor: 'pointer'
            }}
          />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#333'
          }}>
            Split Between: {splitCount} {splitCount === 1 ? 'person' : 'people'}
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={splitCount}
            onChange={(e) => setSplitCount(parseInt(e.target.value))}
            style={{
              width: '100%',
              height: '8px',
              borderRadius: '5px',
              background: '#e0e0e0',
              outline: 'none',
              cursor: 'pointer'
            }}
          />
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '15px',
          padding: '25px',
          color: 'white'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <span>Tip Amount:</span>
            <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
              ${tipAmount.toFixed(2)}
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <span>Total:</span>
            <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
              ${total.toFixed(2)}
            </span>
          </div>
          <div style={{
            borderTop: '2px solid rgba(255,255,255,0.3)',
            paddingTop: '12px',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>Per Person:</span>
            <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>
              ${perPerson.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
