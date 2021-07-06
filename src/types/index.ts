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
    [code: string]: Quarter;
}

export interface YearData {
    [year: string]: Year;
}

export interface Bound {
    start: Date;
    end: Date;
}
