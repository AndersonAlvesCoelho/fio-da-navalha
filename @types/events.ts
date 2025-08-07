export type EnumEventType = 'daily' | 'monthly' | 'birthday';

export interface IEvent {
  id: string;
  title: string;
  description?: string;
  location?: string;
  type: EnumEventType;
  date: string;
  time?: string;
}

export type EventItem = {
  title: string;
  time: string;
  type: EnumEventType;
};

export type ISection = {
  title: string; // data 'YYYY-MM-DD'
  data: EventItem[];
};



