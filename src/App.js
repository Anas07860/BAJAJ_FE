import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file
import logo from './bajaj-logo.png'; // Import the Bajaj logo image

function App() {
  const [postData, setPostData] = useState({});
  const [getData, setGetData] = useState({});
  const [statusInput, setStatusInput] = useState('');
  const [userIDInput, setUserIDInput] = useState('');
  const [collegeEmailInput, setCollegeEmailInput] = useState('');
  const [collegeRollNumberInput, setCollegeRollNumberInput] = useState('');
  const [numbersInput, setNumbersInput] = useState('');
  const [alphabetsInput, setAlphabetsInput] = useState('');
  const [highestAlphabetInput, setHighestAlphabetInput] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // Function to send a POST request to the server
  const sendPostRequest = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/bfhl', {
        data: data,
      });
      setPostData(response.data);
    } catch (error) {
      console.error('POST Error:', error);
    }
  };

  // Function to send a GET request to the server
  const sendGetRequest = async () => {
    try {
      const response = await axios.get('http://localhost:3001/bfhl');
      setGetData(response.data);
    } catch (error) {
      console.error('GET Error:', error);
    }
  };

  // Handle search input changes
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Handle search button click for Status
  const handleSearchStatus = () => {
    sendPostRequest([statusInput]);
  };

  // Handle search button click for User ID
  const handleSearchUserID = () => {
    sendPostRequest([userIDInput]);
  };

  // Handle search button click for College Email ID
  const handleSearchCollegeEmail = () => {
    sendPostRequest([collegeEmailInput]);
  };

  // Handle search button click for College Roll Number
  const handleSearchRollNumber = () => {
    sendPostRequest([collegeRollNumberInput]);
  };

  // Handle search button click for Array of Numbers
  const handleSearchNumbers = () => {
    sendPostRequest(numbersInput.split(',').map((item) => item.trim()));
  };

  // Handle search button click for Array of Alphabets
  const handleSearchAlphabets = () => {
    sendPostRequest(alphabetsInput.split(',').map((item) => item.trim()));
  };

  // Handle search button click for Highest Alphabet
  const handleSearchHighestAlphabet = () => {
    sendPostRequest([highestAlphabetInput]);
  };

  // Handle search button click for custom data input
  const handleSearchCustomData = () => {
    sendPostRequest(searchInput.split(',').map((item) => item.trim()));
  };

  // Send requests when the component mounts
  useEffect(() => {
    sendPostRequest([statusInput]); // Example A data as the initial data
    sendGetRequest();
  }, []);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <div className="navbar">
        <img src={logo} alt="Bajaj Logo" className="nav-logo" />
        {/* You can add other navigation items here */}
      </div>

      <div className="container">
        <h1>BFHL App</h1>

        {/* Search input and button for Status */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Status"
            value={statusInput}
            onChange={(e) => setStatusInput(e.target.value)}
          />
          <button onClick={handleSearchStatus}>Search</button>
        </div>
        <p>Status: {postData.is_success ? 'Success' : 'Failure'}</p>

        {/* Search input and button for User ID */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search User ID"
            value={userIDInput}
            onChange={(e) => setUserIDInput(e.target.value)}
          />
          <button onClick={handleSearchUserID}>Search</button>
        </div>
        <p>User ID: {postData.user_id}</p>

        {/* Search input and button for College Email ID */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search College Email ID"
            value={collegeEmailInput}
            onChange={(e) => setCollegeEmailInput(e.target.value)}
          />
          <button onClick={handleSearchCollegeEmail}>Search</button>
        </div>
        <p>College Email ID: {postData.email}</p>

        {/* Search input and button for College Roll Number */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search College Roll Number"
            value={collegeRollNumberInput}
            onChange={(e) => setCollegeRollNumberInput(e.target.value)}
          />
          <button onClick={handleSearchRollNumber}>Search</button>
        </div>
        <p>College Roll Number: {postData.roll_number}</p>

        {/* Search input and button for Array of Numbers */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Array of Numbers (Comma-separated)"
            value={numbersInput}
            onChange={(e) => setNumbersInput(e.target.value)}
          />
          <button onClick={handleSearchNumbers}>Search</button>
        </div>
        <p>Array for Numbers: {JSON.stringify(postData.numbers)}</p>

        {/* Search input and button for Array of Alphabets */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Array of Alphabets (Comma-separated)"
            value={alphabetsInput}
            onChange={(e) => setAlphabetsInput(e.target.value)}
          />
          <button onClick={handleSearchAlphabets}>Search</button>
        </div>
        <p>Array for Alphabets: {JSON.stringify(postData.alphabets)}</p>

        {/* Search input and button for Highest Alphabet */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Highest Alphabet (Comma-separated)"
            value={highestAlphabetInput}
            onChange={(e) => setHighestAlphabetInput(e.target.value)}
          />
          <button onClick={handleSearchHighestAlphabet}>Search</button>
        </div>
        <p>Highest Alphabet: {JSON.stringify(postData.highest_alphabet)}</p>

        {/* Search input and button for custom data input */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Custom Data (Comma-separated)"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <button onClick={handleSearchCustomData}>Search</button>
        </div>
        {/* Display data here */}
        {/* ... (Rest of your component code remains the same) */}
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; All rights reserved to Anas Ather</p>
      </div>
    </div>
  );
}

export default App;
