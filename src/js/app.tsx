import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component1 } from './component/component1';



interface AppState { } 
interface AppProps {}

class App extends React.Component<AppProps, AppState>{
    render() {
        return (
            <Component1 />
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));