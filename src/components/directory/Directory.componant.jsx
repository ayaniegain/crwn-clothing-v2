import React from 'react'
import CatagoryItem from "../category-item/Catagory-item.component";

import "./directory.styles.scss";

function Directory({catagories}) {
  return (
    <div className="directory-container">
      {catagories.map((catagory) => (
        <CatagoryItem {...catagory} key={catagory.id} />
      ))}
    </div>
  )
}

export default Directory