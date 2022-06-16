export interface Meeting {
  id: string;
  title: string;
  dateTime: Date;
  location: string;
  description: string;
  owner: string;
  participants: string[];
}
