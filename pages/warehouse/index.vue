<style lang="scss">
  .vgt-table {
    font-size: 14px !important;
    border-color: #fff !important;
    padding: 10px;

    thead th{
      background: #fff;
      border-bottom: 2px solid #ebedf2 !important;
      padding-left: 25px;
    }

    th.line-numbers {
      background: #fff;
      border-bottom: 1px solid #ebedf2;
      border-right: #fff !important;
    }

    .vgt-checkbox-col {
      background: #fff !important;
      border-bottom: 1px solid #ebedf2 !important;
      border-right: #fff !important;
      padding-left: 25px;
    }

    td {
      border-bottom: 1px solid #ebedf2 !important;
    }

    th:first-child, td:first-child { padding-left: 25px; }

    td:last-child { padding-right: 25px; }
    th:last-child { padding-right: 40px; }

    th:last-child.sortable:before, th:last-child.sortable:after {
      right: 25px;
    }
  }

  .vgt-wrap__footer {
    background: #fff;
    border: #fff;
    border-top: 1px solid #ebedf2;
    padding-left: 25px;
    padding-right: 25px;
  }
</style>

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
    <vue-good-table
      style-class="vgt-table table-hover"
      :columns="columns"
      :rows="rows"
      :pagination-options="{enabled: true}"
      max-height="400px"
      :line-numbers="true"
      :fixed-header="true"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Code',
          field: 'code',
        },
        {
          label: 'Location',
          field: 'location',
        },
        {
          label: 'Address',
          field: 'address',
        },
        {
          label: 'Country',
          field: 'country',
        },
        {
          label: 'Status',
          field: 'status',
        },
        /* {
          label: 'Create By',
          field: 'create_by',
        },
        {
          label: 'Create Date',
          field: 'create_date',
        }, */
        {
          label: 'Action',
          field: 'action',
        },
      ],
      rows: [],
    }
  },
  async created () {
    const app  = this
    await this.$store.dispatch('warehouse/list')
    const data = this.$store.getters['warehouse/getWarehouse']
    data.map(function (value, key) {
      app.rows.push(value)
    })
  },
}
</script>
