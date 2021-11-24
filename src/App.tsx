import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { Provider } from 'react-redux';
import store from '@/store';
import { HashRouter as Router } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import './style';
import RouteConfig from './router';

export default function App(): React.ReactElement {

  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<Spin />} >
            <RouteConfig></RouteConfig>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}
