import { quarters, years } from './data';
import { Quarter, Year, Bound } from './types';

/**
 * Gets the start and end time bounds for the quarter with the provided "quarter code".
 *
 * "Quarter code" is simply how quarters are shortened at UCSD. For instance,
 * "SP21" is Spring Quarter 2021.
 *
 * @param code The quarter code to find time bounds for.
 */
export function getQuarterBounds(code: keyof typeof quarters): Bound {
  const quarter = quarters[code];
  return {
    start: new Date(quarter.start),
    end: new Date(quarter.end),
  };
}

/**
 * Gets the quarter information for the quarter with the provided "quarter code".
 *
 * "Quarter code" is simply how quarters are shortened at UCSD. For instance,
 * "SP21" is Spring Quarter 2021.
 *
 * @param code The quarter code to find time bounds for.
 */
export function getQuarter(code: keyof typeof quarters): Quarter {
  const quarter = quarters[code];
  return {
    ...quarter,
    start: new Date(quarter.start),
    end: new Date(quarter.end),
  };
}

/**
 * Gets the start and end time bounds for the academic year with the provided
 * calendar years as bounds.
 *
 * The "code" here would be a sequence of years in the format "20xx-20xx".
 * Examples include "2021-2022", etc.
 *
 * Note that they must be consecutive years; there are no academic years
 * spanning 3 calendar years.
 *
 * @param code The year to find time bounds for.
 */
export function getYearBounds(code: keyof typeof years): Bound {
  const year = years[code];
  return {
    start: new Date(year.start),
    end: new Date(year.end),
  };
}

/**
 * Gets the year information for the academic year with the provided
 * calendar years as bounds.
 *
 * The "code" here would be a sequence of years in the format "20xx-20xx".
 * Examples include "2021-2022", etc.
 *
 * Note that they must be consecutive years; there are no academic years
 * spanning 3 calendar years.
 *
 * @param code The year to find time bounds for.
 */
export function getYear(code: keyof typeof years): Year {
  const year = years[code];
  return {
    ...year,
    start: new Date(year.start),
    end: new Date(year.end),
  };
}

/**
 * Returns the quarter code for the academic quarter we are currently in.
 */
export function getCurrentQuarter(): Quarter | undefined {
  const currentQuarter = Object.entries(quarters)
    .filter(([, quarter]) => {
      const quarterStartTime = new Date(quarter.start);
      const quarterEndTime = new Date(quarter.end);
      const now = new Date();
      return quarterStartTime <= now && now <= quarterEndTime;
    })
    .map(([, quarter]) => ({
      ...quarter,
      start: new Date(quarter.start),
      end: new Date(quarter.end),
    }))
    .slice(0, 1)
    .shift();
  return currentQuarter !== undefined ? currentQuarter : undefined;
}

/**
 * Returns the year code for the academic year we are currently in.
 */
export function getCurrentYear(): Year | undefined {
  const currentYear = Object.entries(years)
    .filter(([, year]) => {
      const yearStartTime = new Date(year.start);
      const yearEndTime = new Date(year.end);
      const now = new Date();
      return yearStartTime <= now && now <= yearEndTime;
    })
    .map(([, year]) => ({
      ...year,
      start: new Date(year.start),
      end: new Date(year.end),
    }))
    .slice(0, 1)
    .shift();
  return currentYear !== undefined ? currentYear : undefined;
}
