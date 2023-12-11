import Bottom from "./components/Bottom";
import Form from "./components/Form";
import Top from "./components/Top";

function App() {
  return (
    <>
      <div>
        <div className="top">
          <Top />
        </div>
        <div className="bottom">
          <Form />
          <div className="container clearfix">
            <Bottom />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
