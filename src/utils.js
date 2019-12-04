import PLAN from './app/constants';

export function getTypePlanLabel(type) {
  const planType = {
    [PLAN.TALKMORE.THIRTY]: 'Fale mais 30',
    [PLAN.TALKMORE.SIXTY]: 'Fale mais 60',
    [PLAN.TALKMORE.ONE_HUNDRED_TWENTY]: 'Fale mais 120',
  };
  return planType[type] || type;
}

export function getPriceOfMinutes({ origin, destiny }) {
  switch (true) {
    case origin === PLAN.CITY_CODE[11] && destiny === PLAN.CITY_CODE[16]:
      return 1.90;
    case origin === PLAN.CITY_CODE[11] && destiny === PLAN.CITY_CODE[17]:
      return 1.70;
    case origin === PLAN.CITY_CODE[11] && destiny === PLAN.CITY_CODE[18]:
      return 0.90;
    case origin === PLAN.CITY_CODE[16] && destiny === PLAN.CITY_CODE[11]:
      return 2.90;
    case origin === PLAN.CITY_CODE[17] && destiny === PLAN.CITY_CODE[11]:
      return 2.70;
    case origin === PLAN.CITY_CODE[18] && destiny === PLAN.CITY_CODE[11]:
      return 1.90;
    default:
      return null;
  }
}

export function getValueOfPlan(type, minutes, amount) {
  const amountPlanType = {
    [PLAN.TALKMORE.THIRTY]: 30,
    [PLAN.TALKMORE.SIXTY]: 60,
    [PLAN.TALKMORE.ONE_HUNDRED_TWENTY]: 120,
  };
  return getMinutesCost(minutes - amountPlanType[type], amount);
}

const getMinutesCost = (currentMinutes, amount) => {
  if (currentMinutes <= 0) {
    return 0;
  }
  const minutesCost = currentMinutes * amount;
  return (minutesCost + (10 * minutesCost)) * 10 || 0;
};

export const getAmountDefault = (minutes, amount) => (amount * minutes) * 100 || 0;

export function centsToReal(cents) {
  return (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
