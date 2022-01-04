import { type } from "os"

export const homeObjOne = {
    id:'about',
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    descriptions: 'Get access to uor exclusice app that allows ypu to send unlimited transactions without getting chrged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require( '../../images/drawer.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText : false,
}


export type homeObjOneType = typeof homeObjOne


export const homeObjTwo = {
    id:'discover',
    lightBg:true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    descriptions: 'Get access to uor exclusice app that allows ypu to send unlimited transactions without getting chrged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require( '../../images/location.svg').default,
    alt: 'Car',
    dark: false,
    primary: true,
    darkText : true,
}
export const homeObjTree = {
    id:'signup',
    lightBg:true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    descriptions: 'Get access to uor exclusice app that allows ypu to send unlimited transactions without getting chrged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require( '../../images/map.svg').default,
    alt: 'Car',
    dark: false,
    primary: true,
    darkText : true,
}

