import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const { login } = useAuth();

    const handleLogin = () => {
        if (!username.trim()) return;

        login(username);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back 🦢</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your magical name..."
                    placeholderTextColor="#B0A695"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />
            </View>
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Enter to Realm ✨</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: '#FAF3F0'
    },
    title: {
        fontSize: 28,
        fontWeight: '300',
        marginBottom: 40,
        textAlign: 'center',
        color: '#5F4B4B'
    },
    inputContainer: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        shadowColor: '#EBC7E6',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 25,
    },
    input: {
        padding: 15,
        borderRadius: 20,
        color: '#5F4B4B',
        borderWidth: 1,
        borderColor: '#EBC7E6'
    },
    button: {
        backgroundColor: '#9CA986',
        padding: 18,
        borderRadius: 25,
        alignItems: 'center',
        shadowColor: '#9CA986',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 1
    },
});