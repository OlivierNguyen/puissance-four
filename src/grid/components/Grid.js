import React, { Component } from 'react';
import _ from 'lodash';
import Token from './Token';
import { checkAlignedToken, initGridData } from '../utils/utils';
import { MOCK_DATA } from '../mock';

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: initGridData(),
        };
    }

    componentDidMount() {
        console.log(checkAlignedToken(MOCK_DATA, 1));
    }

    render() {
        const S = {
            lineContainer: {
                display: 'flex',
            },
        };
        return (
            <div>
                {_.map(this.state.data, row => {
                    return (
                        <div style={S.lineContainer}>
                            {_.map(row, token => <Token />)}
                        </div>
                    );
                })}
            </div>
        );
    }
}
