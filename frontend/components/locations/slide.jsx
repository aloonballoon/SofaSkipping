import React from 'react'

const Slide = ({ image }) => {
  const url = image.getUrl({maxWidth: 5000, maxHeight: 5000})
  const styles = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}><img src={url}/></div>
}

export default Slide
