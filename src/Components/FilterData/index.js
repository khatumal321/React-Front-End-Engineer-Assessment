import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>
                {item.name} - {item.description}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ApiComponent;
