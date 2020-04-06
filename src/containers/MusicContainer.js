import React from 'react';
import MusicList from '../components/MusicList';
import MusicDetail from '../components/MusicDetail';

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      music: [],
      selectedMusicName:""
    };
    // this.handleMusicSelected = this.handleMusicSelected.bind(this);
  }

  componentDidMount(){
    // const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(music => this.setState({ music: music }))
    .catch(err => console.error)
  }

  // handleMusicSelected(alpha3Code){
  //   this.setState({selectedMusicAlpha3Code: alpha3Code})
  // }

  render(){
    // const selectedMusic = this.state.music.find(music => music.name === this.state.selectedMusicName)

  // render(){
    return (
      <div>
        <h2>Music Container</h2>
        <MusicList/>
      </div>
    );
  }
}

export default MusicContainer;






// import React from 'react';
// import MusicList from '../components/MusicList';
// // import MusicDetail from '../components/MusicDetail';
//
// class MusicContainer extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       music: [],
//       selectedMusicTitle:""
//     };
//   }
//
//
//   componentDidMount(){
//     const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
//
//     fetch(url)
//     .then(res => res.json())
//     .then(music => this.setState({ music: music }))
//     .catch(err => console.error)
//   }
//
//   handleMusicSelected(musicTitle){
//     this.setState({selectedMusicTitle: musicTitle})
//   }
//
//   render(){
//     // const selectedMusic = this.state.music.find(music => music.trackTitle === this.state.selectedMusicTitle)
//
//
//     return (
//       <div>
//         <h2>Music Container</h2>
//         <MusicList/>
//
//       </div>
//     );
//   }
// }
//
// export default MusicContainer;
