import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeAdress = this.onChangeAdress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nom: '',
      age: '',
      adress:''
    }
  }
  onChangeName(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })  
  }
  onChangeAdress(e) {
    this.setState({
      adress: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nom: this.state.nom,
      age: this.state.age,
      adress: this.state.adress
    };
    axios.post('http://localhost:4000/personne/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nom: '',
      age: '',
      adress: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Personne</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nom:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nom}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Age: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.age}
                      onChange={this.onChangeAge}
                      />
                </div>
                <div className="form-group">
                    <label>Adresse: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.adress}
                      onChange={this.onChangeAdress}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Personne" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}