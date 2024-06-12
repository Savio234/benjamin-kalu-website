<template>
  <main class="flex flex-col w-full">
    <section class="py-12 w-full bg-[#FAFFFA]">
      <div class="content flex flex-col gap-8 mx-auto w-[85%]">
        <button
          @click="$router.push('/bills')"
          class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full"
        >
          <div class="content bg-white rounded-full py-3 px-6 text-black text-[16px] flex items-center gap-2">
            <svg-icon name="arrow_left_black" width="1rem" height="1rem" />
            Go Back
          </div>
        </button>
        <div class="w-full sm:w-8/12 flex flex-col gap-4">
          <h3 class="title">Acts Authentication Act (Amendment) Bill, 2023. HB.06</h3>
          <div class="sponsors w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>Bill Sponsors</p>
            <!-- sponsors list -->
            <ul>
              <li>Hon. Benjamin Kalu</li>
              <li>Hon. Benjamin Kalu</li>
              <li>Hon. Benjamin Kalu</li>
            </ul>
          </div>
          <div class="description w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>Description</p>
            <p>
              A Bill for an Act to Amend the Acts Authentication Act, Cap. A2, Laws of the Federation of Nigeria, 2004
              To Provide the Time Frame for the Performance of Functions of the Clerk of the National Assembly; and for
              Related Matters
            </p>
          </div>
          <div class="About w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>About the Bill (Explanatory Memorandum)</p>
            <p>
              This Bill seeks to amend the Acts Authentication Act, Cap A2 Laws of the Federation of Nigeria, 2004 to,
              among other things, provide the time frame for the performance of functions of the Clerk of the National
              Assembly under the Act.
            </p>
          </div>
          <div class="About w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>Functions of Members of the council</p>
            <div class="w-full flex flex-col gap-2">
              <p>The Council shall be responsible for</p>
              <ul class="list-disc px-4 flex flex-col gap-2">
                <li>
                  initiating, formulating, reviewing and implementing national composite policy on cassava from time to
                  time; the proper implementation of the provisions of this Bill
                </li>
                <li>
                  Prescribing the quantity of cassava flour that shall be included by makers of edible flour in line
                  with the provisions of this Bill;
                </li>
                <li>
                  register and maintain the data base of all commercial and industrial makers, commercial users and
                  producers of edible flour in Nigeria;
                </li>
                <li>
                  ensure that all bakers and users of edible flour comply with the prescribed quantity of cassava
                  prescribed by the Committee under this Bill or Regulations made pursuant to the provisions of this
                  Bill. mobilizing internal and external resources, including technical assistance for cassava farmers,
                  their support institutions, associations and non-governmental organizations, marketing their products
                  and services; monitoring the implementation of and compliance with Federal Government directives,
                </li>
                <li>incentives and facilities for the development cassava in Nigeria;</li>
                <li>
                  and carrying out such other activities as are necessary, incidental or expedient for giving full
                  effect to the functions of the Council under this Bill
                </li>
              </ul>
            </div>
          </div>
          <Progressbar percentage-fill="20%" />
          <div class="stage flex flex-col w-fit gap-4">
            <h5 class="font-semibold">Bill Status</h5>
            <ul class="flex flex-col gap-2">
              <li>First Reading: <span>12/01/2022</span></li>
              <li>Second Reading:</li>
              <li>Committee Stage:</li>
              <li>Third Reading:</li>
              <li>Harmonization:</li>
              <li>Assent:</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-between mx-auto w-[85%] mt-8">
        <MainButton append-icon="attachment_white">Download Brief</MainButton>
        <div class="flex flex-col gap-2">
          <p>Resources</p>
          <a href="" class="text-primaryGreen">Lead Debate</a>
          <a href="" class="text-primaryGreen">Committee Report</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
