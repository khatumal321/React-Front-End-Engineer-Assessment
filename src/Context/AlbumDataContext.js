// AlbumDataContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AlbumDataContext = createContext();

const AlbumDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setData([...response.data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.slice(0, 100).filter((item) =>
    item?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <AlbumDataContext.Provider value={{ data, loading, filteredData, handleSearch }}>
      {children}
    </AlbumDataContext.Provider>
  );
};

export { AlbumDataContext, AlbumDataProvider };
