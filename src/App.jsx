import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"
import Bio from "./components/bio/Bio"
import Content from "./components/content/Content"
import Relogio from "./components/relogio/Relogio"
import Lowercase from "./components/lowercase/Lowercase"

import "./App.css"

function App() {

  return (
    <div className="App">
      <Header />
      <Relogio />
      <Lowercase info="TEXTO MAIUSCULO" />
      <Card />
      <Bio />
      <Content />
      <Footer />
    </div>
  )
}

export default App
