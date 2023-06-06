import Navbar from "./navbar/navbar";
import Form from "./form/form";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-2/3 h-1/2  flex">
          <div className="w-1/2 flex justify-center items-center">
           <Form/>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            test
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
