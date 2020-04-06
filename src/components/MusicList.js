import React from 'react';

const MusicList = (props) => {
console.log("Hi from the musicList");
  console.log(props);
  if(!props.music) return null
  const options = props.music.map(music => {
    return <option value={music.name} key={music.name} > {music.name}</option>
  })
  console.log("options = "+ options);

  function handleChange(event){
    props.onCountrySelected(event.target.value)
  }

  return (
    <select id="music-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a music...</option>
      {options}
    </select>
  )
}

export default MusicList;




// import React from 'react';
//
// const MusicList = (props) => {
//
// // const musicList = (props) => {
//
//   const music = props.music.map(music => {
//     return <option value={music.name} key={music.name} > {music.name}</option>
//   })
//
//   // function handleChange(event){
//   //   props.onmusicSelected(event.target.value)
//   // }
//
//   return (
//     <div>
//     <p> Music List</p>
//
//
//     <p> {music} </p>
//
//     </div>
//   )
// }
//
// export default MusicList;
