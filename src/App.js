import Categories from "./components/Categories/Categories";
import "./scss/app.scss";

import Sort from "./components/Sort/Sort";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="content">
      <div className="container">
        <Header />
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <Product />
      </div>
    </div>
  );
}

export default App;
