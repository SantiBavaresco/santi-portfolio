import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";

export default function ImageCarousel() {
  useEffect(() => {
    // Initialize the Carousel component
    initTE({ Carousel });
  }, []);

  return (
    <div className="tw-carousel" data-te="Carousel">
      {/* Add your carousel items here */}
      <div className="tw-carousel-item">Item 1</div>
      <div className="tw-carousel-item">Item 2</div>
      <div className="tw-carousel-item">Item 3</div>
    </div>
  );
}
