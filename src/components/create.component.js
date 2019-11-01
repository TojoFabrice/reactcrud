import React, { Component } from 'react';

class Create extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form>
                    <div className="form-group">
                        <label>Nom:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Adresse: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Create;