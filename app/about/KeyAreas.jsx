import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const KeyAreas = () => {
  const keyAreas = [
    {
      title: "Waste Management",
      description:
        "Innovative strategies for waste reduction, recycling, and circular economy principles.",
      image: "/waste.jpg", // Unique image for this area
    },
    {
      title: "Public Health Standards",
      description:
        "We shape social norms against littering and smoking in prohibited places, and maintain an effective cleaning regime in public places.",
      image: "/public-health.webp",
    },
    {
      title: "Vibrant Hawker Culture",
      description:
        "We develop and manage hawker centres, offering a wide variety of affordable food in a clean and hygienic environment.",
      image: "/hawker.jpg",
    },
    {
      title: "Safe, Healthy and Conducive Living Environment",
      description:
        "We monitor and prevent air and water pollution, and regulate hazardous substances and toxic industrial waste.",
      image: "/safe-living.jpg",
    },
    {
      title: "Sustainable and Resource Efficient Singapore",
      description:
        "NEA promotes energy efficiency and conservation to improve air quality.",
      image: "/sustainability.png",
    },
    {
      title: "Timely and Reliable Weather and Climate Services",
      description:
        "NEA provides reliable weather forecasts and contributes to climate adaptation efforts.",
      image: "/weather-services.jpeg",
    },
  ];

  // Duplicate the keyAreas to create an infinite effect
  const extendedKeyAreas = [...keyAreas, ...keyAreas];

  const scrollContainerRef = useRef(null);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const containerWidth = scrollContainer.offsetWidth;
    const scrollWidth = scrollContainer.scrollWidth / 2; // Half of the total scroll width
    const speed = 30; // Duration of the scroll in seconds

    const scrollAnimation = () => {
      // Apply the animation in the current direction (default left-to-right)
      scrollContainer.style.transition = `transform ${speed}s linear`;
      scrollContainer.style.transform = `translateX(-${scrollWidth}px)`;

      // When the animation completes, reverse the scroll direction
      setTimeout(() => {
        setIsReversed((prev) => !prev); // Toggle the direction state
        scrollContainer.style.transition = "none"; // Disable transition for reset
        scrollContainer.style.transform = "translateX(0)";
        setTimeout(() => {
          scrollAnimation(); // Restart the scroll animation
        }, 50); // Small delay before restarting
      }, speed * 1000); // Delay for the duration of the scroll animation
    };

    scrollAnimation(); // Start the scroll animation

  }, [isReversed]);

  return (
    <motion.div
      className="key-areas-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ overflow: "hidden", position: "relative" }}
    >
      <motion.div
        className="key-areas"
        ref={scrollContainerRef}
        style={{
          display: "flex",
          width: "max-content", // Ensures that the container is large enough to hold all items
          flexDirection: isReversed ? "row-reverse" : "row", // Change direction based on isReversed state
        }}
      >
        {/* Render all key areas with horizontal scroll */}
        {extendedKeyAreas.map((area, index) => (
          <div
            className="area"
            key={index}
            style={{
              display: "inline-block",
              padding: "0 10px",
              minWidth: "250px", // Adjust width of each item
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            <motion.img
              src={area.image} // Using different images
              alt={area.title}
              className="area-image"
              whileHover={{ scale: 1.07 }}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default KeyAreas;
