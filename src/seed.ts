import {createHash, randomBytes} from "node:crypto";

export namespace Seed {
    export function generate(): string {
        const byteLength = Math.ceil(64 / 2);
        const buffer = randomBytes(byteLength);
        return buffer.toString('hex').slice(0, 64);
    }

    export function hash(seed: string): string {
        const hash = createHash('sha256');
        hash.update(seed);
        return hash.digest('hex');
    }
}