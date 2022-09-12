import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"
import Bio from "./components/bio/Bio"
import Content from "./components/content/Content"

import "./App.css"

function App() {

  return (
    <div className="App">
      <Header />
      <Bio />
      <Content />
      <Card />
      <Footer />
    </div>
  )
}

export default App
