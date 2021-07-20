/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Monsters: undefined;
  Quests: undefined;
  Other: undefined;
};

export type TabOneParamList = {
  Monsters: undefined;
  MonsterDetails: undefined;
};

export type TabTwoParamList = {
  Quests: undefined;
};

export type TabThreeParamList = {
  Other: undefined;
};

export type MonsterItemData = {
  item: MonsterItem
}

export type MonsterItem = {
  name: String
}
