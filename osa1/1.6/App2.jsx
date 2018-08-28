import React from 'react'

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: Math.round(Math.random()*5),
      votes: [0, 0, 0, 0, 0, 0],
      mostVoted: null
    }
  }

  nextAnecdote = () => {
    let random = Math.round(Math.random()*5);
    while (random === this.state.selected){     // it's pseudorandom anyways
      random = Math.round(Math.random()*5);
    }
    this.setState({
      selected: random
    })
  }
  voteAnecdote = (asd) => {

    let vote = [...this.state.votes]  // creates a copy of state array
    vote[this.state.selected]++       // which then gets modified
    this.setState({                   // and overwritten to state
      votes: vote                     // here
    })

    this.winningAnecdote(vote)     // executes the function which
  }                                // figures out the most voted one
  winningAnecdote = (votearray) => {
    let mostVotes = this.state.mostVoted
    for (let i = 0; i < votearray.length; i++) {
      if (votearray[i] > votearray[mostVotes] || mostVotes === null){
        mostVotes = i
      }
    }
    this.setState({
      mostVoted: mostVotes
    })

  }

  render() {

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
      width: "300px"
    }
    const anecdoteStyle = {
      fontStyle: "italic",
      border: "dashed 5px #333",
      backgroundColor: "#fafafa",
      padding: "2rem 2rem 2rem 2rem",
      width: "300px"
    }
    const buttonStyle = {
      fontSize: "100%",
      width: "8rem",
      display: "inline",
      margin: "0rem 0.2rem 0rem 0.5rem"
    }
    const buttonContainer = {
      position: "fixed",
      top: "300px"
    }
    const voteScreen = {
      position: "fixed",
      top: "320px"
    }

    const button = (whichFunction, label) => {
      return <button style={buttonStyle} onClick={whichFunction}>{label}</button>
    }
    const mostVoted = (votes, mostVoted) => {
      if (mostVoted === null) {
        return
      }
      return(
        <div>
          <h2>Anecdote with most votes:</h2>
          <p style={anecdoteStyle}>{anecdotes[mostVoted]}</p>
          <p>Has been voted {votes[mostVoted]} times</p>
        </div>
      )
    }

    return (
      <div style={divStyle}>
          <div>
            <h1>Anekdootit</h1>
            <p style={anecdoteStyle}>
              {anecdotes[this.state.selected]}
            </p>
            <div style={buttonContainer}>
              {button(this.nextAnecdote, "Next anecdote")}
              {button(this.voteAnecdote, "Vote")}
              {/* {button(this.winningAnecdote, "WHO WINS")} */}
            </div>
          </div>
        <div style={voteScreen}>
          {mostVoted(this.state.votes, this.state.mostVoted)}
        </div>
      </div>
    )
  }
}

export default App2;
