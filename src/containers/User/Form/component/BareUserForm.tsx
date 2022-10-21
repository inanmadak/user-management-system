import { Box, Button, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';

import { AppInput, AppSelect } from 'components/Form';
import { ERROR_MESSAGE } from 'common/constants';
import { BareUserFormProps } from '../interface';
import { BARE_USER_FORM_BOX_SX } from '../constants';
import { useAppFactory } from 'context/AppFactoryContext';
import { makeSelectOptions } from 'utils/misc';
import { PageTitle } from 'components/PageTitle/Component';
import styles from './styles.module.scss';

const UserFormSchema = Yup.object().shape({
  name: Yup.string().trim(ERROR_MESSAGE.Required).required(ERROR_MESSAGE.Required),
  birthdate: Yup.string().trim(ERROR_MESSAGE.Required).required(ERROR_MESSAGE.Required),
  group: Yup.string().trim(ERROR_MESSAGE.Required).required(ERROR_MESSAGE.Required),
});

export const BareUserForm: FC<BareUserFormProps> = ({ onCancel, onSubmit, ...props }) => {
  const { groups } = useAppFactory();

  return (
    <Box sx={BARE_USER_FORM_BOX_SX}>
      <div className={styles.formTitle}>
        <PageTitle title={props?.initialValues?.id ? 'Edit user' : 'Add new user'} />
      </div>
      <Formik validationSchema={UserFormSchema} onSubmit={onSubmit} validateOnMount {...props}>
        {({ isValid, values, isSubmitting }) => (
          <Form className={styles.bareUserForm}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <AppInput name='name' placeholder='Name' />
              </Grid>
              <Grid item xs={12}>
                <AppInput
                  name='birthdate'
                  type='date'
                  placeholder='Birthdate'
                  value={values.birthdate}
                  inputProps={{ max: new Date().toISOString().split('T')[0] }}
                />
              </Grid>
              <Grid item xs={8}>
                <AppSelect options={makeSelectOptions(groups)} name='group' multiline placeholder='Group' />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <Button type='button' onClick={onCancel} variant='outlined'>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button type='submit' variant='contained' disabled={!isValid || isSubmitting}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
