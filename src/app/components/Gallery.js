"use client";

import { useEffect, useState } from "react";
import { PhotoList } from "./PhotoList";
import Masonry from "masonry-layout";
import { Nexa, NexaBold, Eger } from "./fonts";

export default function Gallery() {
  useEffect(() => {
    const masonry = new Masonry("#gallery", {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
    });

    // Layout Masonry after all images have loaded
    const imgLoadPromises = Array.from(
      document.querySelectorAll("#gallery img")
    ).map(
      (img) =>
        new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        })
    );

    Promise.all(imgLoadPromises).then(() => {
      masonry.layout();
    });

    // Cleanup function
    return () => masonry.destroy();
  }, []);

  const [selectedImage, setSelectedImage] = useState(null); // State to track the clicked image
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOverlayVisible(true);
  };

  // Function to hide the overlay
  const closeOverlay = () => {
    setOverlayVisible(false);
    setSelectedImage(null);
  };

  return (
    <div id="gallery" className={`${Nexa.className}`}>
      <div className="grid-sizer"></div>
      {PhotoList.map((image, index) => (
        <div
          className="grid-item"
          key={index}
          onClick={() => handleImageClick(image)}
        >
          <img src={image.url} alt={`Image ${index + 1}`} />
        </div>
      ))}
      {/* Overlay */}
      {overlayVisible && (
        <div onClick={closeOverlay} className={`overlay ${Nexa.className}`}>
          <button className="close-button" onClick={closeOverlay}>
            X
          </button>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt="Selected" />
            <div className="overlay-content-text">
              <h2 className={`${Eger.className}`}>
                {selectedImage.description}
              </h2>
              <div className="overlay-list">
                <span>{selectedImage.device}</span>
                <span>{selectedImage.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
