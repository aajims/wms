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
                <i class="kt-font-brand flaticon-add" />
              </span>
              <h3 class="kt-portlet__head-title">
                Add User
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
                <label>Username <span style="color:red">*</span></label>
                <input
                  v-model="user.username"
                  type="text"
                  class="form-control"
                  name="username"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label>Password <span style="color:red">*</span></label>
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  name="password"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Full Name <span style="color:red">*</span></label>
                <input
                  v-model="user.full_name"
                  type="text"
                  class="form-control"
                  name="full_name"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label>Phone <span style="color:red">*</span></label>
                <input
                  v-model="user.phone"
                  type="text"
                  class="form-control"
                  name="phone"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Email <span style="color:red">*</span></label>
                <input
                  v-model="user.email"
                  type="text"
                  class="form-control"
                  name="email"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label>Address <span style="color:red">*</span></label>
                <textarea
                  v-model="user.address"
                  type="text"
                  rows="3"
                  class="form-control"
                  name="address"
                  disabled
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="country">Country <span style="color:red">*</span></label>
                <input
                  v-model="user.country_name"
                  type="text"
                  class="form-control"
                  name="email"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label for="state">State <span style="color:red">*</span></label>
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
                <label for="city">City <span style="color:red">*</span></label>
                <input
                  v-model="user.city_name"
                  type="text"
                  class="form-control"
                  name="state"
                  disabled
                >
              </div>
              <div class="col-lg-6">
                <label for="district">District <span style="color:red">*</span></label>
                <input
                  v-model="user.district_name"
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
              <!-- <tbody>
                <tr v-for="(row, index) in privilage" :key="index">
                    <td>{{ No + index }}</td>
                    <td>{{ row.module_name }}</td>
                    <td><input type="checkbox" v-model="row.view"></td>
                    <td><input type="checkbox" v-model="row.add"></td>
                    <td><input type="checkbox" v-model="row.edit"></td>
                    <td><input type="checkbox" v-model="row.delete"></td>
                    <td><input type="checkbox" v-model="row.cancel"></td>
                </tr>
              </tbody> -->
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
    export default {
        data() {
            return {
                user   : [],
                privilage   : [],
                createdDate: '',
            }
        },
       async mounted () {
        await this.$store.dispatch('user/getUserDetail', { idUser: this.$route.params.id })
        this.user         = this.$store.getters['user/getUserDetail'].result
        this.privilage    = this.$store.getters['user/getUserDetail'].result.privilage
        this.createdDate = moment(this.user.created_at).format('DD/MM/Y HH:mm:ss')
        console.log(this.user.privilage[i])
        // datatable
            this.datatable = $('#privilage_table').DataTable({
            responsive: true,
            ordering  : false,
            paging    : false,
            info      : false,
            searching : false,
            data      : this.user.privilage,
            
            columns   : [
                { data: 'module_name' },
                { data: 'view' },
                { data: 'add' },
                { data: 'edit' },
                { data: 'cancel' },
                { data: 'batch' },
            ],
         })
       }
    }
</script>