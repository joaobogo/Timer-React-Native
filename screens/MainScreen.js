import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react'
import Button from '../components/Button';

import Reset from '../components/Reset';
import { formTime } from '../functions';



export default function MainScreen() {
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds((prevSec) => prevSec + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isRunning])

   
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{formTime(seconds)}</Text>
            <Button label={isRunning ? 'Stop' : 'Start'} theme='primary' setIsRunning={setIsRunning}></Button>
            <Reset label='Reset' setSeconds={setSeconds}></Reset>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        height: 300,
        justifyContent: 'center',
    },
    text: {
        fontSize: 80,
        color: 'red',
    }
});
