/*
 * Home Page. Container for all components
 */
import React from 'react';
import ShadowedCard from '../components/ShadowedCard/ShadowedCard';
import SquareDeltaForm from '../components/SquareDeltaForm/SquareDeltaForm';


import '../assets/square_delta.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="login-content" className="stand-alone-content kitchen-bg">
                <ShadowedCard className="form-card" width={420}>
                    <div className="logo">
                        <h2>Square Delta</h2>
                        <p className="padding-sides-8">Get the difference between the sum of squares and the square of the sum of all numbers from 0 to your selected number</p>
                    </div>
                    <div className="padding-44 padding-top-32">
                        <SquareDeltaForm/>
                    </div>
                </ShadowedCard>
                <div id="airbrush" className="airbrush"/>
            </div>
        )
    }
}
export default Home;
