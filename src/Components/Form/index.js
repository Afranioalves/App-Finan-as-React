import React, { useState } from 'react'

import * as C from './styles'

const Form = () => {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setExpense] = useState('')

  const handleSave = () => {
    if (!desc || !amount) {
      return
    } else if (amount < 1) {
      alert('O valor tem que set possitivo!')
      return
    }
  }

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Description</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Value</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>

        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Incoming</C.Label>

          <C.Input
            type="radio"
            id="rExpenses"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Outputs</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>Submit</C.Button>
      </C.Container>
    </>
  )
}

export default Form
