import React, { useState } from 'react';
import './App.css';

function App() {
  const [newsData, setNewsData] = useState(null);
  const [search, setSearch] = useState('');
  const [date, setDateHook] = useState('');

  const getNextDay = () => {
    const day = new Date(date);
    day.setDate(day.getDate() + 1);

    const formattedDate = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
    setDateHook(formattedDate);
  };

  const getPreviousDay = () => {
    const day = new Date(date);
    day.setDate(day.getDate() - 1);

    const formattedDate = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
    setDateHook(formattedDate);
  };

  const NewsCard = () => {
    return (
      <div className='newsCardContainer'>
        {newsData.map((article) => (
          <div className='newsCard' key={article.title}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt="" />
            <p>{article.description}</p>
            <p>{article.publishedAt}</p>
          </div>
        ))}
      </div>
    );
  };

  const getNews = () => {
    const fetchString = 'https://newsapi.org/v2/everything?q=';
    const secondFetchString = '&apiKey=c397d0c38629457f84b978fd171becab';
    const finalFetchString = fetchString + search + secondFetchString;

    if (search.trim() !== '') {
      fetch(finalFetchString)
        .then((response) => response.json())
        .then((result) => {
          setNewsData(result.articles);
          console.log(result);
        })
        .catch((error) => console.log('error', error));
    } else {
      alert('Please enter a search keyword');
    }
  };

  return (
    <div>
      <div className='newsSearch'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> <br />
        <button onClick={getNews}>Search</button>
      </div>
    <br />
      <div>
        <input type="date" value={date} onChange={(e) => setDateHook(e.target.value)} />
        <div> <br />
          <button onClick={getPreviousDay}>&#8592;</button>
          <button onClick={getNextDay}>&#8594;</button>
        </div>
      </div>

      {newsData ? (
        <NewsCard />
      ) : null}
    </div>
  );
}

export default App;
