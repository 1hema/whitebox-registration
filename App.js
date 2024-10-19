import Form from "./components/Form";


function App() {
  return (
    // flex so that component is from left to right
    // first styling is applied to mobile width then desktop
    <div className="flex w-full ">
      <div className="w-full flex items-center justify-center lg:w-1/2">
      <Form/>
      </div> 
    </div>
  );
}

export default App;
