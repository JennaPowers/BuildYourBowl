import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// IMAGES
import oatsImage from '../images/bowls/oats.png';
import yogurtImage from '../images/bowls/yogurt.png';
import buddhaImage from '../images/bowls/buddha.png';
import greensImage from '../images/bowls/greens.png';
import riceImage from '../images/bowls/rice.png';

// IMAGES
import oatsPlain from '../images/bowls/plainOats.png';
import buddhaPlain from '../images/bowls/plainBuddha.png';
import yogurtPlain from '../images/bowls/plainYogurt.png';
import greensPlain from '../images/bowls/plainGreens.png';
import ricePlain from '../images/bowls/plainRice.png';

// TOPPING IMAGES
import apple from '../images/toppings/apple.png';
import banana from '../images/toppings/banana.png';
import blueberries from '../images/toppings/blueberries.png';
import peaches from '../images/toppings/peaches.png';
import raspberries from '../images/toppings/raspberries.png';
import dates from '../images/toppings/dates.png';
import hemp from '../images/toppings/hemp.png';
import chia from '../images/toppings/chia.png';
import flax from '../images/toppings/flax.png';
import sesame from '../images/toppings/sesame.png';
import pumpkin from '../images/toppings/pumpkin.png';
import sunflower from '../images/toppings/sunflower.png';
import peanut from '../images/toppings/peanut.png';
import almond from '../images/toppings/almondbutter.png';
import cashew from '../images/toppings/cashew.png';
import walnut from '../images/toppings/walnut.png';
import hazelnut from '../images/toppings/hazelnut.png';
import sunflowerbutter from '../images/toppings/sunflowerbutter.png';
import almonds from '../images/toppings/almonds.png';
import walnuts from '../images/toppings/walnuts.png';
import honey from '../images/toppings/honey.png';
import maple from '../images/toppings/maple.png';
import cinnamon from '../images/toppings/cinnamon.png';
import beepollen from '../images/toppings/beepollen.png';
import chocchips from '../images/toppings/chocchips.png';
import coconut from '../images/toppings/coconut.png';
import branflakes from '../images/toppings/branflakes.png';
import granola from '../images/toppings/granola.png';
import brownrice from '../images/toppings/brownrice.png';
import farro from '../images/toppings/farro.png';
import quinoa from '../images/toppings/quinoa.png';
import buckwheat from '../images/toppings/buckwheat.png';
import millet from '../images/toppings/millet.png';
import blackrice from '../images/toppings/blackrice.png';
import tofu from '../images/toppings/tofu.png';
import chickpeas from '../images/toppings/chickpeas.png';
import salmon from '../images/toppings/salmon.png';
import chicken from '../images/toppings/chicken.png';
import tempeh from '../images/toppings/tempeh.png';
import beans from '../images/toppings/beans.png';
import sweetpotato from '../images/toppings/sweetpotato.png';
import mushrooms from '../images/toppings/mushrooms.png';
import pepper from '../images/toppings/pepper.png';
import beets from '../images/toppings/beets.png';
import carrots from '../images/toppings/carrots.png';
import zucchini from '../images/toppings/zucchini.png';
import onion from '../images/toppings/onion.png';
import cauliflower from '../images/toppings/cauliflower.png';
import sesamevin from '../images/toppings/sesamevin.png';
import avo from '../images/toppings/avo.png';
import olive from '../images/toppings/olive.png';
import tahini from '../images/toppings/tahini.png';
import balsamic from '../images/toppings/balsamic.png';
import lemon from '../images/toppings/lemon.png';
import kale from '../images/toppings/kale.png';
import spinach from '../images/toppings/spinach.png';
import mixedgreens from '../images/toppings/mixedgreens.png';
import romaine from '../images/toppings/romaine.png';
import egg from '../images/toppings/egg.png';

import gochujang from '../images/toppings/gochujang.png';
import thaisauce from '../images/toppings/thaisauce.png';
import cilantrolime from '../images/toppings/cilantrolime.png';
import chimichurri from '../images/toppings/chimichurri.png';

const bowlsReducer = () => {
    return [
        { name: 'OATS', image: oatsImage, index: 0, plainImage:  oatsPlain},
        { name: 'BUDDHA', image: buddhaImage, index: 1, plainImage:  buddhaPlain },
        { name: 'YOGURT', image: yogurtImage, index: 2, plainImage:  yogurtPlain },
        { name: 'GREENS', image: greensImage, index: 3, plainImage:  greensPlain},
        { name: 'RICE', image: riceImage, index: 4, plainImage:  ricePlain }
    ];
};

const initialState = {
    name: '',
    index: 0
};

const selectedBowlReducer = (state=initialState, action) => {
    if (action.type === 'SELECT_BOWL') {
        return {
            name: action.payload.name,
            index: action.payload.index,
            plainImage: action.payload.plainImage,
            showToppings: true
        };
    }
    return state;
};

const toppingsReducer = () => {
    return [[
        { name: 'Fruit' },
        { name: 'Seeds' },
        { name: 'Nut Butter' },
        { name: 'Nuts'},
        { name: 'Drizzle' },
        { name: 'Extras' }
    ],
    [
        { name: 'Grains' },
        { name: 'Protein' },
        { name: 'Veggies' },
        { name: 'Seeds'},
        { name: 'Nuts' },
        { name: 'Dressing' }
    ], 
    [

        { name: 'Fruit' },
        { name: 'Seeds' },
        { name: 'Nut Butter' },
        { name: 'Nuts'},
        { name: 'Drizzle' },
        { name: 'Extras' }
    ],
    [
        { name: 'Lettuce' },
        { name: 'Grains' },
        { name: 'Fruit' },
        { name: 'Veggies'},
        { name: 'Nuts\n+\nSeeds' },
        { name: 'Dressing' }
    ],
    [
        { name: 'Rice' },
        { name: 'Veggies' },
        { name: 'Protein' },
        { name: 'Egg'},
        { name: 'Seeds' },
        { name: 'Sauce' }
    ]
    ]
;}

const toppings = [
    [
        { name: 'Apple', image: apple },
        { name: 'Banana', image: banana },
        { name: 'Raspberries', image: raspberries},
        { name: 'Blueberries', image: blueberries },
        { name: 'Peaches', image: peaches},
        { name: 'Dates', image: dates}
    ], 
    [
        { name: 'Hemp Seeds', image: hemp },
        { name: 'Chia Seeds', image: chia },
        { name: 'Flaxseeds', image: flax },
        { name: 'Sesame Seeds', image: sesame },
        { name: 'Pumpkin Seeds', image: pumpkin },
        { name: 'Sunflower Seeds', image: sunflower }
    ],
    [
        { name: 'Peanut Butter', image: peanut},
        { name: 'Almond Butter', image: almond},
        { name: 'Cashew Butter', image: cashew},
        { name: 'Hazelnut Butter', image: hazelnut},
        { name: 'Walnut Butter', image: walnut},
        { name: 'Sunflower Butter', image: sunflowerbutter}
    ],
    [
        { name: 'Almonds', image: almonds },
        { name: 'Walnuts', image: walnuts }
    ],
    [
        { name: 'Honey', image: honey },
        { name: 'Maple Syrup', image: maple }
    ],
    [
        { name: 'Cinnamon', image: cinnamon },
        { name: 'Bee Pollen', image: beepollen },
        { name: 'Chocolate Chips', image: chocchips },
        { name: 'Shredded Coconut', image: coconut },
        { name: 'Granola', image: granola },
        { name: 'Bran Flakes', image: branflakes }
    ],
    [
        { name: 'Brown Rice', image: brownrice },
        { name: 'Farro', image: farro },
        { name: 'Quinoa', image: quinoa },
        { name: 'Buckwheat', image: buckwheat },
        { name: 'Millet', image: millet },
        { name: 'Black Rice', image: blackrice }
    ],
    [
        { name: 'Tofu', image: tofu },
        { name: 'Chickpeas', image: chickpeas },
        { name: 'Lean Fish', image: salmon },
        { name: 'Chicken', image: chicken },
        { name: 'Tempeh', image: tempeh },
        { name: 'Black Beans', image: beans }
    ],
    [
        { name: 'Sweet Potato', image: sweetpotato},
        { name: 'Mushrooms', image: mushrooms},
        { name: 'Bell Pepper', image: pepper},
        { name: 'Beets', image: beets},
        { name: 'Carrots', image: carrots },
        { name: 'Zucchini', image: zucchini },
        { name: 'Onions', image: onion },
        { name: 'Cauliflower', image: cauliflower }
    ],
    [
        { name: 'Tahini', image: tahini },
        { name: 'Creamy Avocado', image: avo },
        { name: 'Sesame-vinaigrette', image: sesamevin },
        { name: 'Olive Oil', image: olive },
        { name: 'Balsamic Vinegar', image: balsamic },
        { name: 'Lemon Juice', image: lemon }
    ],
    [
        { name: 'Kale', image: kale },
        { name: 'Spinach', image: spinach },
        { name: 'Mixed Greens', image: mixedgreens },
        { name: 'Romaine', image: romaine }
    ], 
    [ 
        { name: 'Egg', image: egg }
    ],
    [ 
        { name: 'Gochujang', image: gochujang },
        { name: 'Spicy Siracha Peanut', image: thaisauce },
        { name: 'Chimichurri', image: chimichurri },
        { name: 'Cilantro Lime', image: cilantrolime }
    ],
    [ 
        { name: 'White Rice', image: gochujang },
        { name: 'Brown Rice', image: thaisauce },
        { name: 'Black Rice', image: chimichurri },
        { name: 'Wild Rice', image: cilantrolime }
    ]
];

const selectedToppingReducer = (state=[], action) => {
    switch (action.type) {
        case 'SELECT_TOPPING_Fruit':
            return toppings[0];  
        case 'SELECT_TOPPING_Seeds':
            return toppings[1];
        case 'SELECT_TOPPING_Nut Butter':
            return toppings[2];
        case 'SELECT_TOPPING_Nuts':
            return toppings[3];
        case 'SELECT_TOPPING_Drizzle':
            return toppings[4];
        case 'SELECT_TOPPING_Extras':
            return toppings[5];
        case 'SELECT_TOPPING_Grains':
            return toppings[6];
        case 'SELECT_TOPPING_Protein':
            return toppings[7];
        case 'SELECT_TOPPING_Veggies':
            return toppings[8];
        case 'SELECT_TOPPING_Dressing':
            return toppings[9];
        case 'SELECT_TOPPING_Lettuce':
            return toppings[10];
        case 'SELECT_TOPPING_Nuts\n+\nSeeds':
            return toppings[1];
        case 'SELECT_TOPPING_Rice':
            return toppings[11];
        case 'SELECT_TOPPING_Egg':
            return toppings[11];
        case 'SELECT_TOPPING_Sauce':
            return toppings[12];
        default:
            return state;
    };
};

const nutritionInfo = (state = '', action) => {
    if (action.type === 'NUTRITION') {
        return action.payload;
    }
    return state;
};

const makeToppingBubble = (state = [], action) => {
    if (action.type == 'ADD_TO_BOWL') {
        return [...state, { name: action.payload.name, image: action.payload.image }];   
    }
    else if (action.type == 'DELETE_BOWL_TOPPINGS') {
        return [];
    }
    return state;
};

const id = (state = '', action) => {
    if (action.type == 'ID') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    bowls: bowlsReducer,
    selectedBowl: selectedBowlReducer,
    toppings: toppingsReducer,
    selectedTopping: selectedToppingReducer,
    nutritionInfo,
    toppingBubbles: makeToppingBubble,
    id: id,
    form: formReducer
});


