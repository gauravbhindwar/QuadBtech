import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/HeroSection/Hero'
import Category from './components/Category/Category'
import Trending from './components/TrendingNews/Trending'
import Games from './components/Games/Games'
import News from './components/News/News'
import Article from './components/SportsArticle/Article'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Hero />
        <Category/>
        <Trending />
        <Games />
        <News/>
        <Article/>
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  )
}

export default App
