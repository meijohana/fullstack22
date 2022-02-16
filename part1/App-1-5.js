import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.ex}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1.name} ex={props.part1.exercises}></Part>
      <Part part={props.part2.name} ex={props.part2.exercises}></Part>
      <Part part={props.part3.name} ex={props.part3.exercises}></Part>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}>
      </Header>
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}>
      </Content>
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}>
      </Total>
    </div>
  )
}

export default App