import React from 'react';
import { Image } from 'react-native';

const FBLogo = () => {
    return (
        <Image
            style={{ width: 140, height: 43 }}
            source={require('../images/FarnhamBC-Logo-small.jpeg')}
        />
    )
}

export default FBLogo;
