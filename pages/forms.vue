<template>
  <v-card class="ma-4 pa-4">
    <Form as="v-form" :validation-schema="schema" @submit="onSubmit">
      <!-- This method uses Higher-order component API to validate vuetify inputs -->
      <Field v-slot="{ field, errors }" name="name">
        <v-text-field v-bind="field" label="ID" :error-messages="errors" />
      </Field>

      <TextFieldWithValidation name="email" label="Email" type="email" />

      <TextFieldWithValidation name="password" label="Password" type="password" />

      <TextFieldWithValidation name="passwordConfirm" label="Password Confirmation" type="password" />

      <Field v-slot="{ value, handleChange, errors }" name="terms" :value="true" type="checkbox">
        <v-checkbox :model-value="value" label="Do you agree?" color="primary" :error-messages="errors" @update:modelValue="handleChange" />
      </Field>

      <v-btn color="primary" class="mr-4" type="submit"> Submit </v-btn>
    </Form>
  </v-card>
</template>

<script setup>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  name: yup
    .string()
    .required(({ label }) => `${label}는 필수 입력사항입니다.`)
    .label('ID'),
  email: yup.string().email().required().label('E-mail'),
  password: yup.string().min(6).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required()
    .label('Password confirmation'),
  terms: yup.boolean().required().oneOf([true], '동의에 체크해 주세요'),
});

function onSubmit(values) {
  console.log('Submitted with', values);
}
</script>
