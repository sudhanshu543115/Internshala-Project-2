import React, { useState, useRef } from "react";

const GalleryWidget = () => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prev) => [...prev, imageUrl]);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="header-left">
          <div className="header-icon"><span>▦</span></div>
          <h2 className="badge">Gallery</h2>
        </div>

        <div className="gallery-actions">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <button className="btn" onClick={handleAddImage}>+ ADD IMAGE</button>
          <button aria-label="prev" className="icon-btn">←</button>
          <button aria-label="next" className="icon-btn">→</button>
        </div>
      </div>

      {images.length === 0 ? (
        <div className="empty">No images uploaded yet</div>
      ) : (
        <div className="gallery-row">
          {images.map((image, index) => (
            <div className="tile" key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryWidget;
