import {
  centsToReal, getPriceOfMinutes, getTypePlanLabel, getValueOfPlan, getAmountDefault,
} from './utils';
import PLAN from './app/constants';

it('Convert cents to real', () => {
  const cents = 10230;
  const real = centsToReal(cents);
  expect(real).toMatch(/102,30/);
});

it('Get price of one minute', () => {
  const DDD = { origin: '11', destiny: '17' };
  const priceOfMinute = getPriceOfMinutes(DDD);
  expect(priceOfMinute).toBe(1.70);
});

it('Get type thirty', () => {
  const type = PLAN.TALKMORE.THIRTY;
  const planOfType = getTypePlanLabel(type);
  expect(planOfType).toEqual('Fale mais 30');
});

it('Get value of plan', () => {
  const valueOfPlan = getValueOfPlan(PLAN.TALKMORE.THIRTY, 80, 1.40);
  expect(valueOfPlan).toBe(7700);
});

it('Get value ', () => {
  const valueOfPlan = getAmountDefault(80, 1.40);
  expect(valueOfPlan).toBe(11200);
});
