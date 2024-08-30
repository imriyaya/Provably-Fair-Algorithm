import {Seed} from "./seed";
import {Random} from "./random";

const serverSeed = Seed.generate();
const hashedServerSeed = Seed.hash(serverSeed);
const clientSeed = Seed.generate();

console.log(`Hashed server's seed: ${hashedServerSeed}`);
console.log(`Client's seed: ${clientSeed}`);

const v1: number[] = [];
for (let i = 0; i < 10; i++) {
    v1.push(Random.randomWithMinMax(serverSeed, clientSeed, i, 0, 100));
}
console.log(`Generated 10 times random values: ${v1}`);


console.log('# Time to verify')
console.log(`Reveal server's seed: ${serverSeed}`)
console.log(`Compare two hashed seeds:  ${hashedServerSeed === Seed.hash(serverSeed) ? 'matched!' : 'not matched!'}`)


const v2: number[] = []
for (let i = 0; i < 10; i++) {
    v2.push(Random.randomWithMinMax(serverSeed, clientSeed, i, 0, 100));
}
console.log(`Generated 10 times random values from revealed server's seed: ${v2}`);
console.log(`Compare two generated values:  ${v1.toString() === v2.toString() ? 'matched!' : 'not matched!'}`);