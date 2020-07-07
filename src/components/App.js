import React from 'react'
import Axios from 'axios'
import SearchBar from "./SearchBar"
import ImageList from "./imageList"
class App extends React.Component{
  state = {images:[]};

 onSearchSubmit=   async (term)=>{
  const response = await Axios.get('https://api.unsplash.com/search/photos',{
    params:{query:term},
    headers:{
      Authorization:
      'Client-ID 2BhtbPxTlbYRL6dQKB-s3AlKiZrOYedUGoQuAw6PRjo'
    }

  })
    this.setState({images : response.data.results});

  }
render(){
  return (
      <div className = "ui container" style = {{marginTop:'15px'}}>
<SearchBar onSubmit={this.onSearchSubmit}/>
<ImageList images={this.state.images} />  Found:{this.state.images.length}</div>
)
}
}
export default App;
