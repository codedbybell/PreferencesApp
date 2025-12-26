import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../hooks/useTheme';

export default function HomeScreen({ navigation }) {
    const { user, logout } = useAuth();
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.welcomeText, { color: colors.text }]}>Hello, {user?.username} 🪷</Text>
            <Text style={[styles.subText, { color: colors.primary }]}>Your aesthetic journey begins here.</Text>

            {/* Settings Button */}
            <Pressable
                style={[styles.actionButton, { backgroundColor: colors.primary }]}
                onPress={() => navigation.navigate('Settings')}
            >
                <Text style={styles.buttonText}>Go to Settings ⚙️</Text>
            </Pressable>

            {/* Logout Button */}
            <Pressable
                style={[styles.logoutButton, { borderColor: colors.accent }]}
                onPress={logout}
            >
                <Text style={[styles.logoutText, { color: colors.accent }]}>Logout</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subText: {
        fontSize: 16,
        marginBottom: 40,
        fontStyle: 'italic'
    },
    actionButton: {
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 16
    },
    logoutButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderRadius: 20,
    },
    logoutText: {
        fontWeight: '600'
    }
});