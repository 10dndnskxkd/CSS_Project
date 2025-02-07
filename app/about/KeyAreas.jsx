import { motion } from "framer-motion";

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

  return (
    <motion.div
      className="key-areas"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {keyAreas.map((area, index) => (
        <div className="area" key={index}>
          <motion.img
            src={area.image} // Using different images
            alt={area.title}
            className="area-image"
            whileHover={{ scale: 1.1 }}
          />
          <h3>{area.title}</h3>
          <p>{area.description}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default KeyAreas;
