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
          User List
        </h3>
      </div>
      <div class="kt-portlet__head-toolbar">
        <div class="kt-portlet__head-wrapper">
          <div class="kt-portlet__head-actions">
            <a
              href="/master/user/add"
              class="btn btn-brand btn-elevate btn-icon-sm"
            >
              <i class="la la-plus" />
              <span class="kt-hidden-mobile">Add User</span>
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
              <div class="col-md-3 kt-margin-b-20-tablet-and-mobile">
                <div class="kt-form__group">
                  <div class="kt-form__label">
                    <label>Filter By:</label>
                  </div>
                  <div class="kt-form__control">
                    <select
                      id="kt_form_filter"
                      class="form-control bootstrap-select selectpicker"
                    >
                      <option value="full_name">
                        Name
                      </option>
                      <option value="username">
                        Username
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
                    @keyup="getUser()"
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
      <!--end: Search Form -->
    </div>
    <div class="kt-portlet__body">
      <!--begin: Datatable -->
      <table
        id="user_table"
        class="table table-hover table-checkable nowrap"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th class="status">Status</th>
            <th>Address</th>
            <th>Actions</th>
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

export default {
  data () {
    return {
      datatable: [],
      params   : {
        keyword  : '',
        search_by: '',
        filter   : {},
      },
    }
  },
  mounted () {
    const app = this
    $('#kt_form_status').on('change', function () {
      if ($('#kt_form_status').val() !== '' && $('#kt_form_status').val() !== null)
        app.params.filter.status = $('#kt_form_status').val()
      else
        app.$delete(app.params.filter, 'status')
      app.getUser()
    })
    // begin first table
    this.datatable        = $('#user_table').DataTable({
      responsive: true,
      searching : false,
      processing: true,
      serverSide: true,
      ajax      : {
        url : '/api/user/list',
        type: 'POST',
        data: function (d) {
          d.params = app.params
        },
      },
      order  : [[6, 'desc']],
      columns: [
        { data: 'row_number' },
        { data: 'username' },
        { data: 'full_name' },
        { data: 'phone' },
        { data: 'email' },
        { data: 'status' },
        { data: 'address' },
        { data: 'actions', responsivePriority: -1 },
      ],
      columnDefs: [
        {
          targets  : 0,
          orderable: false,
        },
        {
          targets  : 1,
          orderable: false,
        },
        {
          targets  : -1,
          title    : 'Actions',
          className: 'dt-center',
          width    : '110px',
          orderable: false,
          render   : function (data, type, full, meta) {
            return `
                  <a href="/master/user/detail/${btoa(full.id)}" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View Details">
                    <i class="la la-eye"></i>
                  </a>
                  <a href="/master/user/edit/${btoa(full.id)}" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit Details">
                    <i class="la la-edit"></i>
                  </a>
                  <a class="btn btn-sm btn-clean btn-icon action-button-status" data-index="${meta.row}" href="javascript:void(0)">
                    <i class="la la-power-off"></i>
                  </a>`
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
      ],
    })
    this.datatable.on('draw.dt', function () {
      $('.action-button-status').click(function () {
        const rowData = app.datatable.row($(this).data('index')).data()
        // app.$delete(rowData, 'unique_code')
        app.setStatus(rowData)
      })
    })
  },
  methods: {
    async getUser () {
      this.params.search_by = $('#kt_form_filter').val()
      this.datatable.ajax.reload()
    },
    async setStatus (row) {
      const app         = this
      const statusText  = row.status === 1 ? 'Deactivated' : 'Activated'
      const buttonClass = row.status === 1 ? 'btn btn-danger' : 'btn btn-success'
      // eslint-disable-next-line no-undef
      swal.fire({
        title             : 'Are you sure?',
        text              : `User "${row.username}" ${statusText}`,
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
    async updateStatus (idUser, param) {
      try {
        this.$nuxt.$loading.start()
        param.status    = param.status === 1 ? 0 : 1
        await this.$store.dispatch('user/editUser', { idUser: idUser, data: param })
        const data      = this.$store.getters['user/getEditUser']
        const parameter = {
          alertClass: 'alert-success',
          message   : `User ${data.result.username} has been edited`,
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
    async clearForm () {
      this.params = {
        keyword  : '',
        search_by: '',
        filter   : {},
      }
      this.datatable.ajax.reload()
      $('#kt_form_status').val('')
      $('#kt_form_filter').val('name')
      $('#kt_form_filter').val('code')
      $('#kt_form_filter').val('description')
    },
  },
}
</script>
