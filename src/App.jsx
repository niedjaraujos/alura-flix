
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homebase } from "./pages/Homebase"
import { NewVideo } from "./pages/NewVideo"
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"


export function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Homebase />}></Route>
        <Route path="/newvideo" element={<NewVideo />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    )
}


