const convertImagesToWebP = (cloudinaryUrl, options = {}) => {
    if (!cloudinaryUrl) return null;

    const {
        quality = "auto:good",
        width = null,
        height = null,
    } = options;

    // Transformation string বানাও
    let transforms = `f_webp,q_${quality}`;
    if (width) transforms += `,w_${width}`;
    if (height) transforms += `,h_${height}`;

    // URL এ /upload/ এর পরে transformation inject করো
    return cloudinaryUrl.replace(
        "/upload/",
        `/upload/${transforms}/`
    );
};



export default convertImagesToWebP;