import React from 'react';

export const PasswordStr = () => {
  var strColor;
  var strWidth;

 
  var style = { backgroundColor: strColor, height: '5px', width: strWidth, transition: 'all 300ms ease-in-out' }

  return (
  <div>
    <p className="pwStrWeak">weak</p>
    <p className="pwStrStrong">strong</p>
    <div style={style} />
  </div> 
  );

}
