# Quarter And Year Information at UCSD

This repo contains types and easy to import information for all the academic quarters and years at UCSD.

## Installation

``` sh
npm install ucsd-quarters-years
# or
yarn add ucsd-quarters-years
```

## Usage

``` typescript
import { getCurrentQuarter, getQuarter, quarters, years } from 'ucsd-quarters-years';

console.log(quarters.FA20);
// {
//   code: 'FA20',
//   name: 'Fall Quarter 2020',
//   start: '2020-09-28T00:00:00.000-07:00',
//   end: '2020-12-19T00:00:00.000-08:00'
// }

console.log(years['2020-2021']);
// {
//   name: '2020-2021',
//   start: '2020-09-28T00:00:00.000-07:00',
//   end: '2021-06-11T00:00:00.000-07:00'
// }

console.log(getQuarter('FA20'));
// Same as first call

console.log(getCurrentQuarter());
// Will return the current quarter, depending on the current time.
```
