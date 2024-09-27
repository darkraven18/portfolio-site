import './App.css';

function App() {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-black snap-y snap-mandatory overflow-scroll">
      <div className="z-20 fixed justify-center w-1/2 items-center flex h-[100px]">
        <div className='cursor-pointer	text-center w-1/4 text-white text-3xl hover:underline underline-offset-8 decoration-green opacity-50 hover:opacity-100 transition-all duration-300'>
          <b>About</b>
        </div>
        <div className='cursor-pointer	text-center w-1/4 text-white text-3xl hover:underline underline-offset-8 decoration-green opacity-50 hover:opacity-100 transition-all duration-300'>
          <b>Profile</b>
        </div>
        <div className='cursor-pointer	text-center w-1/4 text-white text-3xl hover:underline underline-offset-8 decoration-green opacity-50 hover:opacity-100 transition-all duration-300'>
          <b>Project</b>
        </div>
        <div className='cursor-pointer	text-center w-1/4 text-white text-3xl hover:underline underline-offset-8 decoration-green opacity-50 hover:opacity-100 transition-all duration-300'>
          <b>Contact</b>
        </div>
      </div>
      <div className='fixed mt-[25vh] snap-normal justify-center w-1/4 items-center flex h-[50vh]'>
        <b><i className='typewriter text-green text-[200px]'>UR</i></b>
      </div>
      <div id='scrool' className="z-3 justify-center snap-start items-start flex w-full min-h-[100vh] h-[100vh] bg-black">
      </div>
      <div id='stop' className="z-10 snap-start justify-center items-center flex w-full min-h-[100vh] h-[100vh] bg-green">
      <b><i className='typewriter2 text-black text-9xl'>Hello World!</i></b>
      </div>
    </div>
  );
}

export default App;
