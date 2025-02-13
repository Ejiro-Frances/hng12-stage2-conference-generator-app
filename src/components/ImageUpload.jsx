import { useState } from "react";

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file!");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file!");
    }
  };

  return (
    <div className="upload-box" onDragOver={handleDragOver} onDrop={handleDrop}>
      <input
        type="file"
        id="file-upload"
        hidden
        accept="image/*"
        onChange={handleFileChange}
        className="img-upload-input"
      />
      <label htmlFor="file-upload" className="upload-area">
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="image-preview" />
        ) : (
          <div>
            <img src="../assets/cloud-icon" alt="" />

            <p className="drag-text">Drag & drop or click to upload</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;
