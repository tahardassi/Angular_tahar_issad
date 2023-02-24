import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Voyage à Lisbonne',
    description: 'Visiter la ville',
    date: dateToday,
    student: 'Paul',
    major: 'SI',
    archived: false
  },
  {
    title: 'Voyage à Paris',
    description: 'Rentrer chez les parents',
    date: dateToday,
    student: 'Anakinh',
    major: 'GE',
    archived: false
  },
];
