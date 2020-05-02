import React, { Component } from 'react';
import Comp from './Component1/Component1'
import Val from './ValidationComponent/ValidationComponent'
import Char from './CharComponent/CharComponent'

import './App.css';

class App extends Component{
  state = {
    datalen : 0,
    charlist:[]
  }
 showLengthHandler = (event) => {
      let data =event.target.value
        data=data.split(" ")
        data=data.join("")
      let len=data.length
      let char=data.substr(len-1)
      let element={id:len,char: char}
      let charlist=[...this.state.charlist]
      console.log("New Length::",len,element)
      if (this.state.datalen>len){
        console.log("before::removing::",charlist)
        
        charlist.pop()
        console.log("after::pop",charlist)
        this.setState({
          datalen : charlist.length,
          charlist: charlist
        })
      }else {
        console.log("before::pushing::",this.state.datalen,this.state.charlist)
        charlist.push(element)
        console.log("check::",charlist)
        this.setState({
          datalen: len,
          charlist: charlist
        })
      }
      
      
        


  //  let data = event.target.value
  //  let len = data.length
  //  if (data.charAt(data.length-1)!==" " && this.state.datalen<len){
  //  data=data.split(" ")
  //  data=data.join("")
  //  len = data.length
  //  let element= {
  //    char : data.substr(len-1),
  //    id : len
  //  }
  //  let charlist=[...this.state.charlist]
  //  charlist.push(element)
  //  this.setState({
  //    datalen: len,
  //    charlist: charlist
  //  })
  // }
  }

  deleteCharHandler = (event,id) => {
    const charIndex = this.state.charlist.findIndex(p=>{
      return p.id===id;
    }) 
   this.state.charlist.splice(charIndex,1)
    this.setState(
      {
        charlist: this.state.charlist,
      }
    )
  }

  render(){

    let setChar = null;
      console.log("creating::",this.state.charlist)
      if (this.state.charlist.length>0) {

        setChar = (
          <div>
            {this.state.charlist.map((char, index ) => {
              return <Char 
                      char={char.char}
                      key={char.id}
                      delete={(event)=>this.deleteCharHandler(event,char.id)}
                       />
            })}
        </div> 
        )
      }


    return (
      <div className='App'>
        <Comp data={this.state.datalen} change={(event)=>this.showLengthHandler(event)}/>
        <Val data={this.state.datalen}/>
        {setChar}
      </div>
    )
  }
}

export default App;
