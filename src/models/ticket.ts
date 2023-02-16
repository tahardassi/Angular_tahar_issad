enum Major {
  SI = 'SI', 
  GE = 'GE', 
  GB = 'GB'
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: Major;
}
