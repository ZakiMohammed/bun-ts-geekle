import { expect, it, describe } from "bun:test";
import { factorial } from './factorial';

describe('factorial', () => {
    it('should return 1 if n is 0', () => {
        expect(factorial(0)).toBe(1);
    });
    
    it('should return 1 if n is 1', () => {
        expect(factorial(1)).toBe(1);
    });
    
    it('should return 120 if n is 5', () => {
        expect(factorial(5)).toBe(120);
    });
    
    it('should return 3628800 if n is 10', () => {
        expect(factorial(10)).toBe(3628800);
    });
});