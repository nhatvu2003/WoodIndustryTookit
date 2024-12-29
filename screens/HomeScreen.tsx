import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StackNavigationProp } from '@react-navigation/stack';
import HeaderBar from './layout/HeaderBar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');


type IconName = 'transfer' | 'another-icon';

interface PropsDataList {
  id: string;
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

interface Props {
  navigation: StackNavigationProp<any>;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const data: PropsDataList[] = [
    { id: 'ConvertInchToMM', name: 'Chuyển đổi từ Inch sang Milimiet', icon: 'transfer' },
    { id: 'ConvertKgToLbg', name: 'Chuyển đổi từ Kg sang Lbg', icon: 'dumbbell' },
    { id: 'CurrentTime', name: 'Thời gian hiện tại', icon: 'clock'},
  ];

  const renderItem = ({ item }: { item: PropsDataList }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate(item.id)}
    >
      <MaterialCommunityIcons name={item.icon} size={48} color="white" />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="transparent" />
      <HeaderBar />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        contentContainerStyle={styles.gridContainer}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridContainer: {
    padding: 10,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    height: width * 0.4,
    borderRadius: 10,
    backgroundColor: '#416bb9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    marginTop: 10,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
