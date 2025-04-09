
const ImageShow = ({image}) => {
    return (
        <div>
            <img src ={image.urls.small} alr={image.alt_description} />
        </div>
    )
}

export default ImageShow