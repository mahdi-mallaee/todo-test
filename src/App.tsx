import Header from "./components/header"

function App() {
  return (
    <div className='relative bg-background text-on-background min-h-screen'>
      <div
        className='absolute h-full bg-[url("./assets/bg-tile.png")] bg-repeat inset-0 opacity-10 pointer-events-none ' />
      <div className='relative'>
        <Header />
      </div>
    </div>
  )
}

export default App
