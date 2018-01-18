import React from 'react';

import Api from '../../Api';

class SquareDeltaForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            number: '',
            result: undefined,
            error: undefined,
        };
    }
    setNumber(event) {
        this.setState({ number: event.target.value });
    }

    isValid(value) {
        return !isNaN(value) && 
            parseInt(Number(value)) == value && 
            !isNaN(parseInt(value, 10));
    }

    getResults(event) {
        event.preventDefault()
        var number = parseInt(this.state.number)
        if (0 >= number || number > 100) {
            this.setState({ 
                error: 'Number must be between 1 & 100' ,
                result: undefined
            });
        } else if (!this.isValid(this.state.number)) {
            this.setState({ 
                error: 'Must be valid integer' ,
                result: undefined
            });
        } else {
            Api.getResult(this.state.number)
                .then((response) => {
                    this.setState({
                        result: response,
                        error: undefined
                    });
                })
                .catch((error) => {
                    this.setState({
                        error: error,
                        result: undefined
                    });
                })
        } 
    }

    render() {
        var numberClass = this.state.error ? 'error' : '';
        return (
            <form>
                <div className="stretched-form">
                    <div>
                        <input className={numberClass}
                               ref="numberInput"
                               id="number-input"
                               type="number"
                               value={this.state.number}
                               autoFocus
                               placeholder="Number"
                               onChange={this.setNumber.bind(this)} />
                               {this.renderError()}
                    </div>
                    <div className="padding-top-44">
                        <button id="get-results-button"
                                className="primary"
                                onClick={this.getResults.bind(this)}>GetResults</button>
                    </div>
                    {this.renderTable()}
                </div>
            </form>
        )
    }
    renderTable() {
        if (this.state.result) {
            return (
                <div className="padding-top-44">
                    <table>
                        <thead>
                            <th>Current Date</th>
                            <th>Number</th>
                            <th>Solution</th>
                            <th>Occurences</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.result.datetime}</td>
                                <td>{this.state.result.number}</td>
                                <td>{this.state.result.value}</td>
                                <td>{this.state.result.occurences}</td>
                            </tr>
                        </tbody>
                    </table>            
                </div>
            )
        }
    }
    renderError(field) {
        var message = this.state.error;
        return (
            <div className="text-error" style={{position: 'absolute', padding: '4px', textAlign: 'left'}}>
                {message}
            </div>
        )
    }
}

export default SquareDeltaForm;
