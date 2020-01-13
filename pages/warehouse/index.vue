<template>
  <div
    id="kt_page_portlet"
    class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
  >
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
              <span class="kt-hidden-mobile">Add Warehouse</span>
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
                        Warehouse
                      </option>
                      <option value="code">
                        Code
                      </option>
                      <option value="address">
                        Address
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
                    @keyup="getWarehouse(params.page)"
                  >
                  <span class="kt-input-icon__icon kt-input-icon__icon--left">
                    <span><i class="la la-search" /></span>
                  </span>
                </div>
              </div>
              <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
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
            </div>
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
        max-height="400px"
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
      isLoading: false,
      columns  : [
        {
          label   : '#',
          field   : 'lineNumber',
          sortable: false,
        },
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Code',
          field: 'code',
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
          label  : 'Status',
          field  : 'status',
          tdClass: 'text-center',
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
        sort_by : 'created_at',
        sort    : 'desc',
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
    $('#kt_form_filter').select2({ minimumResultsForSearch: -1, width: '100%' })
    $('#kt_form_status').select2({ minimumResultsForSearch: -1, width: '100%' })
    $('#kt_form_status').on('change', function () {
      app.params['filter[status]'] = $('#kt_form_status').val()
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
    onSortChange (params) {
      this.params.sort_by = params[0].field
      this.params.sort    = params[0].type
      this.getWarehouse(1)
    },
    async getWarehouse (page) {
      this.params.search_by = $('#kt_form_filter').val()
      this.params.page      = page
      let data              = []
      try {
        this.isLoading = true
        await this.$store.dispatch('warehouse/list', { params: this.params })
        data           = this.$store.getters['warehouse/getWarehouse']
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
