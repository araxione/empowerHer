class App extends Component {
  render() {
    return (
      <>
      <NavBar />
      <Router>
        <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/interest' element={<Interest/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
        </div>
      </Router>
      </>
    );
  }
}