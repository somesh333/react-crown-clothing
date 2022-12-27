import React from 'react'
import './CollectionPreview.scss'
import CollectionItems from '../../collectionItem/CollectionItems'


const collectionPreview = ({title, items }) => {
  return (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item ,idx) => idx < 4)
            .map(({id , ...otherItemProps}) => (
                <CollectionItems key={id} {...otherItemProps } />
            ))}
        </div>
         </div>
  )
}

export default collectionPreview