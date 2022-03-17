import NavigationBarComponent from './Components/NavigationBarComponent';
import { BlogArticles } from './Components/BlogData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllCategory from './Components/AllCategory';
import Home from './Components/Home';
import Article from './Components/Article';
import "./Components/style.css"

function App() {
  return (
    <BlogArticles>

      <div className="App">
        <Router>
        <NavigationBarComponent />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:cat" element={<AllCategory />} />
            <Route path="/article/:cat/:Id" element={<Article />} />
          </Routes>
        </Router>

      </div>
    </BlogArticles>

  );
}

export default App;
