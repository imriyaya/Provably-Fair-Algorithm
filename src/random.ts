import {createHash} from "node:crypto";

export namespace Random {
    export function randomWithMinMax(serverSeed: string, clientSeed: string, count: number, min: number, max: number): number {
        const hex = combine(serverSeed, clientSeed, count);
        const n = parseInt(hex, 16);
        return Math.max(min, Math.floor(n % (max + 1)));
    }

    export function combine(serverSeed: string, clientSeed: string, count: number): string {
        const hash = createHash('sha512');
        hash.update(`${serverSeed}-${clientSeed}-${count}`);
        return hash.digest('hex');
    }
}