import React from 'react';

const MusicDetail = (props) => {
  if(!props.music) return null;
  return (
    <div>
      <h3>
        {props.music.name}
      </h3>
    </div>
  )
}

export default MusicDetail;
//
//
//
//
//
// import React from 'react';
//
// const MusicDetail = (props) => {
//   return (
//     <p>{props}</p>
//     <p> hello from music detail</p>
//
//   )
// }
//
// export default MusicDetail;
