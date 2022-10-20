import { v4 as uuidv4 } from 'uuid';

import { UserInfo } from 'common/interface';

const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min)) + min;

const NAMES = ['John', 'Jasmin', 'Amanda', 'Joseph', 'Joe', 'Sarah', 'Mia', 'Marie', 'Helen', 'Ben', 'Bill'];

const SURNAMES = ['Green', 'Blue', 'Carmack', 'Zuckerberg', 'Snow', 'Rain', 'Beyazit', 'Ozmen', 'Antic'];

const DEFAULT_GROUPS = ['Lions', 'Tigers', 'Bulls'];

const randomFullName = () => `${NAMES[randomNumber(0, NAMES.length)]} ${SURNAMES[randomNumber(0, SURNAMES.length)]}`;

const randomGroup = () => DEFAULT_GROUPS[randomNumber(0, DEFAULT_GROUPS.length)];

const randomDate = () => new Date(randomNumber(1980, 2005), randomNumber(0, 12), randomNumber(0, 28)); // for simplicity and validity purposes

export const getMockUsers = () =>
  Array.from({ length: 20 }).map((x, i) => ({
    id: uuidv4(),
    name: randomFullName(),
    birthdate: randomDate(),
    group: randomGroup(),
  }));

export const MOCK_USERS: UserInfo[] = getMockUsers();
