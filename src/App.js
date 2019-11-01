import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Create from './components/create.component';
// import Edit from './components/edit.component';
// import Index from './components/index.component';

class App extends Component {
  constructor(props){
    super(props);
    this.OnChangeName = this.OnChangeName.bind(this);
    this.OnChangeAge = this.OnChangeAge.bind(this);
    this.OnChangeAdress = this.OnChangeAdress.bind(this);
    this.OnSubmint = this.OnSubmint.bind(this);

    this.state = {
      name: '',
      age: '',
      adress: ''
    }
  }

  OnChangeName(e){
    this.setState({
      name: e.target.value
    });
  } 
  OnChangeAge(e){
    this.setState({
      age: e.target.value
    });
  }
  OnChangeAdress(e){
    this.setState({
      adress: e.target.value
    });
  }
  OnSubmint(e){
    e.preventDefault();
    console.log(`The values are ${this.state.name}, ${this.state.age}, and ${this.state.adress}`)
    this.setState({
      name: '',
      age: '',
      adress: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
              <h3>Ajouter nouveau Personne</h3>
              <form onSubmit={this.OnSubmit}>
                  <div className="form-group">
                      <label>Nom:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.nom}
                        onChange={this.OnChangeName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Age: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.age}
                        onChange={this.OnChangeAdress}
                        />
                  </div>
                  <div className="form-group">
                      <label>Adresse: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.adress}
                        onChange={this.OnChangeAdress}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Business" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
    );
  }
}

export default App;