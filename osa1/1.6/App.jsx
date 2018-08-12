import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      total: 0,
    }
  } // end of constructor

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      total: this.state.total + 1,
    })

  }
  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      total: this.state.total + 1
    })

  }
  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      total: this.state.total + 1
    })

  }

  render() {
    const ka = () => {
      if (this.state.total === 0){
        return 0
      }
      return ((this.state.hyva-this.state.huono)/this.state.total).toFixed(1)
    }

    const pospros = () => {
      if (this.state.total === 0){
        return 0
      }
      return ((this.state.hyva/this.state.total)*100).toFixed(1)
    }

    const statistic = (label, value) => {
      return(
        <tr>
          <td>{label}</td>
          <td>{value}</td>
        </tr>
      )
    }

    const statistiikka = () => {
        if (this.state.total !== 0){
          return(
            <table>
            <tbody>
              {statistic("Hyvä:", this.state.hyva)}
              {statistic("Neutraali:", this.state.neutraali)}
              {statistic("Huono:", this.state.huono)}
              {statistic("Keskiarvo:", ka())}
              {statistic("Positiivisia:", pospros())}
            </tbody>
            </table>
          )
        }else{
          return <p>Palautetta ei ole vielä annettu.</p>
        }
    }

    const button = (funktio, label) => {
      return <button onClick={funktio}>{label}</button>
    }

    return (
      <div> {/*MASTER DIV*/}
        <h1>Anna palautetta: </h1>
          {button(this.klikHyva, "Hyvä")}
          {button (this.klikNeutraali, "Neutraali")}
          {button (this.klikHuono, "Huono")}
        <h1>Statistiikka</h1>
        <div>
          {statistiikka()}
        </div>
      </div> // MASTER DIV
    )
  }
}

export default App;
