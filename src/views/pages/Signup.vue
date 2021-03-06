<template>
  <div class="wrapper">
    <div class="content content--full content--flex bg-light">
      <form class="form bg-white" @submit.prevent="handleSubmit">
        <h1 class="form__heading">Create your account</h1>
        <div class="form__row form__row--flex">
          <div class="form__col">
            <label for="Firstname" class="form__label">Firstname: </label
            ><input
              type="text"
              id="Firstname"
              class="form__textfield"
              placeholder="John"
              v-model="firstName"
            />
          </div>
          <div class="form__col">
            <label for="Lastname" class="form__label">Lastname: </label
            ><input
              type="text"
              id="Lastname"
              class="form__textfield"
              placeholder="Doe"
              v-model="lastName"
            />
          </div>
        </div>
        <div class="form__row">
          <label for="Email" class="form__label">E-mail: </label
          ><input
            type="text"
            id="Email"
            class="form__textfield"
            placeholder="john.doe@example.com"
            v-model="email"
          />
        </div>
        <div class="form__row form__row--flex">
          <div class="form__col">
            <label for="Password" class="form__label">Password: </label
            ><input
              type="password"
              id="Password"
              class="form__textfield"
              v-model="password"
            />
          </div>
          <div class="form__col">
            <label for="RepeatPassword" class="form__label"
              >Please confirm password: </label
            ><input
              type="password"
              id="RepeatPassword"
              class="form__textfield"
              v-model="repeatPassword"
            />
          </div>
        </div>
        <div class="form__row">
          <button class="form__submit">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
export default {
  name: "Signup",
  setup() {
    let initialState = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    };

    const input = reactive({ ...initialState });

    const handleSubmit = () => {
      if (Object.values(input).some((i) => i === "")) {
        alert("Please fill in all fields");
        return;
      }
      const newUser = Object.assign({}, input);
      console.log(newUser);
      Object.assign(input, initialState);
    };

    return {
      ...toRefs(input),
      handleSubmit,
    };
  },
};
</script>
