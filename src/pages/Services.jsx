import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Fine Dining",
      description: "Experience our exquisite tasting menus in an elegant atmosphere",
      price: "From $75 per person",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["5-course tasting menu", "Wine pairing available", "Private dining options"]
    },
    {
      id: 2,
      title: "Private Events",
      description: "Host your special occasions in our beautifully designed private spaces",
      price: "Custom pricing",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Custom menu planning", "Dedicated event coordinator", "Flexible seating arrangements"]
    },
    {
      id: 3,
      title: "Catering",
      description: "Bring our culinary excellence to your location with our catering services",
      price: "From $35 per person",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["On-site cooking", "Full service staff", "Custom menu options"]
    },
    {
      id: 4,
      title: "Cooking Classes",
      description: "Learn from our master chefs in interactive cooking workshops",
      price: "$120 per session",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Small group sizes", "Hands-on experience", "Recipes to take home"]
    }
  ];

  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        { name: "Truffle Arancini", price: "$16", description: "Crispy risotto balls with black truffle" },
        { name: "Beef Tartare", price: "$18", description: "Prime beef with capers and quail egg" },
        { name: "Burrata", price: "$15", description: "Creamy burrata with heirloom tomatoes" }
      ]
    },
    {
      name: "Main Courses",
      items: [
        { name: "Dry-Aged Ribeye", price: "$42", description: "28-day aged ribeye with roasted vegetables" },
        { name: "Lobster Linguine", price: "$36", description: "Fresh lobster with handmade pasta" },
        { name: "Duck Confit", price: "$32", description: "Slow-cooked duck with cherry reduction" }
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Chocolate Soufflé", price: "$12", description: "Warm chocolate soufflé with vanilla ice cream" },
        { name: "Crème Brûlée", price: "$10", description: "Classic vanilla bean crème brûlée" },
        { name: "Seasonal Fruit Tart", price: "$11", description: "Fresh fruits with pastry cream" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive dining experiences and culinary services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate dinners to grand celebrations, we provide exceptional culinary experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                    <span className="text-amber-500 font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A carefully curated selection of dishes showcasing seasonal ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b-2 border-amber-500 pb-3">
                  {category.name}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                        <span className="text-amber-500 font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to reserve your table or discuss your special event requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
              Make Reservation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;