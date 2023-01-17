import React from 'react'

const sidebar = () => {
  return (
    <>
    <div class="w3-sidebar w3-bar-block w3-light-grey w3-card" style="width:30%">
  <a href="#" class="w3-bar-item w3-button">Link 1</a> 
  <a href="#" class="w3-bar-item w3-button">Link 2</a> 
  <div class="w3-dropdown-hover">
    <button class="w3-button">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="w3-dropdown-content w3-bar-block">
      <a href="#" class="w3-bar-item w3-button">Link</a>
      <a href="#" class="w3-bar-item w3-button">Link</a>
    </div>
  </div> 
  <a href="#" class="w3-bar-item w3-button">Link 3</a> 
</div>

<div style="margin-left:30%">

<div class="w3-container">
<h2>Dropdown in Sidebar</h2>
<p>In this example, we have added a dropdown menu inside the sidebar.</p>
<p>Notice the caret-down icon, which we use to indicate that this is a dropdown menu.</p>
</div>

</div>
    </>
  )
}

export default sidebar