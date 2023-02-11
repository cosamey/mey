<script setup>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
import { trackGoal } from 'fathom-client';

const name = ref('');
const email = ref('');
const company = ref('');
const budget = ref('');
const message = ref('');

const options = [
  { key: 'less then 5K', label: '&lt; 5K' },
  { key: '5-10K', label: '5-10K' },
  { key: '10-20K', label: '10-20K' },
  { key: '20-50K', label: '20-50K' },
  { key: 'more then 50K', label: '&gt; 50K' },
];

const mail = useMail();
const sent = ref(false);
const error = ref('');

function send() {
  mail
    .send({
      from: {
        name: name.value,
        address: email.value,
      },
      replyTo: email.value,
      subject: 'Message from website',
      text: `Name: ${budget.value}\nCompany: ${company.value}\nBudget: ${budget.value}\n\n${message.value}`,
    })
    .then(() => {
      sent.value = true;
    })
    .catch((e) => {
      error.value = e.message;
      console.error('Something went wrong: ' + e.message);
    });

  name.value = '';
  email.value = '';
  company.value = '';
  budget.value = '';
  message.value = '';

  trackGoal('V2KWLOPR', 0);
}
</script>

<template>
  <form @submit.prevent="send" class="flex flex-col gap-[5vw] sm:gap-[2.5vw]">
    <InputGroup id="name" label="Name">
      <Input v-model="name" id="name" name="name" autocomplete="name" required />
    </InputGroup>
    <InputGroup id="email" label="Email">
      <Input v-model="email" type="email" id="email" name="email" autocomplete="email" required />
    </InputGroup>
    <InputGroup id="company" label="Company" optional>
      <Input v-model="company" id="company" name="company" autocomplete="organization" />
    </InputGroup>
    <RadioGroup v-model="budget" name="budget">
      <RadioGroupLabel class="text-[5vw] sm:text-[3vw] lg:text-[1.5vw]">
        Budget
        <span class="opacity-50">(EUR)</span>
      </RadioGroupLabel>
      <div class="mt-[1vw] flex flex-wrap items-center gap-[3vw] sm:gap-[1.5vw]">
        <RadioGroupOption
          as="template"
          v-for="option in options"
          :key="option.key"
          :value="option.key"
          v-slot="{ checked }"
        >
          <div
            class="inline-flex cursor-pointer items-center justify-center rounded-full border-2 px-[4vw] py-[2vw] transition-colors duration-300 focus:outline-none sm:px-[2vw] sm:py-[1vw]"
            :class="{
              'border-primary bg-primary': checked,
              'border-white bg-transparent': !checked,
            }"
          >
            <span
              v-html="option.label"
              class="select-none text-[4vw] sm:text-[2vw] lg:text-[1vw]"
            ></span>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
    <InputGroup id="message" label="Tell us more">
      <Textarea v-model="message" id="message" name="message" required />
    </InputGroup>
    <div
      class="mt-[2vw] flex flex-col items-center justify-between gap-[5vw] sm:mt-[1vw] sm:flex-row sm:items-start sm:gap-[3vw] lg:mt-[.5vw]"
    >
      <div>
        <p v-if="sent" class="text-green-500">Form submitted successfully!</p>
        <p v-if="error" class="text-red-500">There was an error sending the form.</p>
      </div>
      <button
        type="submit"
        class="inline-flex w-full items-center justify-center rounded-full border-2 border-primary bg-primary px-[12vw] py-[4vw] text-[5vw] font-medium leading-normal text-white transition-transform duration-300 hover:scale-90 sm:w-auto sm:px-[6vw] sm:py-[2vw] sm:text-[3vw] lg:px-[3vw] lg:py-[1vw] lg:text-[1.5vw]"
      >
        Send
      </button>
    </div>
  </form>
</template>
