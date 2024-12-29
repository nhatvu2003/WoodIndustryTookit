import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Brightness from 'expo-brightness';
import * as KeepAwake from 'expo-keep-awake';
const CurrentTime = ({navigation}: {navigation: StackNavigationProp<any, any>}) => {
    const [time, setTime] = useState<Date>(new Date());
    const [timezoneName, setTimezoneName] = useState<string>('');
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimezoneName(timeZone);
        Brightness.setSystemBrightnessAsync(1);
        KeepAwake.activateKeepAwakeAsync();
        return () => clearInterval(interval);
    },[]);
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const timezoneOffset = -time.getTimezoneOffset() / 60;
    const timezone = `GMT${timezoneOffset >= 0 ? '+' : ''}${timezoneOffset}`;
    const day = time.getDate();
    const month = (time.getMonth() + 1).toString().padStart(2, '0');
    const year = time.getFullYear();
    const formattedDate = `Ngày ${day} Tháng ${month} Năm ${year}`;
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='dark' backgroundColor='transparent' hidden={fullScreen} />
            <View style={styles.actionBar}>
                <View>
                {!fullScreen && <Ionicons name='chevron-back' size={32} color='#616161' onPress={() => navigation.goBack()} />}
                </View>
                <View>
                    <Feather name={fullScreen ? 'minimize' : 'maximize'} size={32} color='#616161' onPress={() => setFullScreen(!fullScreen)} />
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.content}>
                    <Text style={styles.timeText}>{`${hours}:${minutes}:${seconds}`}</Text>
                    <Text style={styles.dateText}>{formattedDate}</Text>
                    <Text style={styles.timezoneText}>{`${timezone} - ${timezoneName}`}</Text>
                </View>
            </View>
        </SafeAreaView>
  );
}

export default CurrentTime;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    actionBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      timeText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
      },
      dateText: {
        fontSize: 22,
        color: '#555',
        marginTop: 10,
        textAlign: 'center',
      },
      timezoneText: {
        fontSize: 16,
        color: '#777',
        marginTop: 10,
        textAlign: 'center',
      },
    
});