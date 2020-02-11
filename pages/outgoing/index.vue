<template>
  <div
    id="kt_page_portlet"
    class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
  >
    <div class="kt-portlet__head kt-portlet__head--lg">
      <div class="kt-portlet__head-label">
        <span class="kt-portlet__head-icon">
          <i class="kt-font-brand la la-sign-out" />
        </span>
        <h3 class="kt-portlet__head-title">
          Outgoing Stock
        </h3>
      </div>
      <div class="kt-portlet__head-toolbar">
        <div class="kt-portlet__head-wrapper">
          <div class="kt-portlet__head-actions">
            <a
              href="/outgoing/add"
              class="btn btn-brand btn-elevate btn-icon-sm"
            >
              <i class="la la-plus" />
              <span class="kt-hidden-mobile">Add Outgoing Stock</span>
            </a>
          </div>
        </div>
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
                    id="kt_form_search"
                    v-model="params.keyword"
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    @keyup="getOutgoing()"
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
                      <option
                        v-for="item in job_status"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.text }}
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
                    <div class="kt-separator d-xl-none" />
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
            <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
              <div class="kt-form__group">
                <div class="kt-form__label">
                  <label>Company:</label>
                </div>
                <div class="kt-form__control">
                  <select
                    id="company"
                    class="form-control kt-select2"
                  >
                    <option />
                  </select>
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
        id="outgoing_table"
        class="table table-hover table-checkable nowrap"
      >
        <thead>
          <tr>
            <th class="noorder">
              #
            </th>
            <th>Incoming No.</th>
            <th>Tracking</th>
            <th class="noorder">
              Company
            </th>
            <th class="noorder">
              Warehouse
            </th>
            <th class="noorder">
              Country
            </th>
            <th class="status">
              Status
            </th>
            <th class="created_at">
              Created
            </th>
            <th class="date">
              Shipment
            </th>
            <th class="date">
              Order
            </th>
            <th class="date">
              ETD
            </th>
            <th class="date">
              ETA
            </th>
            <th class="updated_at">
              Updated
            </th>
            <th class="date">
              Close Date
            </th>
            <th class="actions">
              Actions
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
import { READY_SHIPING_NAME, JOB_STATUS, STATUS_OPEN, STATUS_CANCEL, STATUS_CLOSE } from '@/utils/constants'

export default {
  data () {
    return {
      filter_by: {
        job_no          : 'Job No',
        from            : 'From',
        to              : 'To',
        flight          : 'Flight',
        transport_number: 'Transport Number',
      },
      filter_date_by: {
        created_at   : 'Created Date',
        updated_at   : 'Updated Date',
        etd          : 'ETD',
        eta          : 'ETA',
        order_date   : 'Order Date',
        shipment_date: 'Shipment Date',
      },
      job_status: JOB_STATUS,
      datatable : [],
      params    : {
        keyword  : '',
        search_by: '',
        filter   : {},
      },
    }
  },
  mounted () {
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
      app.getOutgoing()
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
      app.getOutgoing()
    })

    $('#kt_form_status').on('change', function () {
      if ($('#kt_form_status').val() !== '' && $('#kt_form_status').val() !== null)
        app.params.filter.status = $('#kt_form_status').val()
      else
        app.$delete(app.params.filter, 'status')
      app.getOutgoing()
    })
    $('#from, #to').datetimepicker({
      todayHighlight: true,
      orientation   : 'bottom left',
      todayBtn      : 'linked',
      format        : 'dd/mm/yyyy',
    }).on('changeDate', function (event) {
      app.params.date_by   = $('#kt_form_filter_date').val()
      if ($('#from').val() !== '')
        app.params.date_from = moment($('#from').val(), 'DD/MM/YYYY').format('Y-MM-DD HH:mm:ss')
      if ($('#to').val() !== '')
        app.params.date_to   = moment(`${$('#to').val()} 23:59:59`, 'DD/MM/YYYY HH:mm:ss').format('Y-MM-DD HH:mm:ss')
      app.getOutgoing()
    })

    // begin first table
    this.datatable = $('#outgoing_table').DataTable({
      responsive: true,
      searching : false,
      processing: true,
      serverSide: true,
      ajax      : {
        url : 'api/outgoing/list',
        type: 'POST',
        data: function (d) {
          d.params = app.params
        },
      },
      order  : [[7, 'desc']],
      columns: [
        { data: 'row_number' },
        { data: 'order_no', responsivePriority: -1 },
        { data: 'tracking' },
        { data: 'company_name' },
        { data: 'from_warehouse_name' },
        { data: 'to_country_name' },
        { data: 'status' },
        { data: 'shipment_date' },
        { data: 'order_date' },
        { data: 'etd' },
        { data: 'eta' },
        { data: 'created_at' },
        { data: 'updated_at' },
        { data: 'job_close_date' },
        { data: 'actions', responsivePriority: -2 },
      ],
      columnDefs: [
        {
          targets  : 'noorder',
          orderable: false,
        },
        {
          targets  : 'actions',
          title    : 'Actions',
          className: 'dt-center',
          width    : '110px',
          orderable: false,
          render   : function (data, type, full, meta) {
            let actionButtonCancel = ''
            let actionButtonEdit   = ''
            let actionButtonClose  = ''
            if (full.status === STATUS_OPEN) {
              actionButtonEdit = `<a href="/outgoing/edit/${btoa(full.id)}" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit Details">
                                    <i class="la la-edit"></i>
                                  </a>`
              if (full.tracking === '')
                actionButtonCancel = `<a class="dropdown-item action-button-cancel"  data-index="${meta.row}" href="javascript:void(0)"><i class="la la-times-circle"></i> Cancel Job</a>`
              else if (full.tracking === READY_SHIPING_NAME)
                actionButtonClose = `<a class="dropdown-item action-button-close"  data-index="${meta.row}" href="javascript:void(0)"><i class="la la-folder"></i> Close Job</a>`
            }
            return `<a href="/outgoing/detail/${btoa(full.id)}" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View Details">
                    <i class="la la-eye"></i>
                  </a>
                  ${actionButtonEdit}
                  <span class="dropdown">
                      <a href="javascript:void(0)" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:void(0)"><i class="la la-print"></i> Print</a>
                          <a class="dropdown-item" href="javascript:void(0)"><i class="la la-print"></i> Print D.O.</a>
                          <a class="dropdown-item" href="javascript:void(0)"><i class="la la-print"></i> Shipping Note</a>
                          ${actionButtonCancel}
                          ${actionButtonClose}
                      </div>
                  </span>`
          },
        },
        {
          targets  : 'status',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (typeof data === 'undefined')
              return data
            for (const statusIndex in JOB_STATUS) {
              if (data === JOB_STATUS[statusIndex].id)
                return `<span class="kt-badge kt-badge--${JOB_STATUS[statusIndex].class} kt-badge--inline">${JOB_STATUS[statusIndex].text}</span>`
            }
            return data
          },
        },
        {
          targets: 'date',
          render : function (data, type, full, meta) {
            if (data !== '')
              return moment(data).format('DD/MM/Y HH:mm')
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
        {
          targets: 'created_at',
          render : function (data, type, full, meta) {
            if (data !== '')
              return `${moment(data).format('DD/MM/Y HH:mm:ss')}<br>${full.created_by_name}`
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
    async getOutgoing () {
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
            text              : `Job Outgoing "${row.order_no}" will be ${statusText}`,
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
    async updateStatus (idOutgoing, statusId, param) {
      try {
        this.$nuxt.$loading.start()
        param.status    = statusId
        this.$delete(param, 'job_close_date')
        await this.$store.dispatch('outgoing/editOutgoing', { idOutgoing: idOutgoing, data: param })
        const data      = this.$store.getters['outgoing/getEditOutgoing']
        const parameter = {
          alertClass: 'alert-success',
          message   : `Job Outgoing ${data.result.job_no} in Outgoing ${data.result.order_no} has been edited`,
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
      $('#kt_form_status').val('')
      $('#kt_form_filter').val('company_name')
      $('#kt_form_filter').val('order_no')
      $('#kt_form_filter').val('from_warehouse_name')
    },
  },
}
</script>
