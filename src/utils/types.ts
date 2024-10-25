import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    color: 'red'
  }
}));

export interface memberType {
  register_number: string;
  name: string;
  house_name: string;
  fathers_name: string;
  occupation: string;
  male_members: number;
  female_members: number;
  area: string;
  mobile_number: string;
  blood_group: string;
  ration_card_number: string;
}
