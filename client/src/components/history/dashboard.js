import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API using Axios
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">History</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Render the data in a grid or any other suitable layout */}
        {data.map(item => (
          <div key={item.id} className="p-4 bg-gray-200">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
