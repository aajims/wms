<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="user_form"
        ref="form"
        class="kt-form kt-form--label-right"
      >
        <div
          id="kt_page_portlet"
          class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
        >
          <div class="kt-portlet__head kt-portlet__head--lg">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="kt-font-brand flaticon-clipboard" />
              </span>
              <h3 class="kt-portlet__head-title">
                Detail User
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/master/user"
                class="btn btn-clean kt-margin-r-10"
              >
                <i class="la la-arrow-left" />
                <span class="kt-hidden-mobile">Back</span>
              </a>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Username </label>
                <input
                  v-model="user.username"
                  type="text"
                  class="form-control"
                  name="username"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label>Full Name </label>
                <input
                  v-model="user.full_name"
                  type="text"
                  class="form-control"
                  name="full_name"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Phone </label>
                <input
                  v-model="user.phone"
                  type="text"
                  class="form-control"
                  name="phone"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label>Email </label>
                <input
                  v-model="user.email"
                  type="text"
                  class="form-control"
                  name="email"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Address </label>
                <textarea
                  v-model="user.address"
                  type="text"
                  rows="3"
                  class="form-control"
                  name="address"
                  disabled
                />
              </div>
              <div class="col-lg-6">
                <label for="country">User Type </label>
                <input
                  v-model="user_type"
                  type="text"
                  class="form-control"
                  name="email"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <div
                id="select-warehouse"
                class="col-lg-6"
                style="display: none"
              >
                <label>Warehouse Name </label>
                <input
                  v-model="user.warehouse_name"
                  type="text"
                  class="form-control"
                  name="email"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="country">Country </label>
                <input
                  v-model="user.country_name"
                  type="text"
                  class="form-control"
                  name="email"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label for="state">State </label>
                <input
                  v-model="user.state_name"
                  type="text"
                  class="form-control"
                  name="state"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="city">City </label>
                <input
                  v-model="user.city_name"
                  type="text"
                  class="form-control"
                  name="state"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label for="district">District </label>
                <input
                  v-model="user.district_name"
                  type="text"
                  class="form-control"
                  name="state"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="country">Created Date </label>
                <input
                  v-model="createdDate"
                  type="text"
                  class="form-control"
                  name="email"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label for="state">Created By Name </label>
                <input
                  v-model="user.created_by_name"
                  type="text"
                  class="form-control"
                  name="state"
                  disabled
                >
              </div>
            </div>
          </div>
          <div class="kt-portlet__body">
            <!--begin: Datatable -->
            <table
              id="privilage_table"
              class="table table-hover table-checkable nowrap"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>View</th>
                  <th>Add</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, index) in dataPrivilage"
                  :key="index"
                >
                  <td>{{ No + index }}</td>
                  <td>{{ row.module_name }}</td>
                  <td>
                    <input
                      v-model="row.view"
                      type="checkbox"
                      @click="handleClick"
                    >
                  </td>
                  <td>
                    <input
                      v-model="row.add"
                      type="checkbox"
                      @click="handleClick"
                    >
                  </td>
                  <td>
                    <input
                      v-model="row.edit"
                      type="checkbox"
                      @click="handleClick"
                    >
                  </td>
                  <td>
                    <input
                      v-model="row.delete"
                      type="checkbox"
                      @click="handleClick"
                    >
                  </td>
                  <td>
                    <input
                      v-model="row.cancel"
                      type="checkbox"
                      @click="handleClick"
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          <!--end: Datatable -->
          </div>
        </div>
      </form>
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
import { USER_TYPE, USER_STAFF } from '@/utils/constants'
export default {
  data () {
    return {
      No           : 1,
      user_type    : null,
      user         : [],
      dataPrivilage: [],
      createdDate  : '',
    }
  },
  async mounted () {
    await this.$store.dispatch('user/getUserDetail', { idUser: atob(this.$route.params.id) })
    this.user                                                 = this.$store.getters['user/getUserDetail'].result
    this.user_type                                            = USER_TYPE[this.user.user_type - 1].text
    this.dataPrivilage                                        = this.$store.getters['user/getUserDetail'].result.privilege
    this.createdDate                                          = moment(this.user.created_at).format('DD/MM/Y HH:mm:ss')
    const style                                               = USER_TYPE[this.user.user_type - 1].id === USER_STAFF ? 'block' : 'none'
    document.querySelector('#select-warehouse').style.display = style
  },
  methods: {
    handleClick (event) {
      event.preventDefault()
      if (this.isChecked)
        this.$emit('change', false)
      else
        this.$emit('change', this.value)
    },
  },
}
</script>
