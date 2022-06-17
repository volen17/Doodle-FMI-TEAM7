export interface Meeting {
  id: string;
  title: string;
  dateTimeStart: Date;
  dateTimeEnd: Date;
  location: string;
  description: string;
  owner: string;
  participants: string[];
  votes: any;
  duration: number;
}

export interface NewMeeting {
  email: string | null;
  title: string;
  description: string | undefined;
  location: string | undefined;
  startDate: any;
  endDate: any;
  times: Date[];
  duration: number;
}
