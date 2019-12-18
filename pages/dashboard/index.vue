<template>
  <b-card>
    Dashboard.
  </b-card>
</template>

<script>
export default {
  methods: {
    submit () {
      this.$router.push({ path: '/dashboard' })
    },
  },
  mounted () {
    // console.log(process.env.HOST)
  },
}
</script>
