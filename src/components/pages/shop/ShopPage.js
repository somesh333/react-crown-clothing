import React, { Component } from 'react'
import {SHOP_DATA} from'./ShopData.js'
import  CollectionPreview  from '../collections/CollectionPreview.js';

 class ShopPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }


  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({id ,  ...otherCollectionProps}) => (
            < CollectionPreview key= {id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage