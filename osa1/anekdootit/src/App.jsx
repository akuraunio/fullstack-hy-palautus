import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const MostVotesDisplay = (props) => (
  <div>
    <h1>Anecdote with most votes</h1>
    <div>{props.mostVotedAnecdote}</div>
    <div>has {props.votes} votes</div>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const changeQuote = () => {
    const newRandomNumber = Math.floor((Math.random() * anecdotes.length))
    setSelected(newRandomNumber)
  }

  const addVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const mostVotes = () => {
    const maxVotes = Math.max(...points)
    const mostVotedIndex = points.indexOf(maxVotes)
    return mostVotedIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button handleClick={() => addVote()} text="vote" />
      <Button handleClick={() => changeQuote()} text="next anecdote" />
      <MostVotesDisplay mostVotedAnecdote={anecdotes[mostVotes()]} votes={points[mostVotes()]} />
    </div>
  )
}

export default App