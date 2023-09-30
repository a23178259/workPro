import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContactUSCOPY from "./components/MainContactUSCOPY.js";
import ActivitieSC from "./components/ActivitieSC.js";
import Footer from "./components/Footer.js";
import Sidebar from "./components/Sidebar.js";
import HeaderForPages from "./components/HeaderForPages.js";
import Header from "./components/Header.js";
import "./style/all.scss";
import News from "./components/News.js";
import Sea from "./components/Sea.js";
import Seal from "./components/Seal.js";
import Coral from "./components/Coral.js";
import Dolphin from "./components/Dolphin.js";
import Star from "./components/Star.js";
import SummerCamp from "./components/SummerCamp.js";
import MouseLight from "./components/MouseLight.js";
function App() {
  return (
    <BrowserRouter>
      <MouseLight />
      <Header />
      <HeaderForPages />
      <div>
        <Switch>
          <Route
            path="/MainContactUSCOPY"
            component={MainContactUSCOPY}
            exact
          />
          <Route path="/ActivitieSC" component={ActivitieSC} exact />
          <Route path="/News" component={News} exact />
          <Route path="/News/Sea" component={Sea} exact />
          <Route path="/News/Seal" component={Seal} exact />
          <Route path="/News/Coral" component={Coral} exact />
          <Route path="/News/Dolphin" component={Dolphin} exact />
          <Route path="/News/Star" component={Star} exact />
          <Route path="/News/SummerCamp" component={SummerCamp} exact />
        </Switch>
        <Footer
          link1="首頁"
          link2="館內資訊"
          link3="參觀資訊"
          link4="購票資訊"
          link5="聯絡我們"
        />
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
