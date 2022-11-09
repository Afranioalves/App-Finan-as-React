import React, { useState } from 'react'

import * as C from './styles'

const Form = ({ hadleAdd }) => {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setExpense] = useState('')

  const genereteID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      return
    } else if (amount < 1) {
      alert('O valor tem que set possitivo!')
      return
    }

    const transaction = {
      id: genereteID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    hadleAdd(transaction);

    setDesc("");
    setAmount("");
  };

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
