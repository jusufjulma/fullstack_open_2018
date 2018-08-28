import React from 'react'

class App2 extends React.Component {            // declaring as class
  constructor(props) {
    super(props)
    this.state = {
      selected: Math.round(Math.random()*5),    // boring to see same anecdote
      votes: [0, 0, 0, 0, 0, 0],                // array that stores votes
      mostVoted: null                           // explanatory name. Start value
    }                                           // for styling purposes; can't
  }                                             // be zero due to array indexes

  nextAnecdote = () => {                        // switches between anecdotes
    let random = Math.round(Math.random()*5);   // generates new value for select
    while (random === this.state.selected){     // it's pseudorandom anyways
      random = Math.round(Math.random()*5);
    }
    this.setState({                             // applies the new value
      selected: random
    })
  }
  voteAnecdote = () => {              // adds vote to array "votes"
    let vote = [...this.state.votes]  // creates a copy of state array
    vote[this.state.selected]++       // which then gets modified
    this.setState({                   // and overwritten to state
      votes: vote                     // here
    })

    this.winningAnecdote(vote)        // executes the function which
  }                                   // figures out the most voted one
  winningAnecdote = (votearray) => {  // gets the new array as an argument
    let mostVotes = this.state.mostVoted          // checks current state
    for (let i = 0; i < votearray.length; i++) {  //checks every anecdote
      if (votearray[i] > votearray[mostVotes] || mostVotes === null){
        mostVotes = i                 // if value in array is bigger than
      }                               // the value of current iteration value
    }                                 // it updates the value
    this.setState({                   // and then sets it to the correct state
      mostVoted: mostVotes
    })
  }

  render() {                          // render part of app

    const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    const divStyle = {                // couple variables (constants) for styling
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

    const button = (whichFunction, label) => {    // function for buttons
      return <button style={buttonStyle} onClick={whichFunction}>{label}</button>
    }
    const mostVoted = (votes, mostVoted) => {     // function for dipslaying
      if (mostVoted === null) {                   // or not displaying
        return
      }
      return(                                     // the most voted anecdote
        <div>
          <h2>Anecdote with most votes:</h2>
          <p style={anecdoteStyle}>{anecdotes[mostVoted]}</p>
          <p>Has been voted {votes[mostVoted]} times</p>
        </div>
      )                                           // and its vote count
    }

    return (                                      // visible part; creating DOM
      <div style={divStyle}>
          <div>
            <h1>Anekdootit</h1>
            <p style={anecdoteStyle}>
              {anecdotes[this.state.selected]}
            </p>
            <div style={buttonContainer}>
              {button(this.nextAnecdote, "Next anecdote")}
              {button(this.voteAnecdote, "Vote")}
            </div>
          </div>
        <div style={voteScreen}>
          {mostVoted(this.state.votes, this.state.mostVoted)}
        </div>
      </div>
    )
  }
}

export default App2;                               // EOF
