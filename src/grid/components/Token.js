import React, { Component } from 'react';

export default class Token extends Component {
    render() {
        const S = {
            container: {
                backgroundColor: '#dedede',
                border: 'solid 1px #000',
                height: 20,
                width: 20,
            },
        };
        return <div style={S.container} />;
    }
}
