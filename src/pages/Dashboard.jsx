import React from 'react';

const Dashboard = () => {
  const recentReservations = [
    {
      id: 1,
      date: '2024-01-15',
      time: '19:00',
      guests: 4,
      status: 'Confirmed'
    },
    {
      id: 2,
      date: '2024-01-20',
      time: '20:00',
      guests: 2,
      status: 'Pending'
    },
    {
      id: 3,
      date: '2024-01-25',
      time: '18:30',
      guests: 6,
      status: 'Confirmed'
    }
  ];

  const favoriteDishes = [
    {
      id: 1,
      name: 'Grilled Salmon',
      lastOrdered: '2024-01-10'
    },
    {
      id: 2,
      name: 'Beef Wellington',
      lastOrdered: '2024-01-05'
    },
    {
      id: 3,
      name: 'Truffle Pasta',
      lastOrdered: '2023-12-28'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back to Resto!</p>
            </div>
            <button className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-colors duration-300">
              Make New Reservation
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-amber-500 text-xl">📅</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Reservations</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-amber-500 text-xl">⭐</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Loyalty Points</p>
                <p className="text-2xl font-bold text-gray-900">1,250</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-amber-500 text-xl">❤️</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Favorite Dishes</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Reservations */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Reservations</h2>
            <div className="space-y-4">
              {recentReservations.map((reservation) => (
                <div key={reservation.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {new Date(reservation.date).toLocaleDateString()} at {reservation.time}
                    </p>
                    <p className="text-gray-600">{reservation.guests} guests</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    reservation.status === 'Confirmed' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {reservation.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
              View All Reservations
            </button>
          </div>

          {/* Favorite Dishes */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Favorite Dishes</h2>
            <div className="space-y-4">
              {favoriteDishes.map((dish) => (
                <div key={dish.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div>
                    <p className="font-semibold text-gray-800">{dish.name}</p>
                    <p className="text-gray-600">Last ordered: {new Date(dish.lastOrdered).toLocaleDateString()}</p>
                  </div>
                  <button className="bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300">
                    Order Again
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
              Browse Menu
            </button>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Special Offer Just For You!</h2>
            <p className="text-xl mb-6">
              Get 20% off your next reservation when you book before January 31st
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105">
              Claim Offer Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;