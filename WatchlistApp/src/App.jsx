import React, { useState } from 'react';
import './style.css';

const WatchlistApp = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('movie');

  const handleFormSubmit = (event) => {
    event.preventDefault();


    const newItem = {
      id: Date.now(),
      title: title,
      type: type
    };


    setWatchlist([...watchlist, newItem]);

    setTitle('');
    setType('movie');
  };

  const handleDeleteItem = (id) => {
    const updatedWatchlist = watchlist.filter(item => item.id !== id);
    setWatchlist(updatedWatchlist);
  };

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-5'>
          <h1>My Watchlist</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              value={type}
              onChange={(event) => setType(event.target.value)}
              required
            >
              <option value="movie">Movie</option>
              <option value="tvshow">TV Show</option>
            </select>
            <button type="submit">Add</button>
          </form>
        </div>
        <div className='col-md-7'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WatchlistApp;
