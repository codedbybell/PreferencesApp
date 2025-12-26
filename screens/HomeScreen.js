import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen() {
    const { user, logout } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Hello, {user?.username} 🪷</Text>
            <Text style={styles.subText}>Your aesthetic journey begins here.</Text>

            <Pressable style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutText}>Logout</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF3F0'
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5F4B4B',
        marginBottom: 10
    },
    subText: {
        fontSize: 16,
        color: '#9CA986',
        marginBottom: 40
    },
    logoutButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: '#EBC7E6',
        borderRadius: 20,
    },
    logoutText: {
        color: '#EBC7E6',
        fontWeight: '600'
    }
});