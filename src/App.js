import './App.css';
import Header from "./components/Header";
import Main from "./pages/Main";
import {Route, Router, Routes} from "react-router-dom";
import RoadRules from "./pages/RoadRules";
import HelpPhones from "./pages/HelpPhones";
import Scammers from "./pages/Scammers";
import Extremism from "./pages/Extremism";
import About from "./pages/About";

function App() {
    return (<>
        <Header/>
        <div className={"app"}>
            <Router location={window.location} navigator={window.history}>
                <Routes>
                    <Route exact index={true} path={Main.link} element={<Main/>}/>
                    <Route path={RoadRules.link} element={<RoadRules/>}/>
                    <Route path={HelpPhones.link} element={<HelpPhones/>}/>
                    <Route path={Scammers.link} element={<Scammers/>}/>
                    <Route path={Extremism.link} element={<Extremism/>}/>
                    <Route path={About.link} element={<About/>}/>
                </Routes>
            </Router>
        </div>
    </>);
}

export default App;
