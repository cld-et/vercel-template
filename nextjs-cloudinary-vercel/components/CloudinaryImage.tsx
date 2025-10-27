import { CloudinaryImage } from 'next-cloudinary';

const CloudinaryImageComponent = () => {
    return (
        <CloudinaryImage
            cloudName="demo"
            publicId="sample"
            alt="Sample Image"
            width="500"
            height="500"
            quality="auto"
            fetchFormat="auto"
        />
    );
};

export default CloudinaryImageComponent;