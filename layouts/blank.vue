<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        {
          rel : 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        { rel: 'stylesheet', href: '/css/select2.min.css' },
        { rel: 'stylesheet', href: '/css/bootstrap-datetimepicker.min.css' },
        { rel: 'stylesheet', href: '/css/style.bundle.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700' },
      ],
    }
  },
  middleware: 'authenticated',
}

</script>
