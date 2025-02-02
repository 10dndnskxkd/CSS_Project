import './styles.css';

export default function AboutPage() {
  return (
    <div className="page-container">
      <header className="header">
        <h1>National Environment Agency (NEA)</h1>
        <p>Pioneering Environmental Sustainability in Singapore</p>
      </header>

      <div className="content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            The National Environment Agency (NEA) is the leading public organisation responsible for ensuring a clean and sustainable environment for Singapore. We aim to improve and sustain a clean environment, promote sustainability and resource efficiency, maintain high public health standards, provide timely and reliable meteorological information, and encourage a vibrant hawker culture.
          </p>
        </section>

        <div className="key-areas" id="key-areas"></div>

        <div className="about-us">
          <div className="key-areas-container">
            <div className="key-areas">
              <div className="area">
                <div className="icon">♻️</div>
                <h3>Waste Management</h3>
                <p>Innovative strategies for waste reduction, recycling, and circular economy principles.</p>
              </div>
              <div className="area">
                <div className="icon">🧽</div>
                <h3>Public Health Standards</h3>
                <p>We shape social norms against littering and smoking in prohibited places, and maintain an effective cleaning regime in public places.</p>
              </div>
              <div className="area">
                <div className="icon">🍽</div>
                <h3>Vibrant Hawker Culture</h3>
                <p>We develop and manage hawker centres, offering a wide variety of affordable food in a clean and hygienic environment. NEA also ensures the sustainability of the hawker trade, by facilitating training and skills development for both aspiring and existing hawkers, and ensuring decent livelihoods for hawkers.</p>
              </div>
              <div className="area">
                <div className="icon">🏙</div>
                <h3>Safe, Healthy and Conducive Living Environment</h3>
                <p>We monitor and prevent air and water pollution, and regulate hazardous substances and toxic industrial waste. To ensure a quality living environment, we use planning and siting of industries, and implement noise management measures. We also safeguard the public, radiation workers, and the environment against the harmful effects of radiation.</p>
              </div>
              <div className="area">
                <div className="icon">💧</div>
                <h3>Sustainable and Resource Efficient Singapore</h3>
                <p>NEA promotes energy efficiency and conservation to improve air quality. We plan, develop and manage the solid waste management system in Singapore, and strive towards a Zero Waste Nation to conserve resources.</p>
              </div>
              <div className="area">
                <div className="icon">📊</div>
                <h3>Timely and Reliable Weather and Climate Services</h3>
                <p>NEA provides reliable and responsive weather and climate services, disseminating weather forecasts and hazard warnings in a timely manner and contributing to climate adaptation efforts. View more about this here.</p>
              </div>
            </div>
          </div>

          <section className="additional-info">
            <h2>Our Comprehensive Approach</h2>
            <p>
              NEA works closely with its partners and the community to develop environmental and public health initiatives and programmes. We are committed to motivating every individual to care for the environment as a way of life, building a liveable and sustainable Singapore for present and future generations.
            </p>
          </section>
        </div>

        <div>
          <h2>Find out more here!</h2>
          <video width="500" height="400" controls>
            <source src="https://youtu.be/Noi3zog1quA" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <footer className="footer">
          <p>© 2024 National Environment Agency, Singapore</p>
        </footer>
      </div>

      <script src="/aboutus.js"></script>
    </div>
  );
}
