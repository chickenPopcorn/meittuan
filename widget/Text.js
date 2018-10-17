import React from 'react';
import { StyleSheet, Text } from 'react-native';
import color from './color';

export function Heading1({ style, ...props }) {
    return <Text style={[styles.h1, style]} {...props} />
}

export function Heading2({ style, ...props }) {
    return <Text style={[styles.h2, style]} {...props} />
}

export function Heading3({ style, ...props }) {
    return <Text style={[styles.h3, style]} {...props} />
}

export function Paragraph({ style, ...props }) {
    return <Text style={[styles.p, style]} {...props} />
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 40,
        color: color.primary
    },
    h2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222'
    },
    h3: {
        fontSize: 11,
        color: "#333333"
    },
    p: {
        fontSize: 11,
        color: '#777777'
    }
})