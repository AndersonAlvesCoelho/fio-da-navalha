export type EnumEventType = 'daily' | 'weekly' | 'monthly' | 'birthday' | 'special' | 'other';


export type EventItem = {
  id: string;
  title: string;
  description?: string;
  timeStart: string; // HH:mm
  timeEnd: string;   // HH:mm
  location: string;
  type: EnumEventType;
  thumbnail: string
  date: string
};

export type ISection = {
  title: string; // data 'YYYY-MM-DD'
  data: EventItem[];
};