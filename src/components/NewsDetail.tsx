import { Text, View, StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";

export const NewsDetail = ({navigation, route}) => {
    console.log('route: ', route);
    
    return (
        <View style={styles.content}>
        <View>
            <Text style={styles.title}>
                {route.params.item.title}
            </Text>
        </View>
        <View>
            <Text  style={styles.overview}>
                {route.params.item.description}
            </Text>
        </View>
        <View>
            <Text  style={styles.overview}>
            {route.params.item.content}
            </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    },
    title: {
        padding: 12,
        fontSize: 34,
        fontWeight: 'bold',
        backgroundColor: 'orange'
    },
    overview: {
        padding: 12,
        color: '#111111'
    }
})