import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect( () => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-03-26&sortBy=publishedAt&apiKey=9f617a4bad5747349dfe928f7ca2b8f5'
    fetch(url)
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[])
  return (
    <div>
      
      {
        news.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
