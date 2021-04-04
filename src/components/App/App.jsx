import React from 'react'
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
// function App(){
//     return <h1>This is functional component!</h1>
// }
const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state = {
        headerText : "Name It!",
        headerExpanded: true,
        suggestedNames: []
    }
    handleInputChange = (InputText) =>{
        console.log('Input Text -', InputText)
        this.setState({ headerExpanded: !InputText, suggestedNames:InputText ? name(InputText): []})
    }
    render() {
        // console.log(name('uyi'))
        return (
         <div>
             <Header 
             headerExpanded={this.state.headerExpanded}
             headTitle={this.state.headerText} />
             <SearchBox onInputchange={this.handleInputChange} />
             < ResultsContainer suggestedNames = {this.state.suggestedNames
             }/>
             {/* In the above line we are transferring the data from this parent component to Header child component. */}
             {/* <h3 id="see">{this.state.headerText}</h3>
             <button onClick={()=>{
                 this.setState({
                     headerText:"Wooahh, It just changed!"
                 })
             }} className="button">Button</button> */}
         </div>
        )
    }
}

export default App