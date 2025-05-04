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
      <div className="app-container pt-[80px]">
        <section id="home">
          <Hero />
        </section>
        
        <section id="category">
          <Category/>
        </section>
        
        <section id="trending">
          <Trending />
        </section>
        
        <section id="games">
          <Games />
        </section>
        
        <section id="recent">
          <News/>
        </section>
        
        <section id="sports">
          <Article/>
        </section>
        
        <section id="newsletter">
          <NewsLetter/>
        </section>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
