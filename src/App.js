import Categories from "./pages/categories";
import Flashsale from "./pages/flashsale";
import Footer from "./pages/footer";
import Header from "./pages/header";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Flashsale/>
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
