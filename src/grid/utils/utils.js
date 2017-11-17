import _ from 'lodash';
import { SETTINGS } from '../../settings';

/**
 * Check if a row contains `nbAlign` tokens
 * @param row = [{ idPlayer: 1 }, { idPlayer: 2}, { idPlayer: idPlayer 1}]
 * @param idPlayer
 */
export const checkAlignedRowToken = (row, idPlayer, nbAlign = 4) => {
    let count = 0;
    for (let token of row) {
        if (token.idPlayer == idPlayer) {
            count += 1;
        } else {
            count = 0;
        }

        if (count >= nbAlign) {
            return true;
        }
    }
    return false;
};

export const checkAlignedColumnToken = (
    data,
    idPlayer,
    indexColumn,
    nbAlign = 4
) => {
    const rowColumn = _.map(data, row => row[indexColumn]);
    return checkAlignedRowToken(rowColumn, idPlayer, nbAlign);
};

/**
 * @param data = [
 *      [{ idPlayer: 1 }, { idPlayer: 2}, { idPlayer: idPlayer 1}],
 *      [{ ... }, { ... }, { ... }],
 *      [{ ... }, { ... }, { ... }],
 * ]
 * @param idPlayer,
 * @param nbAlign
 */
export const checkAlignedToken = (data, idPlayer, nbAlign) => {
    /**
     * Check all rows first
     */
    for (let row of data) {
        if (checkAlignedRowToken(row, idPlayer, nbAlign)) {
            return true;
        }
    }

    /**
     * Check all columns
     */
    for (
        let indexColumn = 0;
        indexColumn < SETTINGS.NB_COLUMNS;
        indexColumn++
    ) {
        if (checkAlignedColumnToken(data, idPlayer, indexColumn, nbAlign)) {
            return true;
        }
    }

    return false;
};

export const initGridData = () => {
    let grid = [];

    for(let j = 0; j < SETTINGS.NB_ROWS; j++) {
        let row = [];
        for (let i = 0; i < SETTINGS.NB_ROWS; i++) {
            row.push({
                idPlayer: null
            })
        }
        grid.push(row);
    }

    return grid;
};