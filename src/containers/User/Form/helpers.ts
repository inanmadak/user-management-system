import { v4 as uuidv4 } from 'uuid';

import { GroupInfo, UserInfo } from 'common/interface';
import { UserFormValues } from './interface';

export const mapUserInfoToForm = ({ birthdate, group, ...rest }: UserInfo) => {
  return {
    ...rest,
    birthdate: birthdate.toISOString().split('T')[0],
    group: group?.id,
  };
};

export const mapUserValuesToUserInfo = (
  { birthdate, group, id, ...rest }: UserFormValues,
  groups: GroupInfo[],
): UserInfo => {
  return {
    ...rest,
    id: id || uuidv4(),
    birthdate: new Date(birthdate),
    group: groups.find(({ id }) => group === id) as GroupInfo,
  };
};
