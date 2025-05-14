import React, { useState } from "react";
import ReactImageUploading from "react-images-uploading";

function Photo() {
    const defaultImage = {
        data_url: "/tangy.png",
    };

    const [image, setImage] = useState([defaultImage]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImage(imageList)
    }

    return <ReactImageUploading
        value={image}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url">
        {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove
        }) => (
            <div className="image-upload">
                {imageList.length === 0 && (
                        <button onClick={onImageUpload}>Upload image</button>
                    )}
                {imageList.length > 0 && (
                    <div className="image-item">
                        <img src={imageList[0]?.data_url} alt="" width="100" />
                        <div>
                            <button onClick={() => onImageUpdate(0)}>Replace</button>
                            <button onClick={() => onImageRemove(0)}>Remove</button>
                        </div>
                    </div>
                )}
            </div>
        )}

    </ReactImageUploading>
}

export { Photo }