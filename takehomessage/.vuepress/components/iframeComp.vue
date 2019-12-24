<template>
    <div align="center">
        <iframe width="600" height="600" frameBorder="0" :src="ihtml"></iframe>
    </div>
</template>

<script>
  export default {
      props: {
          ihtml: {
              type: String
          }
      }
  }
</script>
