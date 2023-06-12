import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';

const Learn = () => {
    return (
        <Provider store={Store} justExample={'Workings'}>
            <App justExample={'Working'} />
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => Learn);

// AppRegistry.registerComponent(appName, () => App);
