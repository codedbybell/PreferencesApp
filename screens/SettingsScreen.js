import { View, Text, StyleSheet, Switch, Pressable } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../context/AuthContext';

export default function SettingsScreen() {
    const { theme, toggleTheme, colors } = useTheme();
    const { user, logout } = useAuth();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>

            {/* User Info */}
            <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.accent }]}>
                <Text style={[styles.sectionTitle, { color: colors.primary }]}>Profile</Text>
                <Text style={[styles.text, { color: colors.text }]}>Username: {user?.username}</Text>
            </View>

            {/* Tema Ayarı Kartı */}
            <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.accent }]}>
                <Text style={[styles.sectionTitle, { color: colors.primary }]}>Appearance</Text>

                <View style={styles.row}>
                    <Text style={[styles.text, { color: colors.text }]}>
                        {theme === 'light' ? '🌸 Light Fairy' : '🌙 Dark Forest'}
                    </Text>
                    <Switch
                        value={theme === 'dark'}
                        onValueChange={toggleTheme}
                        trackColor={{ false: "#EBC7E6", true: "#395B64" }}
                        thumbColor={theme === 'dark' ? "#A5C9CA" : "#9CA986"}
                    />
                </View>
            </View>

            {/* Logout Buton */}
            <Pressable
                style={[styles.logoutButton, { borderColor: colors.primary }]}
                onPress={logout}
            >
                <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Log Out</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    card: {
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoutButton: {
        marginTop: 'auto',
        padding: 15,
        borderRadius: 15,
        borderWidth: 2,
        alignItems: 'center',
        marginBottom: 20
    }
});