import React, {Fragment} from 'react';
import Header from "./components/header";
import routes from "./routes";

export default function App() {
  return (
      <Fragment>
        <Header/>
        <div className="col-lg-12">
          {routes}
        </div>
      </Fragment>
  );
}
