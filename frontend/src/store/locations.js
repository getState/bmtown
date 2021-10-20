import { atom } from 'recoil';

export const myLocation = atom({
  key: 'myLocation', 
    default: {
        x: Math.floor(Math.random()*100-50),
        y: Math.floor(Math.random()*100-50),
        avatar: Math.floor(Math.random()*3),
        direction: "down",
        toggle: -1
    }
});

export const otherLocations = atom({
    key: 'otherLocations',
    default: new Map()
})

