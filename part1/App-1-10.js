import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return(
  <p>{props.text}{props.content}</p>
  )
}

const Statistics = (props) => {

  const average = (props.good - props.bad) / props.clicks;

  const positive = props.good / props.clicks;

  if (props.clicks == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
  <div>
    <StatisticLine text={"good "} content={props.good}></StatisticLine>
    <StatisticLine text={"neutral "} content={props.neutral}></StatisticLine>
    <StatisticLine text={"bad "} content={props.bad}></StatisticLine>
    <StatisticLine text={"all "} content={props.clicks}></StatisticLine>
    <StatisticLine text={"average "} content={average}></StatisticLine>
    <StatisticLine text={"positive "} content={positive}></StatisticLine>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    console.log('new')
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
  }

  console.log('ok')

  const allClicks =  good + bad + neutral;


  return (
    <div>
      <h1>give feedback</h1>
      <div>
      <Button handleClick={increaseGood} text={"good"}></Button>
      <Button handleClick={increaseNeutral} text={"neutral"}></Button>
      <Button handleClick={increaseBad} text={"bad"}></Button>
      </div>
      <div>
      <h1>statistics</h1>
      <Statistics clicks={allClicks} good={good} neutral={neutral} bad={bad}>
      </Statistics>
      </div>
    </div>
  )
}

export default App