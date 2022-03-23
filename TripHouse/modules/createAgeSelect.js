import {createOptions} from './createOptions.js';

function createAgeSelect() {
    return `
    <select class="age_select age_select_adaptive" name="age" id="age">
        ${createOptions(17)}
    </select>`;
}

export {createAgeSelect};