import React from 'react';
import { MEDIA_ASSET_URL } from '../Utils/mockdata';

const WhatsOnYourMind = (props) => {
    // const {text} =props?.fooditem?.action;
    const {imageId}=props?.fooditem;
    return (
        <div className='min-w-[144px] min-h-[230px] '>
            <img width={144} height={180} src={MEDIA_ASSET_URL + imageId}/>
        </div>
    )
}

export default WhatsOnYourMind;