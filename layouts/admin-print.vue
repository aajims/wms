<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  head () {
    return {
      link: [
        {
          rel : 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      ],
    }
  },
}

</script>
