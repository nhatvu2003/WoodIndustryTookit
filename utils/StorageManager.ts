import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @description Kiểm tra và xác thực khóa dữ liệu
 * @param key string
 */
const validateKey = (key: string): void => {
    if (typeof key !== 'string' || key.trim() === '') {
        throw new Error('Key must be a non-empty string');
    }
};

/**
 * @description Lưu dữ liệu vào điện thoại
 * @param key string
 * @param data object
 */
const saveData = async (key: string, data: object | null): Promise<void> => {
    validateKey(key);

    if (data === null || typeof data !== 'object') {
        throw new Error('Data must be a non-null object');
    }

    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (err) {
        console.error(`Error saving data for key '${key}':`, err);
        throw new Error(`Failed to save data for key '${key}'`);
    }
};

/**
 * @description Lấy dữ liệu từ điện thoại
 * @param key string
 * @returns Dữ liệu đã được lưu trữ hoặc null nếu không có dữ liệu
 */
const getData = async (key: string): Promise<any | null> => {
    validateKey(key);

    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (err) {
        console.error(`Error retrieving data for key '${key}':`, err);
        throw new Error(`Failed to retrieve data for key '${key}'`);
    }
};

/**
 * @description Xóa dữ liệu từ điện thoại
 * @param key string
 */
const removeData = async (key: string): Promise<void> => {
    validateKey(key);

    try {
        await AsyncStorage.removeItem(key);
    } catch (err) {
        console.error(`Error removing data for key '${key}':`, err);
        throw new Error(`Failed to remove data for key '${key}'`);
    }
};

/**
 * @description Kiểm tra dữ liệu có tồn tại không
 * @param key string
 * @returns true nếu dữ liệu tồn tại, ngược lại trả về false
 */
const checkExistsData = async (key: string): Promise<boolean> => {
    validateKey(key);

    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null;
    } catch (err) {
        console.error(`Error checking data existence for key '${key}':`, err);
        throw new Error(`Failed to check data existence for key '${key}'`);
    }
};

/**
 * @description Xóa toàn bộ dữ liệu lưu trữ trong AsyncStorage
 */
const clearAllData = async (): Promise<void> => {
    try {
        await AsyncStorage.clear();
        console.log('All data cleared from AsyncStorage');
    } catch (err) {
        console.error('Error clearing all data from AsyncStorage:', err);
        throw new Error('Failed to clear all data from AsyncStorage');
    }
};
const findItemById = async (key: string, id: string): Promise<any | null> => {
    try {
        const list = await getData(key);

        if (!list || !Array.isArray(list)) {
            throw new Error(`Dữ liệu không hợp lệ cho khóa '${key}'`);
        }

        const item = list.find((element: any) => element.accountNumber === id);
        return item || null; // Trả về null nếu không tìm thấy
    } catch (err) {
        console.error(`Error finding item by ID '${id}' for key '${key}':`, err);
        throw new Error(`Failed to find item by ID '${id}' for key '${key}': ${err}`);
    }
};

export default {
    saveData,
    getData,
    removeData,
    checkExistsData,
    clearAllData,
    findItemById
};
