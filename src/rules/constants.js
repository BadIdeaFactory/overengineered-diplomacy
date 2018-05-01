export const TURN_SEASONS = {
  SPRING: 'SPRING',
  FALL: 'FALL'
}

export const GREAT_POWERS = {
  AUSTRIA: 'AUSTRIA',
  ENGLAND: 'ENGLAND',
  FRANCE: 'FRANCE',
  GERMANY: 'GERMANY',
  ITALY: 'ITALY',
  RUSSIA: 'RUSSIA',
  TURKEY: 'TURKEY'
}

export const UNIT_COLORS = {
  RED: 'RED',
  DARK_BLUE: 'DARK_BLUE',
  LIGHT_BLUE: 'LIGHT_BLUE',
  BLACK: 'BLACK',
  GREEN: 'GREEN',
  WHITE: 'WHITE',
  YELLOW: 'YELLOW'
}

export const UNIT_TYPES = {
  ARMY: 'ARMY',
  FLEET: 'FLEET'
}

export const GREAT_POWERS_INFO = {
  AUSTRIA: {
    displayName: 'Austria',
    displayEmoji: '🇦🇹',
    unitColor: UNIT_COLORS.RED
  },
  ENGLAND: {
    displayName: 'England',
    displayEmoji: '🇬🇧',
    unitColor: UNIT_COLORS.DARK_BLUE
  },
  FRANCE: {
    displayName: 'France',
    displayEmoji: '🇫🇷',
    unitColor: UNIT_COLORS.LIGHT_BLUE
  },
  GERMANY: {
    displayName: 'Germany',
    displayEmoji: '🇩🇪',
    unitColor: UNIT_COLORS.BLACK
  },
  ITALY: {
    displayName: 'Italy',
    displayEmoji: '🇮🇹',
    unitColor: UNIT_COLORS.GREEN
  },
  RUSSIA: {
    displayName: 'Russia',
    displayEmoji: '🇷🇺',
    unitColor: UNIT_COLORS.WHITE
  },
  TURKEY: {
    displayName: 'Turkey',
    displayEmoji: '🇹🇷',
    unitColor: UNIT_COLORS.YELLOW
  },
}

const PROVINCE_TYPES = {
  OWNED: 'OWNED',
  NEUTRAL: 'NEUTRAL',
  WATER: 'WATER'
}

export const PROVINCES = {
  // -- AUSTRIA --
  BOH: {
    name: 'Bohemia',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.AUSTRIA
  },
  BUD: {
    name: 'Budapest',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.AUSTRIA
  },
  GAL: {
    name: 'Galicia',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.AUSTRIA
  },
  TRI: {
    name: 'Trieste',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.AUSTRIA
  },
  TYR: {
    name: 'Tyrolia',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.AUSTRIA
  },
  VIE: {
    name: 'Vienna',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.AUSTRIA
  },
  // -- ENGLAND --
  CLY: {
    name: 'Clyde',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ENGLAND
  },
  EDI: {
    name: 'Edinburgh',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ENGLAND
  },
  LVP: {
    name: 'Liverpool',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ENGLAND
  },
  LON: {
    name: 'London',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ENGLAND
  },
  WAL: {
    name: 'Wales',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ENGLAND
  },
  YOR: {
    name: 'Yorkshire',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ENGLAND
  },
  // -- FRANCE --
  BRE: {
    name: 'Brest',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.FRANCE
  },
  BUR: {
    name: 'Burgundy',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.FRANCE
  },
  GAS: {
    name: 'Gascony',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.FRANCE
  },
  MAR: {
    name: 'Marseilles',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.FRANCE
  },
  PAR: {
    name: 'Paris',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.FRANCE
  },
  PIC: {
    name: 'Picardy',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.FRANCE
  },
  // -- GERMANY --
  BER: {
    name: 'Berlin',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.GERMANY
  },
  KIE: {
    name: 'Kiel',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.GERMANY
  },
  MUN: {
    name: 'Munich',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.GERMANY
  },
  PRU: {
    name: 'Prussia',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.GERMANY
  },
  RUH: {
    name: 'Ruhr',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.GERMANY
  },
  SIL: {
    name: 'Silesia',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.GERMANY
  },
  // -- ITALY
  APU: {
    name: 'Apulia',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ITALY
  },
  NAP: {
    name: 'Naples',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ITALY
  },
  PIE: {
    name: 'Piedmont',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ITALY
  },
  ROM: {
    name: 'Rome',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ITALY
  },
  TUS: {
    name: 'Tuscany',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ITALY
  },
  VEN: {
    name: 'Venice',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.ITALY
  },
  // -- RUSSIA --
  FIN: {
    name: 'Finland',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.RUSSIA
  },
  LVN: {
    name: 'Livonia',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.RUSSIA
  },
  MOS: {
    name: 'Moscow',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.RUSSIA
  },
  SEV: {
    name: 'Sevastopol',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.RUSSIA
  },
  STP: {
    name: 'St. Petersburg',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.RUSSIA
  },
  UKR: {
    name: 'Ukraine',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.RUSSIA
  },
  WAR: {
    name: 'Warsaw',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.RUSSIA
  },
  // -- TURKEY --
  ANK: {
    name: 'Ankara',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.TURKEY
  },
  ARM: {
    name: 'Armenia',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.TURKEY
  },
  CON: {
    name: 'Constantinople',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.TURKEY
  },
  SMY: {
    name: 'Smyrna',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.TURKEY
  },
  SYR: {
    name: 'Syria',
    type: PROVINCE_TYPES.OWNED,
    owner: GREAT_POWERS.TURKEY
  },
  // -- NEUTRAL PROVINCES --
  ALB: {
    name: 'Albania',
    type: PROVINCE_TYPES.NEUTRAL
  },
  BEL: {
    name: 'Belgium',
    type: PROVINCE_TYPES.NEUTRAL
  },
  BUL: {
    name: 'Bulgaria',
    type: PROVINCE_TYPES.NEUTRAL
  },
  DEN: {
    name: 'Denmark',
    type: PROVINCE_TYPES.NEUTRAL
  },
  GRE: {
    name: 'Greece',
    type: PROVINCE_TYPES.NEUTRAL
  },
  HOL: {
    name: 'Holland',
    type: PROVINCE_TYPES.NEUTRAL
  },
  NWY: {
    name: 'Norway',
    type: PROVINCE_TYPES.NEUTRAL
  },
  NAF: {
    name: 'North Africa',
    type: PROVINCE_TYPES.NEUTRAL
  },
  POR: {
    name: 'Portugal',
    type: PROVINCE_TYPES.NEUTRAL
  },
  RUM: {
    name: 'Rumania',
    type: PROVINCE_TYPES.NEUTRAL
  },
  SER: {
    name: 'Serbia',
    type: PROVINCE_TYPES.NEUTRAL
  },
  SPA: {
    name: 'Spain',
    type: PROVINCE_TYPES.NEUTRAL
  },
  SWE: {
    name: 'Sweden',
    type: PROVINCE_TYPES.NEUTRAL
  },
  TUN: {
    name: 'Tunis',
    type: PROVINCE_TYPES.NEUTRAL
  },
  // -- BODIES OF WATER --
  ADR: {
    name: 'Adriatic Sea',
    type: PROVINCE_TYPES.WATER
  },
  AEG: {
    name: 'Aegean Sea',
    type: PROVINCE_TYPES.WATER
  },
  BAL: {
    name: 'Baltic Sea',
    type: PROVINCE_TYPES.WATER
  },
  BAR: {
    name: 'Barents Sea',
    type: PROVINCE_TYPES.WATER
  },
  BLA: {
    name: 'Black Sea',
    type: PROVINCE_TYPES.WATER
  },
  EAS: {
    name: 'Eastern Mediterranean',
    type: PROVINCE_TYPES.WATER
  },
  ENG: {
    name: 'English Channel',
    type: PROVINCE_TYPES.WATER
  },
  BOT: {
    name: 'Gulf of Bothnia',
    type: PROVINCE_TYPES.WATER
  },
  GOL: {
    name: 'Gulf of Lyon',
    type: PROVINCE_TYPES.WATER
  },
  HEL: {
    name: 'Helgoland Bight',
    type: PROVINCE_TYPES.WATER
  },
  ION: {
    name: 'Ionian Sea',
    type: PROVINCE_TYPES.WATER
  },
  IRI: {
    name: 'Irish Sea',
    type: PROVINCE_TYPES.WATER
  },
  MID: {
    name: 'Mid-Atlantic Ocean',
    type: PROVINCE_TYPES.WATER
  },
  NAT: {
    name: 'North Atlantic Ocean',
    type: PROVINCE_TYPES.WATER
  },
  NTH: {
    name: 'North Sea',
    type: PROVINCE_TYPES.WATER
  },
  NRG: {
    name: 'Norwegian Sea',
    type: PROVINCE_TYPES.WATER
  },
  SKA: {
    name: 'Skagerrak',
    type: PROVINCE_TYPES.WATER
  },
  TYN: {
    name: 'Tyrrhenian Sea',
    type: PROVINCE_TYPES.WATER
  },
  WES: {
    name: 'Western Mediterranean',
    type: PROVINCE_TYPES.WATER
  }
}

export const STARTING_POSITIONS = {
  // -- AUSTRIA --
  VIE: {
    player: GREAT_POWERS.AUSTRIA,
    unitType: UNIT_TYPES.ARMY
  },
  BUD: {
    player: GREAT_POWERS.AUSTRIA,
    unitType: UNIT_TYPES.ARMY
  },
  TRI: {
    player: GREAT_POWERS.AUSTRIA,
    unitType: UNIT_TYPES.FLEET
  },
  // -- ENGLAND --
  LON: {
    player: GREAT_POWERS.ENGLAND,
    unitType: UNIT_TYPES.FLEET
  },
  EDI: {
    player: GREAT_POWERS.ENGLAND,
    unitType: UNIT_TYPES.FLEET
  },
  LVP: {
    player: GREAT_POWERS.ENGLAND,
    unitType: UNIT_TYPES.ARMY
  },
  // -- FRANCE --
  PAR: {
    player: GREAT_POWERS.FRANCE,
    unitType: UNIT_TYPES.ARMY
  },
  MAR: {
    player: GREAT_POWERS.FRANCE,
    unitType: UNIT_TYPES.ARMY
  },
  BRE: {
    player: GREAT_POWERS.FRANCE,
    unitType: UNIT_TYPES.FLEET
  },
  // -- GERMANY --
  BER: {
    player: GREAT_POWERS.GERMANY,
    unitType: UNIT_TYPES.ARMY
  },
  MUN: {
    player: GREAT_POWERS.GERMANY,
    unitType: UNIT_TYPES.ARMY
  },
  KIE: {
    player: GREAT_POWERS.GERMANY,
    unitType: UNIT_TYPES.FLEET
  },
  // -- ITALY --
  ROM: {
    player: GREAT_POWERS.ITALY,
    unitType: UNIT_TYPES.ARMY
  },
  VEN: {
    player: GREAT_POWERS.ITALY,
    unitType: UNIT_TYPES.ARMY
  },
  NAP: {
    player: GREAT_POWERS.ITALY,
    unitType: UNIT_TYPES.FLEET
  },
  // -- RUSSIA --
  MOS: {
    player: GREAT_POWERS.RUSSIA,
    unitType: UNIT_TYPES.ARMY
  },
  SEV: {
    player: GREAT_POWERS.RUSSIA,
    unitType: UNIT_TYPES.FLEET
  },
  WAR: {
    player: GREAT_POWERS.RUSSIA,
    unitType: UNIT_TYPES.ARMY
  },
  STP: {
    player: GREAT_POWERS.RUSSIA,
    unitType: UNIT_TYPES.FLEET
  },
  // -- TURKEY --
  ANK: {
    player: GREAT_POWERS.TURKEY,
    unitType: UNIT_TYPES.FLEET
  },
  CON: {
    player: GREAT_POWERS.TURKEY,
    unitType: UNIT_TYPES.ARMY
  },
  SMY: {
    player: GREAT_POWERS.TURKEY,
    unitType: UNIT_TYPES.ARMY
  }
}
