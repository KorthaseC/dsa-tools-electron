export interface AlchemyDiceResult {
  diceValueRange: [number, number];
  alchemicResult: string;
  category?: string;
}

export interface PurityOption {
  text: string;
  mod: number;
  qs?: number;
}

export interface DiceChangeResult {
  geniusPoints: number;
  diceResult: number;
}
