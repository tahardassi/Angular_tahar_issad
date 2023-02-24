import { Ticket } from '../models/ticket';
import { STUDENTS_MOCKED } from './student.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Voyage à Lisbonne',
    description: 'Visiter la ville',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: 'SI',
    archived: false
  },
  {
    title: 'Voyage à Paris',
    description: 'Rentrer chez les parents',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: 'GE',
    archived: false
  },
];
