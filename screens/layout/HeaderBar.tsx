import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import DateHandle from '../../utils/DateHandle';

const HeaderBar : React.FC = () => {
  return (
    <View style={styles.header}>
        <View style={styles.headerRight}>
            <View style={styles.headerRightIcon}>
                <Ionicons name='home-outline' size={28} color='#616161' />
            </View>
            <View style={styles.headerRightName}>
                <Text style={styles.headerRightNameText}>{DateHandle.GreetBasedOnTime()}, Nhật</Text>
            </View>
        </View>
        <View style={styles.headerLeft}>
            <View style={styles.headerLeftMenu}>
            <Ionicons name='menu-sharp' size={28} color='#616161' />
            </View>
            <View style={styles.headerLeftNotification}>
            <Ionicons name='notifications-outline' size={28} color='#616161' />
            </View>
        </View>
    </View>
  )
}

export default HeaderBar;

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#616161',
        borderBottomWidth: 1,
    },
    headerRight: {
        flexDirection: 'row',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerRightIcon: {
        marginHorizontal: 5
    },
    headerRightName: {
        marginHorizontal: 5
    },
    headerRightNameText: {
        fontSize: 15,
        color: '#616161',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    headerLeft: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    headerLeftMenu: {
        marginHorizontal: 3
    },
    headerLeftNotification: {
        marginHorizontal: 3
    }
});