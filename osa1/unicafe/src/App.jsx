import { useState } from 'react'

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const total_amount = good + neutral + bad
  const total_points = good - bad
  const average_points = total_points / total_amount
  const pos_to_neg_ratio = (good / total_amount) * 100 + " %"

  if (total_amount === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total_amount} />
        <StatisticLine text="average" value={average_points} />
        <StatisticLine text="positive" value={pos_to_neg_ratio} />
      </tbody>
    </table>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => {
    setGood(good + 1)
  }
  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1)
  }
  const increaseBadByOne = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => increaseGoodByOne()} text="good" />
      <Button handleClick={() => increaseNeutralByOne()} text="neutral" />
      <Button handleClick={() => increaseBadByOne()} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
