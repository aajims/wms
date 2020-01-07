<template>
  <div
    id="kt_page_portlet"
    class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
  >
    <div class="kt-portlet__head kt-portlet__head--lg">
      <div class="kt-portlet__head-label">
        <span class="kt-portlet__head-icon">
          <i class="kt-font-brand flaticon2-shelter" />
        </span>
        <h3 class="kt-portlet__head-title">
          Location List
        </h3>
      </div>
      <div class="kt-portlet__head-toolbar">
        <div class="kt-portlet__head-wrapper">
          <div class="kt-portlet__head-actions">
            <a
              href="/location/add"
              class="btn btn-brand btn-elevate btn-icon-sm"
            >
              <i class="la la-plus" />
              <span class="kt-hidden-mobile">Add Location</span>
            </a>
            <a
              href="/location/import"
              class="btn btn-brand btn-elevate btn-icon-sm"
            >
              <i class="la la-cloud-download" />
              <span class="kt-hidden-mobile">Import Excel</span>
            </a>
            <a
              href="/location/export"
              class="btn btn-brand btn-elevate btn-icon-sm"
            >
              <i class="la la-file-excel-o" />
              <span class="kt-hidden-mobile">Export Excel</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="kt-portlet__body">
      <!--begin: Search Form -->
      <div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
        <div class="row align-items-center">
          <div class="col-xl-10 order-2 order-xl-1">
            <div class="row align-items-center">
              <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Filter By:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_filter"
                      class="form-control bootstrap-select"
                    >
                      <option value="name">
                        Location
                      </option>
                      <option value="level">
                        Level
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__label">
                  <label>Search:</label>
                </div>
                <div class="kt-input-icon kt-input-icon--left">
                  <input
                    v-model="params.keyword"
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    @keyup="getLocation(params.page)"
                  >
                  <span class="kt-input-icon__icon kt-input-icon__icon--left">
                    <span><i class="la la-search" /></span>
                  </span>
                </div>
              </div>
              <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
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
              <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Warehouse:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_warehouse"
                      class="form-control bootstrap-select"
                    >
                      <option value="">
                        All
                      </option>
                      <option
                        v-for="warehouse in warehouseData"
                        :key="warehouse.id"
                        :value="warehouse.id"
                      >
                        {{ warehouse.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-2 order-1 order-xl-2 ">
            <div class="kt-form__group">
              <div class="kt-form__label">
                <label>&nbsp;</label>
              </div>
              <div class="kt-form__control">
                <a
                  href="javascript:void(0)"
                  class="btn btn-default"
                  @click="clearForm"
                >
                  <i class="flaticon2-circular-arrow" /> Clear
                </a>
                <div class="kt-separator d-xl-none" />
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="row align-items-center">
          <div class="col-xl-8 order-2 order-xl-1">
            <div class="row align-items-center">
              <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Stock Quarantine:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_quarantine"
                      class="form-control bootstrap-select"
                    >
                      <option value="">
                        All
                      </option>
                      <option value="1">
                        Yes
                      </option>
                      <option value="0">
                        No
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Bonded Location:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_bonded"
                      class="form-control bootstrap-select"
                    >
                      <option value="">
                        All
                      </option>
                      <option value="1">
                        Yes
                      </option>
                      <option value="0">
                        No
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Blocked Location:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_blocked"
                      class="form-control bootstrap-select"
                    >
                      <option value="">
                        All
                      </option>
                      <option value="1">
                        Yes
                      </option>
                      <option value="0">
                        No
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="row align-items-center">
          <div class="col-xl-8 order-2 order-xl-1">
            <a
              style="margin-top: 5px"
              href="javascript:void(0)"
              class="kt-badge kt-badge--inline kt-badge--md kt-badge--success"
              @click="getLocationCapacity('=0')"
            >Empty</a>
            <a
              style="margin-top: 5px"
              href="javascript:void(0)"
              class="kt-badge kt-badge--inline kt-badge--md kt-badge--info"
              @click="getLocationCapacity('<50')"
            >Below 50%</a>
            <a
              style="margin-top: 5px"
              href="javascript:void(0)"
              class="kt-badge kt-badge--inline kt-badge--md kt-badge--warning"
              @click="getLocationCapacity('>=50')"
            >Hit the Maximum Capacity 50%</a>
            <a
              style="margin-top: 5px"
              href="javascript:void(0)"
              class="kt-badge kt-badge--inline kt-badge--md kt-badge--danger"
              @click="getLocationCapacity('>=90')"
            >Hit the Maximum Capacity 90%</a>
          </div>
        </div>
      </div>
      <!--end: Search Form -->
    </div>
    <client-only>
      <vue-good-table
        mode="remote"
        style-class="vgt-table table-hover"
        :columns="columns"
        :rows="rows"
        max-height="500px"
        :fixed-header="true"
        :is-loading="isLoading"
        @on-sort-change="onSortChange"
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
              :href="'/location/detail/' + props.row.id"
              title="Location Detail"
              class="btn btn-sm btn-clean btn-icon btn-icon-md"
            ><i class="la la-search" /></a>
            <a
              :href="'/location/edit/' + props.row.id"
              title="Edit location"
              class="btn btn-sm btn-clean btn-icon btn-icon-md"
            ><i class="la la-edit" /></a>
            <a
              :title="[props.row.status === 1 ? 'Deactivate' : 'Activate']"
              class="btn btn-sm btn-clean btn-icon btn-icon-md"
              @click="setStatus(props.row)"
            ><i class="la la-power-off" /></a>
          </span>
        </template>
        <template slot="loadingContent">
          <div class="loading-table">
            <span>Please wait...</span><span><div class="kt-spinner kt-spinner--v2 kt-spinner--success " /></span>
          </div>
        </template>
      </vue-good-table>
      <pagination
        :page="params.page"
        :total-page="totalPage"
        :from="from"
        :to="to"
        :total-item="totalItem"
        :click-handler="clickCallback"
        :per-page-dropdown="[10, 20, 30, 50, 100, 200, 500]"
        @changePerpage="changePerPage"
      />
    </client-only>
    <!-- begin::Scrolltop -->
    <div
      id="kt_scrolltop"
      class="kt-scrolltop"
    >
      <i class="flaticon flaticon-up-arrow-1" />
    </div>
    <!-- end::Scrolltop -->
  </div>
</template>

<script>
import pagination from '@/pages/elements/pagination.vue'
import { addLineNumber } from '@/utils'

export default {
  components: { pagination },
  data () {
    return {
      warehouseData: [],
      isLoading    : false,
      columns      : [
        {
          label   : '#',
          field   : 'lineNumber',
          sortable: false,
        },
        {
          label   : '',
          field   : 'indicator',
          width   : '5px',
          sortable: false,
          tdClass : this.tdClassFunc,
        },
        {
          label   : 'Warehouse',
          field   : 'warehouse_name',
          sortable: false,
        },
        {
          label: 'Location',
          field: 'name',
        },
        {
          label: 'Level',
          field: 'level',
        },
        {
          label: 'Capacity',
          field: 'capacity',
        },
        {
          label: 'Usage',
          field: 'usage',
        },
        {
          label: 'Weight',
          field: 'weight_max',
        },
        {
          label  : 'Status',
          field  : 'status',
          tdClass: 'text-center',
        },
        {
          label           : 'Create Date',
          field           : 'created_at',
          type            : 'date',
          dateInputFormat : "yyyy-MM-dd'T'HH:mm:ss'Z'",
          dateOutputFormat: 'dd/MM/Y HH:mm:ss',
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
        page     : 1,
        per_page : 10,
        sort_by  : 'created_at',
        sort     : 'desc',
        keyword  : '',
        search_by: '',
      },
      totalPage: 0,
      totalItem: 0,
      from     : 0,
      to       : 0,
    }
  },
  async mounted () {
    this.getLocation(this.params.page)
    this.getWarehouse()
    const app = this
    $('#kt_form_filter').select2({ minimumResultsForSearch: -1, width: '100%' })
    $('#kt_form_status').select2({ minimumResultsForSearch: -1, width: '100%' })
    $('#kt_form_status').on('change', function () {
      if ($('#kt_form_status').val() !== '' && $('#kt_form_status').val() !== null)
        app.params['filter[status]'] = $('#kt_form_status').val()
      else
        app.$delete(app.params, 'filter[status]')
      if ($('#kt_form_status').val() !== null)
        app.getLocation(1)
    })
    $('#kt_form_quarantine').select2({ minimumResultsForSearch: -1, width: '100%' })
    $('#kt_form_quarantine').on('change', function () {
      if ($('#kt_form_quarantine').val() !== '' && $('#kt_form_quarantine').val() !== null)
        app.params['filter[stock_quarantine]'] = $('#kt_form_quarantine').val()
      else
        app.$delete(app.params, 'filter[stock_quarantine]')
      if ($('#kt_form_quarantine').val() !== null)
        app.getLocation(1)
    })
    $('#kt_form_bonded').select2({ minimumResultsForSearch: -1, width: '100%' })
    $('#kt_form_bonded').on('change', function () {
      if ($('#kt_form_bonded').val() !== '' && $('#kt_form_bonded').val() !== null)
        app.params['filter[bonded_location]'] = $('#kt_form_bonded').val()
      else
        app.$delete(app.params, 'filter[bonded_location]')
      if ($('#kt_form_bonded').val() !== null)
        app.getLocation(1)
    })
    $('#kt_form_blocked').select2({ minimumResultsForSearch: -1, width: '100%' })
    $('#kt_form_blocked').on('change', function () {
      if ($('#kt_form_blocked').val() !== '' && $('#kt_form_blocked').val() !== null)
        app.params['filter[blocked_status]'] = $('#kt_form_blocked').val()
      else
        app.$delete(app.params, 'filter[blocked_status]')
      if ($('#kt_form_blocked').val() !== null)
        app.getLocation(1)
    })
    $('#kt_form_warehouse').on('change', function () {
      if ($('#kt_form_warehouse').val() !== '' && $('#kt_form_warehouse').val() !== null)
        app.params['filter[warehouse_id]'] = $('#kt_form_warehouse').val()
      else
        app.$delete(app.params, 'filter[warehouse_id]')
      if ($('#kt_form_warehouse').val() !== null)
        app.getLocation(1)
    })
  },
  methods: {
    getLocationCapacity (value) {
      this.params.usage_percentage = value
      this.getLocation(1)
    },
    changeCheckBox (index, event) {
      if (event.target.checked === true)
        this.params[`filter[${index}]`] = 1
      else
        this.$delete(this.params, `filter[${index}]`)
      this.getLocation(1)
    },
    tdClassFunc (row) {
      if (row.usage_percentage === 0)
        return 'capacity-indicator-success'
      if (row.usage_percentage !== 0 && row.usage_percentage < 50)
        return 'capacity-indicator-info'
      if (row.usage_percentage >= 50 && row.usage_percentage < 90)
        return 'capacity-indicator-warning'
      if (row.usage_percentage >= 90)
        return 'capacity-indicator-danger'
    },
    clickCallback (pageNumber) {
      this.getLocation(pageNumber)
    },
    changePerPage (value) {
      this.params.per_page = value
      this.getLocation(1)
    },
    onSortChange (params) {
      this.params.sort_by = params[0].field
      this.params.sort    = params[0].type
      this.getLocation(1)
    },
    async getLocation (page) {
      this.params.page      = page
      this.params.search_by = $('#kt_form_filter').val()
      let data              = []
      try {
        this.isLoading = true
        await this.$store.dispatch('location/list', { params: this.params })
        data           = this.$store.getters['location/getLocation']
        this.totalPage = data.pagination.last_page
        this.totalItem = data.pagination.total
        this.from      = data.pagination.from
        this.to        = data.pagination.to
        this.rows      = addLineNumber(data.result, this.from)
        this.isLoading = false
      } catch (error) {
        this.rows      = []
        this.totalPage = 0
        this.totalItem = 0
        this.from      = 0
        this.to        = 0
        this.isLoading = false
      }
    },
    async setStatus (row) {
      const app         = this
      const statusText  = row.status === 1 ? 'Deactivated' : 'Activated'
      const buttonClass = row.status === 1 ? 'btn btn-danger' : 'btn btn-success'
      // eslint-disable-next-line no-undef
      swal.fire({
        title             : 'Are you sure?',
        text              : `Location "${row.name}" in warehouse "${row.warehouse_name}" ${statusText}`,
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
    async updateStatus (idLocation, param) {
      try {
        this.$nuxt.$loading.start()
        param.status    = param.status === 1 ? 0 : 1
        await this.$store.dispatch('location/editLocation', { idLocation: idLocation, data: param })
        const data      = this.$store.getters['location/getEditLocation']
        const parameter = {
          alertClass: 'alert-success',
          message   : `Location ${data.result.name} in warehouse ${data.result.warehouse_name} has been edited`,
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
    async getWarehouse () {
      try {
        const warehouseParams = {
          'page'          : 1,
          'per_page'      : 1000,
          'status'        : '',
          'sort_by'       : 'name',
          'sort'          : 'asc',
          'keyword'       : '',
          'filter[status]': 1,
        }
        await this.$store.dispatch('warehouse/list', { params: warehouseParams })
        $('#kt_form_warehouse').select2({ width: '100%' })
        this.warehouseData    = this.$store.getters['warehouse/getWarehouse'].result
      } catch (error) {
        this.warehouseData = []
      }
    },
    async clearForm () {
      this.params = {
        page    : 1,
        per_page: 10,
        sort_by : 'created_at',
        sort    : 'desc',
        keyword : '',
      }
      await this.getLocation(1)
      $('#kt_form_status').val(null).trigger('change')
      $('#kt_form_warehouse').val(null).trigger('change')
    },
  },
}
</script>
