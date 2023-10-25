import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConnectionProvider } from "./connect/connection";
import Clientlist from "./Pages/client/client list/clientlist";
import Clientdetail from "./Pages/client/client detail/clientdetail";
import Clientinput from "./Pages/client/client input/clientinput";
import Projectdetail from "./Pages/project/project detail/projectdetail";
import Taskdetail from "./Pages/Task/task detail/taskdetail";
import Tasklist from "./Pages/Task/task list/tasklist";
import Projectojectlist from "./Pages/project/project list/projectlist";
import Projectlist from "./Pages/project/project list/projectlist";

function App() {
  return (
    <div className="App">
        <ConnectionProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/clientlist" element={<><Clientlist/></>}></Route>
              <Route path="/clientinput" element={<> <Clientinput/> </>}></Route>
              <Route path="/clientdetail/:id" element={<> <Clientdetail/> </>}></Route>

              <Route path="/projectlist" element={<> <Projectlist/> </>}></Route>
              <Route path="/projectdetail/:id" element={<> <Projectdetail/> </>}></Route>

              <Route path="/tasklist" element={<> <Tasklist/> </>}></Route>
              <Route path="/taskdetail/:id" element={<> <Taskdetail/> </>}></Route>
            </Routes>
          </BrowserRouter>
        </ConnectionProvider>
    </div>
  );
}

export default App;
