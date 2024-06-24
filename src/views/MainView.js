// ./src/AdminView.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import PaymentCards from '../components/dashboard/PaymentCards';
import PurchasedApi from '../components/dashboard/PurchasedApi';
// import ApiDocumentation from '../components/dashboard/ApiDocumentation';
// import Stats from '../components/dashboard/Stats';

const AdminView = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PurchasedApi} />

        {/* <Route exact path="/payment-cards" component={PaymentCards} />
        <Route exact path="/api-documentation" component={ApiDocumentation} />
        <Route exact path="/stats" component={Stats} /> */}
      </Switch>
    </Router>
  );
};

export default AdminView;
