import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { Label1 } from 'baseui/typography';
import { useToasts } from 'react-toast-notifications';

import PLAN from '../app/constants';
import PhonePlan from '../Plan/PhonePlan';
import { getPriceOfMinutes } from '../utils';
import InputField from '../common/InputField';

const { THIRTY, SIXTY, ONE_HUNDRED_TWENTY } = PLAN.TALKMORE;
const TEXT_HOME = `FaleMais é o novo produto da Telzir.
Escolha um Plano para calcular o valor da ligação, só será cobrado os minutos excedentes.
Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto.`;

const HomeGrid = () => {
  const [flatRate, setFlatRate] = useState([]);
  const { addToast } = useToasts();
  const amount = getPriceOfMinutes(flatRate);
  return (
    <Block display="grid" gridTemplateRows={['auto', 'auto', '100px 200px 400px']}>
      <Block margin="0 auto" width={['100%', '100%', '50%']}>
        <Label1>
          {TEXT_HOME}
        </Label1>
      </Block>
      <Formik
        initialValues={{
          origin: '',
          destiny: '',
          minutes: '',
        }}
        validationSchema={Yup.object().shape({
          origin: Yup.string()
            .required('Informe o DDD de origem!')
            .min(2, 'Deve conter 2 digitos!')
            .max(2, 'Apenas 2 digitos!'),
          destiny: Yup.string()
            .required('Informe o DDD de destino!')
            .min(2, 'Deve conter 2 digitos!')
            .max(2, 'Apenas 2 digitos!'),
          minutes: Yup.number()
            .required('Informe o Tempo de ligação!'),
        })}
        onSubmit={async ({ origin, destiny, minutes }, { setSubmitting }) => {
          if (origin !== '11' && origin !== '16' && origin !== '17' && origin !== '18') {
            addToast('DDD deve ser 11, 16, 17 ou 18', { appearance: 'error' });
          }
          const isValidDDD = getPriceOfMinutes({ origin, destiny });
          console.log(isValidDDD);
          if (!isValidDDD) {
            const message = origin === '11' ? 'DDD de destino pode ser apenas 16, 17 e 18' : 'DDD de destino pode ser apenas 11';
            addToast(message, { appearance: 'error' });
          }
          setFlatRate({ origin, destiny, minutes });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Block
              display="grid"
              justifyContent="center"
              gridTemplateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', '250px 250px 250px']}
              justifyItems="end"
              gridColumnGap="scale200"
              gridTemplateRows="auto"
            >
              <Block width="100%" gridColumn={['1 / 4', '1 / 4', '1']}>
                <Field name="origin" label="DDD Origem" component={InputField} />
              </Block>
              <Block width="100%" gridColumn={['1 / 4', '1 / 4', '2']}>
                <Field name="destiny" label="DDD Destino" component={InputField} />
              </Block>
              <Block width="100%" gridColumn={['1 / 4', '1 / 4', '3']}>
                <Field name="minutes" label="Tempo de ligação" component={InputField} />
              </Block>
              <Button
                type="submit"
                isLoading={isSubmitting}
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      ...$theme.typography.font200,
                      gridColumnStart: 3,
                    }),
                  },
                }}
              >
                  Calcular
              </Button>
            </Block>
          </Form>
        )}
      </Formik>
      <Block
        marginTop="10px"
        display="grid"
        justifyContent="center"
        gridTemplateColumns={['300px', '300px', '300px 300px 300px']}
        gridTemplateRows="auto auto auto"
        gridColumnGap="scale800"
        gridRowGap="scale400"
      >
        <PhonePlan amount={amount} type={THIRTY} {...flatRate} />
        <PhonePlan amount={amount} type={SIXTY} {...flatRate} />
        <PhonePlan amount={amount} type={ONE_HUNDRED_TWENTY} {...flatRate} />
      </Block>
    </Block>
  );
};

export default HomeGrid;
