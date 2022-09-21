import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Navbar = () => {
    return (
        <View style={styles.navbarContainer}>
            <Ionicons name="home" size={24} color="black" style={styles.iconMargin}/>
            <Entypo name="squared-plus" size={24} color="black" style={styles.iconMargin}/>
            <FontAwesome name="user" size={24} color="black" style={styles.iconMargin}/>
        </View>
    )
};

const styles = StyleSheet.create({
    navbarContainer: {
        marginBottom: 20,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 10,
        flexDirection: 'row'
    },
    iconMargin: {
        marginLeft: 5,
        marginRight: 5
    }
});

export default Navbar;