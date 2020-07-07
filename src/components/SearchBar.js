import React from "react"
import Tgcircleshar from './Tgcircleshar.png'
class SearchBar extends React.Component{

// onInputChange(event){
// // const abc=  event.target.value;
// //     <div>{abc}</div>
// }
state ={term:''};

onFormSubmit=(event)=>{
  event.preventDefault()
this.props.onSubmit(this.state.term)


}


  render(){
    return (

      <div className="ui raised segment">
      <h2 class="ui red center aligned icon header">
        <i class="icon"> <img src={Tgcircleshar} /></i>
        Imageopedia
      </h2>
      <form className='ui form' onSubmit={this.onFormSubmit}>
      <div className = "field">
      <label className = "ui teal ribbon label" style={{marginBottom:'14px' , marginRight:'100px'}}><b>Image Search</b>    <i>(press enter key after entering text)</i></label>
      <input type = "text"

      value = {this.state.term}
      onChange={(e)=>this.setState({term:e.target.value})}/>
      <button class="ui labeled icon button" type='submit' style={{marginTop:'14px'}}>
  <i class="search icon"></i>
  Search
</button>

</div>

      </form>

      </div>);
  }
}
export default SearchBar;
