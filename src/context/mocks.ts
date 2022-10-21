import { v4 as uuidv4 } from 'uuid';

import { GroupInfo, UserInfo } from 'common/interface';

/**
 * Normally we would have an API but I will just add some random data with these mocks.
 */

const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min)) + min;

const NAMES = ['John', 'Jasmin', 'Amanda', 'Joseph', 'Joe', 'Sarah', 'Mia', 'Marie', 'Helen', 'Ben', 'Bill'];

const SURNAMES = ['Green', 'Blue', 'Carmack', 'Zuckerberg', 'Snow', 'Rain', 'Beyazit', 'Ozmen', 'Antic'];

const randomDate = () => new Date(randomNumber(1980, 2005), randomNumber(0, 12), randomNumber(0, 28)); // for simplicity and validity purposes

export const MOCK_GROUPS: GroupInfo[] = [
  {
    id: uuidv4(),
    name: 'Lions',
    createdAt: randomDate(),
  },
  {
    id: uuidv4(),
    name: 'Tigers',
    createdAt: randomDate(),
  },
  {
    id: uuidv4(),
    name: 'Bulls',
    createdAt: randomDate(),
  },
  {
    id: uuidv4(),
    name: 'Eagles',
    createdAt: randomDate(),
  },
];

const randomFullName = () => `${NAMES[randomNumber(0, NAMES.length)]} ${SURNAMES[randomNumber(0, SURNAMES.length)]}`;

const randomGroup = () => MOCK_GROUPS[randomNumber(0, MOCK_GROUPS.length)];

export const getMockUsers = () =>
  Array.from({ length: 20 }).map((x, i) => ({
    id: uuidv4(),
    name: randomFullName(),
    birthdate: randomDate(),
    group: randomGroup(),
  }));

export const MOCK_USERS: UserInfo[] = getMockUsers();
