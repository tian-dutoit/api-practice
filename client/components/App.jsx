import React from 'react'
import Urban from './Urban'
import request from 'superagent'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      urbanInput: '',
      urbanOutput: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.getUrban = this.getUrban.bind(this)
    
  }


  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
      
    })
  }

    getUrban(evt){
      request
      .get("https://mashape-community-urban-dictionary.p.mashape.com/define?term=" + this.state.urbanInput)
      .set("X-Mashape-Key", "8mp3BF3rHCmshLXgDyFDzUYvkrkfp1FPmV9jsn2HyOdlTm5l8X")
      .set("Accept", "text/plain")
      .then((res) => {
        this.setState({
        urbanOutput: res.body.list
        })
      })
};
    

  render() {
    return  (
      <div>
      <form>
        <input name='urbanInput' onChange={this.handleChange}/>
        <br/>
        <button type='button' onClick={this.getUrban}>Press me</button>
        </form>
      {this.state.urbanOutput && <Urban urbanOutput={this.state.urbanOutput} />}
      </div>
    )
  }
}


export default App

