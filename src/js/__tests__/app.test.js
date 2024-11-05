import { GoblinGame } from '../app';

test('should pass test', () => {
  const goblin = new GoblinGame();
  expect(goblin.blinkInterval).toBe(1000);
});
