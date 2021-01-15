import React, {useState} from 'react'
import PreviewCollection from '../../../Components/menu-item/preview-collections/preview-collections';
import SHOP_DATA from './shop.data';

function Shop() {

    const [collections , setCollections] = useState(SHOP_DATA);
    console.log(collections);

    return (
        <div className="shop-page">
        
            {collections.map(({id , ...otherCollectionProps}) => (<PreviewCollection {...otherCollectionProps}key={id} />))}
        </div>
    )
}

export default Shop
