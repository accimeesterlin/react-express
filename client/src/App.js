import React from 'react';
import Header from './Header';


// render()

// componentDidMount()

// componentWillMount()


// Render from the server

// Configure it ourself

// Let somebody else configure it themselves




// State

// Components

    // Functional, Dumb,
    // Class, Stateful

// Define


// Connecting React app with Express






// class, smart
class App extends React.Component{

    state = {
        username:'accimeesterlin',
        age:3,
        address:{
            city:'Roswell'
        }
    };


    sendData = (a, b) => {

        console.log(`${a} ${b}`);
    };



    render(){


        // JSX
        return(
            <div>

                <Header/>
                <p>Name: { this.state.username }</p>

                <button onClick={ () => this.sendData(2, 5) }> Click me </button>

                <p>{this.state.username}</p>

            </div>
        );
    }
};

export default App;