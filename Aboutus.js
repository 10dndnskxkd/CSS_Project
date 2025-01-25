document.addEventListener('DOMContentLoaded', () => {
    const keyAreasContainer = document.getElementById('key-areas');
    const keyAreas = [
        {
            title: 'Waste Management',
            description: 'Innovative strategies for waste reduction, recycling, and circular economy principles.',
            icon: '♻️'
        },
        {
            title: 'Public Health Standards',
            description: 'We shape social norma against littering and smoking in prohibited places, and maintain an effective cleaning regime in public places.',
            icon: '🧽'
        },
        {
            title: 'Vibrant Hawker Culture',
            description: 'We develop and manage hawker centres, offering a wide variety of affordable food in a clean and hygienic environment. NEA also ensures the sustainability of the hawker trade, by facilitating training and skills development for both aspiring and exidting hawkers, and ensuring decent livelihoods of hawkers.',
            icon: '🍽'
        },
        {
            title: 'Safe, Healthy and Conducive Living Environment',
            description: 'We monitor and prevenr air and water pollution, and regulate hazardous substances and toxic industrial waste. To ensure a quality living environment, we use planning and siting of industries, and implement noise management measures. We also safeguard the public, radiation workers, and the environment against the harmful effects of radiation.',
            icon: '🏙'
        },
        {
            title: 'Sustainable and Resource Efficient Singapore',
            description: 'NEA promotes energy efficiency and conservation to improve air quality. We plan, develop and manage the solid waste management system in Singapore, and strive towards a Zero Waste Nation to conserve resources.',
            icon: '💧'
        },
        {
            title: 'Timely and Reliable Weather and Climate Services',
            description: 'NEA provides reliable and responsive weather and climate services, disseminating weather forecasts and hazard warnings in a timely manner and contributing to climate adaptation efforts. View more about this here.',
            icon: '📊'
        }
    ];

    keyAreas.forEach(area => {
        const areaElement = document.createElement('div');
        areaElement.classList.add('area');
        areaElement.innerHTML = `
            <h3>${area.icon} ${area.title}</h3>
            <p>${area.description}</p>
        `;
        keyAreasContainer.appendChild(areaElement);
    });
});