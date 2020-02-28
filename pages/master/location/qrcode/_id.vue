<style>
canvas {
  height: 60% !important;
  width: 60% !important;
}
</style>
<template>
  <client-only>
    <div style="padding: 10px">
      <table style="padding:1px; !important; border: 2px; border-color: #000; border-style: solid; width: 100%;">
        <tbody>
          <tr>
            <td>
              <span style="font-size: 0.575em;">Location:</span><br>
              <span style="font-size: 0.875em;"><strong>{{ location.name }}</strong></span><br><br>
              <span style="font-size: 0.575em;">Level:</span><br>
              <span style="font-size: 0.875em;"><strong>{{ location.level }}</strong></span>
            </td>
            <td
              align="center"
              style="width:10%; padding-top: 10px"
            >
              <qrcode-vue
                :value="location.unique_code"
                :size="size"
                level="H"
              />
              <span style="font-size: 0.575em;">{{ location.unique_code }}</span>
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
