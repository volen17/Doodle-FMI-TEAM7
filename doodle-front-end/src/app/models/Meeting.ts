export interface Meeting {
  id: string;
  title: string;
  dateTimeStart: Date;
  dateTimeEnd: Date;
  location: string;
  description: string;
  owner: string;
  participants: string[];
}
