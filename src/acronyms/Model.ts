/**
 * TODO
 */
type Definition = {
  meaning: string;
  explanation: string;
  category: string[];
};

/**
 * TODO
 */
type Acronym = {
  acronym: string;
  definitions: Definition[];
  connections: string[];
};

export type { Acronym, Definition };
