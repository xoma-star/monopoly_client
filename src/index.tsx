import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@vkontakte/vkui/dist/vkui.css';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client'
import {store} from "./Redux";
import client from "./GraphQL/client";
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
);