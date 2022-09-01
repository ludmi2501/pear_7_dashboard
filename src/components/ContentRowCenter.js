import React from 'react';
import CategoryInDb from './CategoryInDb';
import NftList from './NftList';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last NFT in DB -->*/}
            <NftList />
            {/*<!-- End content row last nft in Data Base -->*/}

            {/*<!-- Category in DB -->*/}
            <CategoryInDb />

        </div>
    )
}

export default ContentRowCenter;