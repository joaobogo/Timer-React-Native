import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { formTime } from "../functions";
// import { askAsync, scheduleNotificationAsync } from 'expo-notifications';



// const requestNotificationPermission = async () => {
//     const { status } = await askAsync();
//     if (status !== 'granted') {
//         alert('You need to grant permission to send notifications.');
//     }
// };


export default function Alarm() {
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')
const [isAM,setIsAM] = useState(true)



    let intervalId
    const handleSec = async () => {
        clearInterval(intervalId)
        // scheduleNotification();
    }

    // const scheduleNotification = async () => {
    //     const notificationId = await scheduleNotificationAsync({
    //         content: {
    //             title: 'Timer',
    //             body: 'ITS TIME',
    //         },
    //         trigger: {
    //             seconds: 1,
    //         },
    //     });
    // };

    const handlePress = () => {
        // requestNotificationPermission();
        const currentTime = new Date(Date.now())
        const currHour = currentTime.getHours()
        const currSec = currentTime.getSeconds()
        const currMin = currentTime.getMinutes()
        const hourToSec = 60 * 60
        const minToSec = 60

        const remaining = (hours - currHour) * hourToSec + (minutes - currMin) * minToSec - currSec

        setSeconds(remaining);
        intervalId = setInterval(() => {
            setSeconds((prevSec) => {
                if (prevSec === 1) {
                    handleSec()
                }

                return prevSec - 1
            })
        }, 1000)
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TextInput style={styles.input} placeholder="hours(ex:12)" maxLength={2} keyboardType="numeric" defaultValue={hours} onChangeText={(newHour) => setHours(newHour)}></TextInput>
                <Text>:</Text>
                <TextInput style={styles.input} placeholder="minutes(ex:30)" maxLength={2} keyboardType="numeric" defaultValue={minutes} onChangeText={(newMinute) => setMinutes(newMinute)}></TextInput>
                <Pressable style={isAM ? styles.onbutton : styles.offbutton} onPress={()=> setIsAM(true)}>
                    <Text>AM</Text>
                </Pressable>
                <Pressable style={isAM ? styles.offbutton : styles.onbutton} onPress={()=> setIsAM(false)}>
                    <Text>PM</Text>
                </Pressable>
                <Pressable onPress={handlePress}>
                    <Text>Set Alarm</Text>
                </Pressable>
            </View>
            <Text>{formTime(seconds)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    onbutton: {
        backgroundColor: 'yellow'
    },
    
    offbutton:{
        backgroundColor: 'grey'
    },
    
    row: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    input: {
        width: 100,
        textAlign: 'center',
    },
    container: {
        alignItems: 'center',
        height: '100%'
    }
})