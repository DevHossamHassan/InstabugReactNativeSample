/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, BackHandler, AppState, Button} from "react-native";
import Instabug from "instabug-reactnative";

export default class InstabugReactNativeSample extends Component {

    state = {
        appState: AppState.currentState
    };

    constructor() {
        super();
        // BackHandler.addEventListener('hardwareBackPress', function () {
        //     return true; // Back button disabled for entire app
        // });
        console.log("constructor has been called");

        Instabug.startWithToken(`f501f761142981d54b1fdea93963a934`, Instabug.invocationEvent.shake);

    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
        // BackHandler.addEventListener('hardwareBackPress', function() {
        //     // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
        //     // Typically you would use the navigator here to go to the last state.
        //
        //     // if (!this.onMainScreen()) {
        //     //     this.goBack();
        //         return true;
        //     // }
        //     // return false;
        // });
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }


    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!')
        }
        this.setState({appState: nextAppState});
    };

    // componentDidMount() {
    //     console.log("componentDidMount has been called");
    // }
    // componentWillMount = () => {
    //     BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
    // };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Button
                    onPress={() => {Instabug.invoke()}}
                    title="Invoke Instabug"
                    color="#841584"
                    disabled={false}
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('InstabugReactNativeSample', () => InstabugReactNativeSample);
