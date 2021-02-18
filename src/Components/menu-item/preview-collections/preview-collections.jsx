import React from 'react'
import CollectionItem from '../collection-items/collection.item';
import '../preview-collections/preview.styles.scss'

function PreviewCollection({ title , items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
            </div>
        </div>
    );
}

export default PreviewCollection
