import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import Navbar from '../components/Navbar';

const Sample = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>Sample Screen</Text>
            </ScrollView>
            <Navbar />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    }
});

export default Sample;