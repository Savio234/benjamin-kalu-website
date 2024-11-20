<template>
  <div class="max-w-[85%] mx-auto my-10">
    <embed
            src="/books/THREE_YEARS_OF_IMPACTFUL_LEGACIES_REPRESENTING_BENDE.pdf"
            class="w-full h-auto sm:h-[200vh] rounded-xl"
            width="100%"
          ></embed>

  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfUrl: '~/books/Legislative_Agenda_2.0.pdf',
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
p.instruction {
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
}
a {
  display: block;
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
