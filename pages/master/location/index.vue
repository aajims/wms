<template>
  <div
    id="kt_page_portlet"
    class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
  >
    <div class="kt-portlet__head kt-portlet__head--lg">
      <div class="kt-portlet__head-label">
        <span class="kt-portlet__head-icon">
          <i class="kt-font-brand flaticon-map-location" />
        </span>
        <h3 class="kt-portlet__head-title">
          Location List
        </h3>
      </div>
      <div class="kt-portlet__head-toolbar">
        <div class="kt-portlet__head-wrapper">
          <div class="kt-portlet__head-actions">
            <a
              v-if="pageAccess.add === statusTrue"
              href="/master/location/add"
              class="btn btn-brand btn-elevate btn-icon-sm"
            >
              <i class="la la-plus" />
              <span class="kt-hidden-mobile">Add Location</span>
            </a>
            <a
              v-if="pageAccess.add === statusTrue"
              href="/master/location/import"
              class="btn btn-brand btn-elevate btn-icon-sm"
            >
              <i class="la la-cloud-download" />
              <span class="kt-hidden-mobile">Import</span>
            </a>
            <a
              href="javascript:void(0)"
              class="btn btn-brand btn-elevate btn-icon-sm"
              @click="exportLocation"
            >
              <i class="la la-file-excel-o" />
              <span class="kt-hidden-mobile">Export</span>
            </a>
            <a
              href="javascript:void(0)"
              class="btn btn-brand btn-elevate btn-icon-sm"
              @click="printMultipleQrCode"
            >
              <i class="la la-qrcode" />
              <span class="kt-hidden-mobile">Print Qr Code</span>
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
                      class="form-control bootstrap-select selectpicker"
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
                    id="kt_form_search"
                    v-model="params.keyword"
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    @keyup="getLocation()"
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
              <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Warehouse:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="warehouse"
                      class="form-control kt-select2"
                      name="warehouse_id"
                    >
                      <option />
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
          <div class="col-xl-10 order-2 order-xl-1">
            <div class="row align-items-center">
              <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Stock Quarantine:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_quarantine"
                      class="form-control bootstrap-select selectpicker"
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
              <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Bonded Location:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_bonded"
                      class="form-control bootstrap-select selectpicker"
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
              <div class="col-md-2 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Blocked Location:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_blocked"
                      class="form-control bootstrap-select selectpicker"
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
              <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
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
        <br>
        <div class="row align-items-center">
          <div class="col-xl-6 order-2 order-xl-1">
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
          <div
            class="col-xl-6 order-2 order-xl-1"
            style="text-align: right; margin-top: 5px;"
          >
            <span class="kt-badge kt-badge--warning kt-badge--dot kt-badge--xl" /> Stock Quarantine &nbsp;&nbsp;
            <span class="kt-badge kt-badge--dark kt-badge--dot kt-badge--xl" /> Bonded Location &nbsp;&nbsp;
            <span class="kt-badge kt-badge--danger kt-badge--dot kt-badge--xl" /> Blocked Location &nbsp;&nbsp;
          </div>
        </div>
      </div>
      <!--end: Search Form -->
    </div>

    <div class="kt-portlet__body">
      <!--begin: Datatable -->
      <table
        id="location_table"
        class="table table-hover table-checkable nowrap"
      >
        <thead>
          <tr>
            <th class="no-order">
              #
            </th>
            <th>Warehouse</th>
            <th class="location">
              Location
            </th>
            <th class="no-order">
              Company
            </th>
            <th class="usage">
              Usage
            </th>
            <th class="align-right">
              Level
            </th>
            <th class="align-right">
              Capacity
            </th>
            <th class="status">
              Status
            </th>
            <th class="created">
              Created
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
import { STATUS_TRUE } from '@/utils/constants'

export default {
  data () {
    return {
      datatable: [],
      params   : {
        keyword  : '',
        search_by: '',
        filter   : {},
      },
      pageAccess: {},
      statusTrue: STATUS_TRUE,
    }
  },
  async mounted () {
    // get page access
    this.pageAccess = this.$store.getters['getAccessPage']

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
        app.params.filter.warehouse_id = $('#warehouse').val()
      else
        app.$delete(app.params.filter, 'warehouse_id')
      app.getLocation()
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
      app.getLocation()
    })

    $('#kt_form_status').on('change', function () {
      if ($('#kt_form_status').val() !== '' && $('#kt_form_status').val() !== null)
        app.params.filter.status = $('#kt_form_status').val()
      else
        app.$delete(app.params.filter, 'status')
      app.getLocation()
    })

    $('#kt_form_quarantine').on('change', function () {
      if ($('#kt_form_quarantine').val() !== '' && $('#kt_form_quarantine').val() !== null)
        app.params.filter.stock_quarantine = $('#kt_form_quarantine').val()
      else
        app.$delete(app.params.filter, 'stock_quarantine')
      app.getLocation()
    })

    $('#kt_form_bonded').on('change', function () {
      if ($('#kt_form_bonded').val() !== '' && $('#kt_form_bonded').val() !== null)
        app.params.filter.bonded_location = $('#kt_form_bonded').val()
      else
        app.$delete(app.params.filter, 'bonded_location')
      app.getLocation()
    })

    $('#kt_form_blocked').on('change', function () {
      if ($('#kt_form_blocked').val() !== '' && $('#kt_form_blocked').val() !== null)
        app.params.filter.blocked_status = $('#kt_form_blocked').val()
      else
        app.$delete(app.params.filter, 'blocked_status')
      app.getLocation()
    })

    // begin first table
    this.datatable = $('#location_table').DataTable({
      responsive: true,
      searching : false,
      processing: true,
      serverSide: true,
      ajax      : {
        url : '/api/location/list',
        type: 'POST',
        data: function (d) {
          d.params = app.params
        },
      },
      order  : [[8, 'desc']],
      columns: [
        { data: 'row_number' },
        { data: 'warehouse_name' },
        { data: 'name' },
        { data: 'company_name' },
        { data: 'usage' },
        { data: 'level' },
        { data: 'capacity' },
        { data: 'status' },
        { data: 'created_at' },
        { data: 'actions', responsivePriority: -1 },
      ],
      columnDefs: [
        {
          targets  : 'no-order',
          orderable: false,
        },
        {
          targets  : 'align-right',
          className: 'dt-right',
        },
        {
          targets  : 'location',
          orderable: false,
          render   : function (data, type, full, meta) {
            let dataPrint = ''
            if (full.stock_quarantine === STATUS_TRUE)
              dataPrint += '<span class="kt-badge kt-badge--warning kt-badge--dot kt-badge--xl"></span>&nbsp'
            if (full.bonded_location === STATUS_TRUE)
              dataPrint += '<span class="kt-badge kt-badge--dark kt-badge--dot kt-badge--xl"></span>&nbsp'
            if (full.blocked_status === STATUS_TRUE)
              dataPrint += '<span class="kt-badge kt-badge--danger kt-badge--dot kt-badge--xl"></span>'

            return `${data}&nbsp${dataPrint}`
          },
        },
        {
          targets    : 'usage',
          className  : 'dt-right',
          createdCell: function (td, cellData, rowData, row, col) {
            if (rowData.usage_percentage === 0)
              $(td).addClass('capacity-indicator-success')

            if (rowData.usage_percentage !== 0 && rowData.usage_percentage < 50)
              $(td).addClass('capacity-indicator-info')

            if (rowData.usage_percentage >= 50 && rowData.usage_percentage < 90)
              $(td).addClass('capacity-indicator-warning')

            if (rowData.usage_percentage >= 90)
              $(td).addClass('capacity-indicator-danger')
          },
          render: function (data, type, full, meta) {
            let className = ''
            if (full.usage_percentage === 0)
              className = 'kt-badge--success'
            if (full.usage_percentage !== 0 && full.usage_percentage < 50)
              className = 'kt-badge--info'
            if (full.usage_percentage >= 50 && full.usage_percentage < 90)
              className = 'kt-badge--warning'
            if (full.usage_percentage >= 90)
              className = 'kt-badge--danger'

            return `<span class="kt-badge ${className} kt-badge--inline">${data}</span>`
          },
        },
        {
          targets  : 'actions',
          title    : 'Actions',
          className: 'dt-center',
          width    : '110px',
          orderable: false,
          render   : function (data, type, full, meta) {
            let actionButtonStatus = ''
            let actionButtonEdit   = ''
            if (app.pageAccess.edit === app.statusTrue) {
              actionButtonEdit   = `<a href="/master/location/edit/${btoa(full.id)}" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit Details"><i class="la la-edit"></i></a>`
              actionButtonStatus = `<a class="dropdown-item action-button-status" data-index="${meta.row}" href="javascript:void(0)"><i class="la la-power-off"></i> Update Status</a>`
            }
            return `<a href="/master/location/detail/${btoa(full.id)}" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View Details">
                      <i class="la la-eye"></i>
                    </a>
                    ${actionButtonEdit}
                    <span class="dropdown">
                        <a href="javascript:void(0)" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
                          <i class="la la-ellipsis-h"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            ${actionButtonStatus}
                            <a class="dropdown-item" href="/master/location/product/${btoa(full.id)}"><i class="la la-search"></i> View Location Product</a>
                            <a class="dropdown-item" href="/master/location/qrcode/${btoa(full.id)}" target="_blank"><i class="la la-qrcode"></i> Print QR Code</a>
                        </div>
                    </span>`
          },
        },
        {
          targets  : 'status',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            const status = {
              0: { title: 'Inactive', class: ' kt-badge--danger' },
              1: { title: 'Active', class: ' kt-badge--success' },
            }
            if (typeof status[data] === 'undefined')
              return data

            return `<span class="kt-badge ${status[data].class} kt-badge--inline">${status[data].title}</span>`
          },
        },
        {
          targets  : 'created',
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            return moment(data).format('DD/MM/Y HH:mm:ss')
          },
        },
      ],
    })

    this.datatable.on('draw.dt', function () {
      $('.action-button-status').click(function () {
        const rowData = app.datatable.row($(this).data('index')).data()
        app.setStatus(rowData)
      })
    })

    try {
      await this.$store.dispatch('warehouse/getWarehouseDetail', { idWarehouse: atob(this.$route.query.param) })
      const warehouse          = this.$store.getters['warehouse/getWarehouseDetail'].result
      const newOptionWarehouse = new Option(warehouse.name, warehouse.id, true, true)
      $('#warehouse').append(newOptionWarehouse).trigger('change')
      app.getLocation()
    } catch (error) {

    }
  },
  methods: {
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
        this.datatable.ajax.reload()
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
    async getLocation () {
      this.params.search_by = $('#kt_form_filter').val()
      this.datatable.ajax.reload()
    },
    getLocationCapacity (value) {
      this.params.usage_percentage = value
      this.getLocation()
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
      $('#kt_form_filter').val('name')
      $('#kt_form_status').val('')
      $('#kt_form_quarantine').val('')
      $('#kt_form_bonded').val('')
      $('#kt_form_blocked').val('')
      $('.selectpicker').selectpicker('refresh')
    },
    async exportLocation () {
      try {
        this.$nuxt.$loading.start()
        this.params.sort_by = 'id'
        this.params.sort    = 'asc'
        await this.$store.dispatch('location/exportLocation', { params: this.params })
        const rawData       = this.$store.getters['location/getExportLocation']

        // get data export csv
        let csvContent = 'data:text/csv;charset=utf-8,'
        csvContent     += rawData
        const data     = encodeURI(csvContent)
        const link     = document.createElement('a')
        link.setAttribute('href', data)
        link.setAttribute('download', `export_location_${moment().format('YYYY-MM-DD_HHmmss')}.csv`)
        link.click()

        this.$nuxt.$loading.finish()
        await this.$store.dispatch('location/setExportLocationNull')
        // eslint-disable-next-line no-undef
        KTUtil.scrollTop()
      } catch (error) {
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
    printMultipleQrCode () {
      if ($('#warehouse').val() === '') {
        // eslint-disable-next-line no-undef
        swal.fire({
          title             : 'Error!',
          text              : 'Please select warehouse',
          type              : 'error',
          buttonsStyling    : false,
          confirmButtonClass: 'btn btn-danger',
        })
        return false
      }
      const pageInfo = this.datatable.page.info()
      const param    = {
        warehouse_id: parseInt($('#warehouse').val()),
        page        : (pageInfo.page + 1),
        perpage     : pageInfo.length,
      }
      window.open(`/master/location/multiple-qrcode/${btoa(JSON.stringify(param))}`, '_blank')
    },
  },
}
</script>
