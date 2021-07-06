export interface Quarter {
    name: string;
    code: string;
    start: Date;
    end: Date;
}

export interface Year {
    name: string;
    start: Date;
    end: Date;
}

export interface QuarterData {
  [key: string]: {
    code: string;
    name: string;
    start: string;
    end: string;
  };
}

export interface YearData {
  [key: string]: {
    name: string;
    start: string;
    end: string;
  };
}

export interface Bound {
    start: Date;
    end: Date;
}
