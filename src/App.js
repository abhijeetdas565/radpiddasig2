import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products"
import Category from "./components/Category/Category"

function App() {
    return (
        <BrowserRouter>
           
                <Header />
                <Banner/>
                <Category/>
                <Products/>
        
        </BrowserRouter>
    );
}

export default App;
