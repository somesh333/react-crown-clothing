import React from 'react'

const newCards = () => {
  return (
    <div>
        <div class="w3-card-4">
  <div class="w3-display-container w3-text-white">
    {/* <img src="img_london.jpg" alt="Lights" style="width:100%"> */}
    <div class="w3-xlarge w3-display-bottomleft w3-padding">LONDON 60&deg; F</div>
  </div>
  <div class="w3-row">
    <div class="w3-third w3-center">
      <h3>MON</h3>
      {/* <img src="img_weather_sun.jpg" alt="sun"> */}
    </div>
    <div class="w3-third w3-center">
      <h3>TUE</h3>
      {/* <img src="img_weather_cloud.jpg" alt="cloud"> */}
    </div>
    <div class="w3-third w3-center w3-margin-bottom">
      <h3>WED</h3>
      {/* <img src="img_weather_clouds.jpg" alt="clouds"> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default newCards