import React from 'react'

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 2
    }
  }

  nextAnecdote = () => {
    let random = Math.round(Math.random()*5);
    this.setState({
      selected: random
    })
  }
  voteAnecdote = (asd) => {

    // votecopy[this.state.selected] += 1;

    console.log(this.state.selected)
    console.log(asd)

// array, jossa kuusi alkiota; aina kun painetaan "vote",
// anekdoottia vastaavan indexin alkiota kasvatetaan yhdell


  }

  render() {
    // const votings = [0, 0, 0, 0, 0, 0];
    // const votecopy = [...votings];
    //
    const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    const divStyle = {
      position: "absolute",
      top: "0px",
      left: "300px",
      width: "300px",
      padding: "0 2rem 2rem 2rem",
      border: "dashed 5px black"
    }
    const anecdoteStyle = {
      fontStyle: "italic"
    }
    const buttonStyle = {
      position: "absolute",
      top: "250px"
    }
    const button = (whichFunction, label) => {
      return <button onClick={whichFunction}>{label}</button>
    }

    return (
      <div style={divStyle}>
        <h1>Anekdootit</h1>
        <p style={anecdoteStyle}>
          {anecdotes[this.state.selected]}
        </p>
        <div style={buttonStyle}>
          {button(this.nextAnecdote, "Next anecdote")}
          {button(this.voteAnecdote, "Vote")}
        </div>
      </div>
    )
  }
}

export default App2;
