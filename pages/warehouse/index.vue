<template>
  <div class="kt-portlet kt-portlet--mobile">
    <div class="kt-portlet__head kt-portlet__head--lg">
      <div class="kt-portlet__head-label">
        <span class="kt-portlet__head-icon">
          <i class="kt-font-brand flaticon2-architecture-and-city" />
        </span>
        <h3 class="kt-portlet__head-title">
          Warehouse List
        </h3>
      </div>
      <div class="kt-portlet__head-toolbar">
        <div class="kt-portlet__head-wrapper">
          <div class="kt-portlet__head-actions">
            <a
              href="/warehouse/add"
              class="btn btn-brand btn-elevate btn-icon-sm"
            >
              <i class="la la-plus" />
              Add Warehouse
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="kt-portlet__body">
      <!--begin: Search Form -->
      <div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
        <div class="row align-items-center">
          <div class="col-xl-8 order-2 order-xl-1">
            <div class="row align-items-center">
              <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-input-icon kt-input-icon--left">
                  <input
                    v-model="params.keyword"
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    @keyup="getWarehouse(params.page)"
                  >
                  <span class="kt-input-icon__icon kt-input-icon__icon--left">
                    <span><i class="la la-search" /></span>
                  </span>
                </div>
              </div>
              <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group kt-form__group--inline">
                  <div class="kt-form__label">
                    <label>Status:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_status"
                      class="form-control bootstrap-select"
                    >
                      <option value="">
                        All
                      </option>
                      <option value="1">
                        Active
                      </option>
                      <option value="0">
                        Inactive
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end: Search Form -->
    </div>
    <vue-good-table
      style-class="vgt-table table-hover"
      :columns="columns"
      :rows="rows"
      max-height="400px"
      :fixed-header="true"
      :pagination="true"
    >
      <template
        slot="table-row"
        slot-scope="props"
      >
        <span v-if="props.column.field == 'status' && props.row.status === 1">
          <span class="kt-badge kt-badge--inline kt-badge--success">Active</span>
        </span>
        <span v-else-if="props.column.field == 'status' && props.row.status === 0">
          <span class="kt-badge kt-badge--inline kt-badge--danger">Inactive</span>
        </span>
        <span
          v-else-if="props.column.field == 'action'"
          class="actions"
        >
          <a
            :href="'/warehouse/detail/' + props.row.id"
            title="Warehouse Detail"
            class="btn btn-sm btn-clean btn-icon btn-icon-md"
          ><i class="la la-search" /></a>
          <a
            :href="'/warehouse/edit/' + props.row.id"
            title="Edit warehouse"
            class="btn btn-sm btn-clean btn-icon btn-icon-md"
          ><i class="la la-edit" /></a>
          <a
            :title="[props.row.status === 1 ? 'Deactivate' : 'Activate']"
            class="btn btn-sm btn-clean btn-icon btn-icon-md"
            @click="setStatus(props.row)"
          ><i class="la la-power-off" /></a>
        </span>
      </template>
    </vue-good-table>
    <pagination
      :total-page="totalPage"
      :from="from"
      :to="to"
      :total-item="totalItem"
      :click-handler="clickCallback"
      @changePerpage="changePerPage"
    />
  </div>
</template>

<script>
import pagination from '@/pages/elements/pagination.vue'
import { addLineNumber } from '@/utils'

export default {
  components: { pagination },
  data () {
    return {
      columns: [
        {
          label   : '#',
          field   : 'lineNumber',
          sortable: false,
        },
        {
          label   : 'Name',
          field   : 'name',
          sortable: false,
        },
        {
          label   : 'Code',
          field   : 'code',
          sortable: false,
        },
        {
          label   : 'Address',
          field   : 'address',
          sortable: false,
        },
        {
          label   : 'Country',
          field   : 'country_name',
          tdClass : 'text-center',
          sortable: false,
        },
        {
          label   : 'Status',
          field   : 'status',
          tdClass : 'text-center',
          sortable: false,
        },
        {
          label   : 'Create By',
          field   : 'created_by_name',
          sortable: false,
        },
        {
          label           : 'Create Date',
          field           : 'created_at',
          type            : 'date',
          dateInputFormat : "yyyy-MM-dd'T'HH:mm:ss'Z'",
          dateOutputFormat: 'dd/MM/Y HH:mm:ss',
          sortable        : false,
        },
        {
          label   : 'Action',
          field   : 'action',
          thClass : 'text-center',
          sortable: false,
          width   : '150px',
        },
      ],
      rows  : [],
      params: {
        page    : 1,
        per_page: 10,
        status  : '',
        sort_by : 'id',
        sort    : 'asc',
        keyword : '',
      },
      totalPage: 0,
      totalItem: 0,
      from     : 0,
      to       : 0,
    }
  },
  async mounted () {
    const app = this
    $('#kt_form_status').select2({ minimumResultsForSearch: -1 })
    $('#kt_form_status').on('change', function () {
      app.params.status = $('#kt_form_status').val()
      app.getWarehouse(1)
    })
    this.getWarehouse(this.params.page)
  },
  methods: {
    clickCallback (pageNumber) {
      this.getWarehouse(pageNumber)
    },
    changePerPage (value) {
      this.params.per_page = value
      this.getWarehouse(1)
    },
    async getWarehouse (page) {
      this.params.page = page
      let data         = []
      try {
        await this.$store.dispatch('warehouse/list', { params: this.params })
        data           = this.$store.getters['warehouse/getWarehouse']
        this.totalPage = data.pagination.last_page
        this.totalItem = data.pagination.total
        this.from      = data.pagination.from
        this.to        = data.pagination.to
        this.rows      = addLineNumber(data.result, this.from)
      } catch (error) {
        this.rows      = []
        this.totalPage = 0
        this.totalItem = 0
        this.from      = 0
        this.to        = 0
      }
    },
    async setStatus (row) {
      const app         = this
      const statusText  = row.status === 1 ? 'Deactivated' : 'Activated'
      const buttonClass = row.status === 1 ? 'btn btn-danger' : 'btn btn-success'
      // eslint-disable-next-line no-undef
      swal.fire({
        title             : 'Are you sure?',
        text              : `Warehouse "${row.name}" ${statusText}`,
        type              : 'question',
        showCancelButton  : true,
        confirmButtonText : statusText,
        buttonsStyling    : false,
        confirmButtonClass: buttonClass,
        cancelButtonClass : 'btn btn-default',
      }).then(function (result) {
        if (result.value)
          app.updateStatus(row.id, row)
      })
    },
    async updateStatus (idWarehouse, param) {
      try {
        this.$nuxt.$loading.start()
        param.status    = param.status === 1 ? 0 : 1
        await this.$store.dispatch('warehouse/editWarehouse', { idWarehouse: idWarehouse, data: param })
        const data      = this.$store.getters['warehouse/getEditWarehouse']
        const parameter = {
          alertClass: 'alert-success',
          message   : `Warehouse ${data.result.name} has been edited`,
        }
        this.$nuxt.$emit('alertShow', parameter)
        this.$nuxt.$loading.finish()
        // eslint-disable-next-line no-undef
        KTUtil.scrollTop()
      } catch (error) {
        param.status    = param.status === 1 ? 0 : 1
        const parameter = {
          alertClass: 'alert-danger',
          message   : error.message,
        }
        this.$nuxt.$emit('alertShow', parameter)
        this.$nuxt.$loading.finish()
        // eslint-disable-next-line no-undef
        KTUtil.scrollTop()
      }
    },
  },
}
</script>
