import { atom } from 'recoil';

export const myLocation = atom({
  key: 'myLocation', 
    default: {
        x: 0,
        y: 0,
        direction: "down",
        toggle: -1
    }
});

export const otherLocations = atom({
    key: 'otherLocations',
    default: []
})

