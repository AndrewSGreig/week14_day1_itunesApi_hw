import React from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      selectedCountryAlpha3Code:""
    };
    this.handleCountrySelected = this.handleCountrySelected.bind(this);
  }

  componentDidMount(){
    const url = "https://restcountries.eu/rest/v2/all";

    fetch(url)
    .then(res => res.json())
    .then(countries => this.setState({ countries: countries }))
    .catch(err => console.error)
  }

  handleCountrySelected(alpha3Code){
    this.setState({selectedCountryAlpha3Code: alpha3Code})
  }

  render(){
    const selectedCountry = this.state.countries.find(country => country.alpha3Code === this.state.selectedCountryAlpha3Code)

    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector countries={this.state.countries}
        onCountrySelected={this.handleCountrySelected}/>
        <CountryDetail country={selectedCountry}/>
      </div>
    );
  }
}

export default CountryContainer;
import React from 'react';
import MusicList from '../components/MusicList';
// import MusicDetail from '../components/MusicDetail';

class MusicContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      music: [],
      selectedMusicTitle:""
    };
  }


  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(music => this.setState({ music: music }))
    .catch(err => console.error)
  }

  handleMusicSelected(musicTitle){
    this.setState({selectedMusicTitle: musicTitle})
  }

  render(){
    // const selectedMusic = this.state.music.find(music => music.trackTitle === this.state.selectedMusicTitle)


    return (
      <div>
        <h2>Music Container</h2>
        <MusicList/>

      </div>
    );
  }
}

export default MusicContainer;
