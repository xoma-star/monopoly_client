import {getRandomInt} from "./getRandomInt"

const avas = [
    'https://firebasestorage.googleapis.com/v0/b/monopoly-c23f5.appspot.com/o/placeholders%2FcompanyLogos%2FIcCEVKWnqSo.jpg?alt=media&token=214a54cc-30b5-4fa9-a817-04222db2ae47',
    'https://firebasestorage.googleapis.com/v0/b/monopoly-c23f5.appspot.com/o/placeholders%2FcompanyLogos%2FJ89kpE1AXWU.jpg?alt=media&token=00187e1d-791b-4f48-92e5-83ef84120abd',
    'https://firebasestorage.googleapis.com/v0/b/monopoly-c23f5.appspot.com/o/placeholders%2FcompanyLogos%2FRL9XJGcazI4.jpg?alt=media&token=eb376c23-bd62-4bc4-b0ba-35a002c281f7',
    'https://firebasestorage.googleapis.com/v0/b/monopoly-c23f5.appspot.com/o/placeholders%2FcompanyLogos%2Fis3ITI4coyE.jpg?alt=media&token=7a3af8e3-d783-4232-bd47-ddf8bab3628d'
]

export const getRandomCompanyAva = () => {
    return avas[getRandomInt(0, avas.length) - 1]
}