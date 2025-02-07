import { motion } from "framer-motion";

const KeyAreas = () => {
  const keyAreas = [
    {
      title: "Waste Management",
      description:
        "Innovative strategies for waste reduction, recycling, and circular economy principles.",
      icon: "♻️",
    },
    {
      title: "Public Health Standards",
      description:
        "We shape social norms against littering and smoking in prohibited places, and maintain an effective cleaning regime in public places.",
      icon: "🧽",
    },
    {
      title: "Vibrant Hawker Culture",
      description:
        "We develop and manage hawker centres, offering a wide variety of affordable food in a clean and hygienic environment. NEA also ensures the sustainability of the hawker trade, by facilitating training and skills development for both aspiring and existing hawkers, and ensuring decent livelihoods for hawkers.",
      icon: "🍽",
    },
    {
      title: "Safe, Healthy and Conducive Living Environment",
      description:
        "We monitor and prevent air and water pollution, and regulate hazardous substances and toxic industrial waste. To ensure a quality living environment, we use planning and siting of industries, and implement noise management measures. We also safeguard the public, radiation workers, and the environment against the harmful effects of radiation.",
      icon: "🏙",
    },
    {
      title: "Sustainable and Resource Efficient Singapore",
      description:
        "NEA promotes energy efficiency and conservation to improve air quality. We plan, develop and manage the solid waste management system in Singapore, and strive towards a Zero Waste Nation to conserve resources.",
      icon: "💧",
    },
    {
      title: "Timely and Reliable Weather and Climate Services",
      description:
        "NEA provides reliable and responsive weather and climate services, disseminating weather forecasts and hazard warnings in a timely manner and contributing to climate adaptation efforts.",
      icon: "📊",
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
            src="/background.jpg"
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