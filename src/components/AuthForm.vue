<script lang="ts">
export default {
  data: () => ({
    valid: true,
    name: '',
    password: '',
    nameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length <= 19) || 'Name must be less than 10 characters',
    ],
    passRules: [
      v => !!v || 'Password is required'  ,
      v => (v && v.length <= 19) || 'Name must be less than 10 characters',
    ],
    select: null,
    checkbox: false,
  }),
  methods: {
    async validate () {
      const { valid } = await this.$refs.form.validate()
      if (valid) alert('Form is valid')
    },
    reset () {
      this.$refs.form.reset()
    }
  },
}
</script>

<template>
  <v-sheet width="300" class="form mx-auto">

    <v-form ref="form">
      <v-text-field
          v-model="name"
          :counter="19"
          :rules="nameRules"
          label="Username"
          required
      ></v-text-field>

      <v-text-field
          v-model="password"
          :counter="19"
          :rules="passRules"
          label="Password"
          type="password"
          required
      ></v-text-field>

      <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn
            color="success"
            class="mt-4"
            block
            @click="validate"
        >
          Confirm
        </v-btn>

        <v-btn
            color="error"
            class="mt-4"
            block
            @click="reset"
        >
          Reset
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<style scoped>
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
