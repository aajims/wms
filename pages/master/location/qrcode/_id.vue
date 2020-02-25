<style>
.table td, .table th {
    border-top: 1px solid black;
}
</style>
<template>
  <client-only>
    <div style="padding: 10px">
      <table
        border="1"
        class="table"
      >
        <tbody>
          <tr>
            <td>
              Location:<br>
              <h4>{{ location.name }}</h4><br>
              Level:<br>
              <h4>{{ location.level }}</h4>
            </td>
            <td
              align="center"
              style="width:20%;"
            >
              <qrcode-vue
                :value="location.unique_code"
                :size="size"
                level="H"
              />
              <br><h5>{{ location.unique_code }}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </client-only>
</template>

<script>
export default {
  layout: 'admin-print',
  data () {
    return {
      location: [],
      size    : 100,
    }
  },
  async mounted () {
    await this.getData()
    window.print()
  },
  methods: {
    async getData () {
      await this.$store.dispatch('location/getLocationDetail', { idLocation: atob(this.$route.params.id) })
      this.location    = this.$store.getters['location/getLocationDetail'].result
    },
  },
}

</script>
