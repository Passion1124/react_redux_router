import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, browserHistory,IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
// import Content from './components/Content.js'

import MyContainer from './container/MyContainer.js'
import FormEditPage from './container/FromEditPage'
import FormPreviewPage from './container/FromPreviewPage'
import store from './store/store'
import * as ContentApi from './handler/content-api'


const content = document.getElementById('content');

const history = syncHistoryWithStore(browserHistory,store);

// console.log(history);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={history}>
//             <Route path="/" component={Content} />
//         </Router>
//     </Provider>,
//     content
// );


    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={MyContainer}>
                    <IndexRoute component={FormEditPage} />
                    <Route path="/edit" component={FormEditPage} />
                    <Route path="/preview" component={FormPreviewPage} />
                </Route>
            </Router>
        </Provider>,
        content
    );


// function render() {
//     ReactDOM.render(
//         <Content
//             items={store.getState().ItemState.items}
//             status={store.getState().FromState.status}
//         />,content)
// }
//
// render();
//
// store.subscribe(render);

ContentApi.getItem();
