<template>
    <div class="row">
        <div class="col-lg-12">
            <form
            id="outgoing_form"
            ref="form"
            class="kt-form kt-form--label-right"
            @submit.prevent="addOutgoing()"
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
                Detail Outgoing
                </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
                <a
                href="/outgoing"
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
                <label>Company Name <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.company_name"
                        type="text"
                        class="form-control"
                        name="transport"
                        readonly
                    >
                </div>
                <div class="col-lg-6">
                <label>Order No <span style="color:red">*</span></label>
                    <input
                        id="order"
                        v-model="outgoing.order_no"
                        class="form-control"
                        name="order"
                        readonly
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label>ETD <span style="color:red">*</span></label>
                    <input
                        id="order"
                        v-model="etd"
                        class="form-control"
                        name="order"
                        readonly
                    />
                </div>
                <div class="col-lg-6">
                <label>ETA <span style="color:red">*</span></label>
                    <input
                        id="order"
                        v-model="eta"
                        class="form-control"
                        name="order"
                        readonly
                    />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label>Tranport Type <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.transport_type"
                        type="text"
                        class="form-control"
                        name="transport"
                        readonly
                    >
                </div>
                <div class="col-lg-6">
                <label>Transport Number <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.tranport_number"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-4">
                <label for="country">From Country <span style="color:red">*</span></label>
                   <input
                        v-model="outgoing.from_country_id"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label for="state">From State <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.from_state_id"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label>From Warehouse <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.from_warehouse_name"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-4">
                <label for="country">To Country <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.to_country_id"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label for="state">To State <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.to_state_id"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
                <div class="col-lg-4">
                <label>To Warehouse <span style="color:red">*</span></label>
                    <input
                        v-model="outgoing.to_warehouse_name"
                        type="text"
                        class="form-control"
                        name="number"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                    <label>Custom Permit</label>
                    <input
                        v-model="outgoing.custom_permit"
                        type="text"
                        name="custom"
                        class="form-control"
                        placeholder="Enter Custom Permit"
                        readonly
                    >
                </div>
                <div class="col-lg-6">
                <label>Cargo Insurance</label>
                    <input
                        v-model="outgoing.cargo_insurance"
                        type="text"
                        name="cargo"
                        class="form-control"
                        placeholder="Enter Cargo Insurance"
                        readonly
                    >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    v-model="outgoing.description"
                    class="form-control"
                    rows="3"
                    placeholder="Enter Description"
                    readonly
                />
                </div>
            </div>
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

export default {
  data () {
    return {
      outgoing   : [],
      etd   : '',
      eta   : '',
      createdDate: '',
      updatedDate: '',
    }
  },
  async mounted () {
    await this.$store.dispatch('outgoing/getOutgoingDetail', { idOutgoing: this.$route.params.id })
    this.outgoing    = this.$store.getters['outgoing/getOutgoingDetail'].result
    this.createdDate = moment(this.outgoing.created_at).format('DD/MM/Y HH:mm:ss')
    this.updatedDate = moment(this.outgoing.updated_at).format('DD/MM/Y HH:mm:ss')
    this.etd = moment(this.outgoing.etd).format('DD/MM/Y')
    this.eta = moment(this.outgoing.eta).format('DD/MM/Y')
  },
}
</script>