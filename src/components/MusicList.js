import React from 'react';

const MusicList = (props) => {

// const CountrySelector = (props) => {

  const music = props.music.map(music => {
    return <option value={music.name} key={music.name} > {music.name}</option>
  })

  // function handleChange(event){
  //   props.onCountrySelected(event.target.value)
  // }

  return (
    <div>
    <p> Music List</p>


    <p> {music} </p>

    </div>
  )
}

export default MusicList;
