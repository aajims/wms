<template>
  <div class="kt-portlet__body">
    <div class="kt-pagination kt-pagination--brand">
      <paginate
        v-model="currentPage"
        :page-count="totalPage"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'kt-pagination__links'"
        :active-class="'kt-pagination__link--active'"
        :next-class="'kt-pagination__link--next'"
        :prev-class="'kt-pagination__link--prev'"
        :click-handler="clickHandler"
      />
      <div class="kt-pagination__toolbar">
        <select
          class="form-control kt-font-brand"
          style="width: 60px;"
          @change="changeValue"
        >
          <option
            v-for="value in perPageDropdown"
            :key="value"
            :value="value"
          >
            {{ value }}
          </option>
        </select>
        <div class="pagination__desc">
          Showing {{ from }} - {{ to }} of {{ totalItem }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPage      : Number,
    from           : Number,
    to             : Number,
    totalItem      : Number,
    page           : Number,
    clickHandler   : { type: Function },
    perPageDropdown: {
      type   : Array,
      default: function () {
        return [
          10,
          20,
          30,
          50,
          100,
        ]
      },
    },
  },
  data () {
    return { currentPage: this.page }
  },
  watch: {
    page: {
      handler (newValue, oldValue) {
        this.currentPage = newValue
      },
    },
  },
  methods: {
    changeValue (event) {
      this.$emit('changePerpage', event.target.value)
    },
  },
}
</script>
