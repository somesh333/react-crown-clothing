import React from 'react'

const categori = () => {
  return (
    <div>
        <div class="w3-container w3-content">
<h1>Categories</h1>
<div id="Form01" class="w3-container w3-light-grey w3-padding-large w3-margin-bottom" appml-data="appml.php?model=model_categoriesform" appml-controller="myFormController" style="display:none;">
  <div appml-include-html="inc_formcommands.htm"></div>
  <p>
    <label>CategoryName:</label>
    {/* <input id="CategoryName" class="w3-input w3-border"> */}
  </p>
  <p>
    <label>Description:</label>
    {/* <input id="Description" class="w3-input w3-border"> */}
  </p>
</div>

<div appml-data="appml.php?model=model_categorieslist">
<div appml-include-html="inc_listcommands_nofilter.htm"></div>
<table class="w3-table-all">
  <tr>
    <th></th>
    <th>Category</th>
    <th>Description</th>
  </tr>
  <tr appml-repeat="records">
    <td style="cursor:pointer" onclick="appml('Form01').run({{CategoryID}})">&#9998;</td>
    <td>{{CategoryName}}</td>
    <td>{{Description}}</td>
  </tr>
</table>
</div>
</div>
    </div>
  )
}

export default categori