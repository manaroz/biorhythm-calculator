// Biorhythm calculation https://en.wikipedia.org/wiki/Biorhythm_(pseudoscience)#Calculation

import { calculateBiorhythms } from './calculations';

it('calculates the biorhythm', () => {
    const { physical } = calculateBiorhythms('1994-01-06', '2022-05-21');
    expect(physical).toBeCloseTo(-0.1362);
});

it('calculates the biorhythm', () => {
    const { emotional } = calculateBiorhythms('1994-01-06', '2022-05-21');
    expect(emotional).toBeCloseTo(0.4339);
});

it('calculates the biorhythm', () => {
    const { intellectual } = calculateBiorhythms('1994-01-06', '2022-05-21');
    expect(intellectual).toBeCloseTo(0.0000);
});