import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Titre 1',
    description: '',
    date: dateToday,
    student: 'Paul'
  },
  {
    title: 'Titre 2',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin'
  },
];
