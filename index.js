import React from 'react'
import ReactDOM from 'react-dom'
import Content from './components/Content'
import store from './store/store'


const content = document.getElementById('content');

function render() {
    ReactDOM.render(
        <Content 
            items={store.getState().ItemState.items}
            status={store.getState().FromState.status}
        />,content)
}

render();

store.subscribe(render);