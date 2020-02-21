<template>
  <div
    id="kt_page_portlet"
    class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
  >
    <div class="kt-portlet__head kt-portlet__head--lg">
      <div class="kt-portlet__head-label">
        <span class="kt-portlet__head-icon">
          <i class="kt-font-brand fa flaticon2-delivery-truck" />
        </span>
        <h3 class="kt-portlet__head-title">
          Report Stock Of Balance
        </h3>
      </div>
    </div>
    <div class="kt-portlet__body">
      <!--begin: Search Form -->
      <div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
        <div class="row align-items-center">
          <div class="col-xl-12 order-2 order-xl-1">
            <div class="row align-items-center">
              <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Filter By:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_filter"
                      class="form-control bootstrap-select selectpicker"
                    >
                      <option
                        v-for="(item, index) in filter_by"
                        :key="index"
                        :value="index"
                      >
                        {{ item }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__label">
                  <label>Search:</label>
                </div>
                <div class="kt-input-icon kt-input-icon--left">
                  <input
                    v-model="params.keyword"
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    @keyup="getBalance()"
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
                      class="form-control bootstrap-select selectpicker"
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
              <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Warehouse:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="warehouse"
                      class="form-control kt-select2"
                      name="to_warehouse_id"
                    >
                      <option />
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="row align-items-center">
        <div class="col-xl-12 order-2 order-xl-1">
          <div class="row align-items-center">
            <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
              <div class="kt-form__group">
                <div class="kt-form__label">
                  <label>Filter Date By:</label>
                </div>
                <div class="kt-form__control">
                  <select
                    id="kt_form_filter_date"
                    class="form-control bootstrap-select selectpicker"
                  >
                    <option
                      v-for="(item, index) in filter_date_by"
                      :key="index"
                      :value="index"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
              <div class="kt-form__group">
                <div class="kt-form__label">
                  <label>From:</label>
                </div>
                <div class="kt-form__control">
                  <div class="input-group date">
                    <input
                      id="from"
                      type="text"
                      class="form-control"
                      readonly
                      placeholder="Select from"
                    >
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
              <div class="kt-form__group">
                <div class="kt-form__label">
                  <label>To:</label>
                </div>
                <div class="kt-form__control">
                  <div class="input-group date">
                    <input
                      id="to"
                      type="text"
                      class="form-control"
                      readonly
                      placeholder="Select to"
                    >
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="la la-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end: Search Form -->
    </div>

    <div class="kt-portlet__body">
      <!--begin: Datatable -->
      <table
        id="balance_table"
        class="table table-hover table-checkable nowrap"
      >
        <thead>
          <tr>
            <th class="noorder">
              #
            </th>
            <th class="noorder">QR Code </th>
            <th class="noorder">SKU </th>
            <th>
              Batch
            </th>
            <th>
              Warehouse
            </th>
            <th>
              Location
            </th>
            <th>
              Total Stock
            </th>
            <th>
              Out Stock
            </th>
            <th>
              Last Stock
            </th>
            <th>
              Reserved Stock
            </th>
            <th>
              Total M3
            </th>
            <th class="status">
              Status
            </th>
            <th>
              Product 
            </th>
            <th>
              Category 
            </th>
            <th>
              Packing Type
            </th>
          </tr>
        </thead>
      </table>
    <!--end: Datatable -->
    </div>

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
import moment from 'moment'
import { STATUS, STATUS_OPEN, STATUS_CANCEL } from '@/utils/constants'

export default {
  data () {
    return {
      filter_by: {
        unique_code: 'Unique Code'
      },
      filter_date_by: {
        created_at   : 'Created Date',
        updated_at   : 'Updated Date',
      },
      status: STATUS,
      datatable : [],
      params    : {
        keyword  : '',
        search_by: '',
        filter   : {},
      },
    }
  },
  async mounted () {
    const app = this
    $('#warehouse').select2({
      placeholder       : 'Select warehouse',
      minimumInputLength: 1,
      width             : '100%',
      allowClear        : true,
      ajax              : {
        type          : 'GET',
        url           : '/api/warehouse/select',
        cache         : true,
        processResults: function (data) {
          return {
            results: $.map(data.result, function (object) {
              return {
                id  : object.id,
                text: object.name,
              }
            }),
          }
        },
      },
    })
    $('#warehouse').on('change', function () {
      if ($('#warehouse').val() !== '' && $('#warehouse').val() !== null)
        app.params.filter.to_warehouse_id = $('#warehouse').val()
      else
        app.$delete(app.params.filter, 'to_warehouse_id')
      app.getBalance()
    })

    $('#company').select2({
      placeholder       : 'Select company',
      minimumInputLength: 1,
      width             : '100%',
      allowClear        : true,
      ajax              : {
        type          : 'GET',
        url           : '/api/company/select',
        cache         : true,
        processResults: function (data) {
          return {
            results: $.map(data.result, function (object) {
              return {
                id  : object.id,
                text: object.name,
              }
            }),
          }
        },
      },
    })
    $('#company').on('change', function () {
      if ($('#company').val() !== '' && $('#company').val() !== null)
        app.params.filter.company_id = $('#company').val()
      else
        app.$delete(app.params.filter, 'company_id')
      app.getBalance()
    })

    $('#kt_form_status').on('change', function () {
      if ($('#kt_form_status').val() !== '' && $('#kt_form_status').val() !== null)
        app.params.filter.status = $('#kt_form_status').val()
      else
        app.$delete(app.params.filter, 'status')
      app.getBalance()
    })

    $('#from, #to').datetimepicker({
      todayHighlight: true,
      autoclose     : true,
      startView     : 2,
      minView       : 2,
      orientation   : 'bottom left',
      todayBtn      : 'linked',
      format        : 'dd/mm/yyyy',
    }).on('changeDate', function (event) {
      app.params.date_by   = $('#kt_form_filter_date').val()
      if ($('#from').val() !== '')
        app.params.date_from = moment($('#from').val(), 'DD/MM/YYYY').format('Y-MM-DD HH:mm:ss')
      if ($('#to').val() !== '')
        app.params.date_to   = moment(`${$('#to').val()} 23:59:59`, 'DD/MM/YYYY HH:mm:ss').format('Y-MM-DD HH:mm:ss')
      app.getBalance()
    })

    // begin first table
    this.datatable = $('#balance_table').DataTable({
      responsive: true,
      searching : false,
      processing: true,
      serverSide: true,
      ajax      : {
        url : '/api/balance/list',
        type: 'POST',
        data: function (d) {
          d.params = app.params
        },
      },
      order  : [[7, 'desc']],
      columns: [
        { data: 'row_number' },
        { data: 'unique_code', responsivePriority: -1 },
        { data: 'product_sku' },
        { data: 'batch' },
        { data: 'warehouse_name' },
        { data: 'warehouse_location_name' },
        { data: 'first_stock' },
        { data: 'out_stock' },
        { data: 'last_stock' },
        { data: 'reserved_stock' },
        { data: 'total_m3' },
        { data: 'status' },
        { data: 'product_name' },
        { data: 'product_category_name' },
        { data: 'packing_type_name' },
      ],
      columnDefs: [
        {
          targets  : 'noorder',
          orderable: false,
        },
        {
          targets  : 'status',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            for (const statusIndex in STATUS) {
              if (data === STATUS[statusIndex].id)
                return `<span class="kt-badge kt-badge--${STATUS[statusIndex].class} kt-badge--inline">${STATUS[statusIndex].text}</span>`
            }
            return data
          },
        },
        {
          targets: 'date',
          render : function (data, type, full, meta) {
            if (data !== '' && data !== '0000-00-00 00:00:00')
              return moment(data).format('DD/MM/Y HH:mm')
            else
              return ''
          },
        },
        {
          targets: 'created_at',
          render : function (data, type, full, meta) {
            if (data !== '')
              return `${moment(data).format('DD/MM/Y HH:mm:ss')}<br>${full.created_by_name}`
            else
              return data
          },
        },
        {
          targets: 'updated_at',
          render : function (data, type, full, meta) {
            if (data !== '')
              return `${moment(data).format('DD/MM/Y HH:mm:ss')}<br>${full.updated_by_name}`
            else
              return data
          },
        },
      ],
    })

    // update datatable row
    this.datatable.on('draw.dt', function () {
      $('.action-button-cancel').click(function () {
        const rowData = app.datatable.row($(this).data('index')).data()
        app.setStatus(STATUS_CANCEL, rowData)
      })
      $('.action-button-close').click(function () {
        const rowData = app.datatable.row($(this).data('index')).data()
        app.setStatus(STATUS_CLOSE, rowData)
      })
    })
  },
  methods: {
    async getBalance () {
      this.params.search_by = $('#kt_form_filter').val()
      this.datatable.ajax.reload()
    },
    async setStatus (statusId, row) {
      const app         = this
      for (const statusIndex in JOB_STATUS) {
        if (statusId === JOB_STATUS[statusIndex].id) {
          const statusText = `${JOB_STATUS[statusIndex].text.charAt(0).toLowerCase()}${JOB_STATUS[statusIndex].text.slice(1)}`
          // eslint-disable-next-line no-undef
          swal.fire({
            title             : 'Are you sure?',
            text              : `Job balance "${row.job_no}" will be ${statusText}`,
            type              : 'question',
            showCancelButton  : true,
            confirmButtonText : `${JOB_STATUS[statusIndex].text} Job`,
            buttonsStyling    : false,
            confirmButtonClass: `btn btn-${JOB_STATUS[statusIndex].class}`,
            cancelButtonClass : 'btn btn-default',
          }).then(function (result) {
            if (result.value)
              app.updateStatus(row.id, statusId, row)
          })
          break
        }
      }
    },
    async updateStatus (idBalance, statusId, param) {
      try {
        this.$nuxt.$loading.start()
        param.status    = statusId
        this.$delete(param, 'job_close_date')
        await this.$store.dispatch('damage/editDamage', { idBalance: idBalance, data: param })
        const data      = this.$store.getters['balance/getEditBalance']
        const parameter = {
          alertClass: 'alert-success',
          message   : `Stock Balance ${data.result.job_no} has been edited`,
        }
        this.$nuxt.$emit('alertShow', parameter)
        this.$nuxt.$loading.finish()
        // eslint-disable-next-line no-undef
        KTUtil.scrollTop()
        this.datatable.ajax.reload()
      } catch (error) {
        param.status    = STATUS_OPEN
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
    async clearForm () {
      this.params = {
        keyword  : '',
        search_by: '',
        filter   : {},
      }
      this.datatable.ajax.reload()
      $('#warehouse').val(null).trigger('change')
      $('#company').val(null).trigger('change')
      $('#kt_form_filter').val('job_no')
      $('#kt_form_filter_date').val('created_at')
      $('#kt_form_status').val('')
      $('.selectpicker').selectpicker('refresh')
    },
  },
}
</script>
