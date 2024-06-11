<template>
  <main class="flex flex-col w-full">
    <section class="hero w-full h-auto sm:h-[85vh] bg-primaryGreen flex flex-col sm:flex-row items-center">
      <div class="text-section w-full sm:w-7/12 py-16">
        <div class="content mx-auto w-[85%] flex flex-col gap-2">
          <h2 class="text-white font-semibold">Get up to speed⚡</h2>
          <h4 class="text-white">
            See the latest projects that we are up to and actively working on to better improve our consistuencies
          </h4>
        </div>
      </div>
      <div class="image-sect w-full sm:w-5/12 h-full">
        <NuxtImg
          src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717588237/benjamin_kalu/house_meeting_ucqa7o.png"
          class="w-full h-full object-cover"
        />
      </div>
    </section>
    <section class="w-full py-16">
      <div class="content mx-auto w-[85%] flex flex-col gap-8">
        <h3 class="font-semibold">Constitution Review</h3>
        <p class="text-lg">
          The House of Representatives Committee on the Review of the Constitution of the Federal Republic of Nigeria,
          1999 (As Amended) was established pursuant to Section 62 of the Constitution of the Federal Republic of
          Nigeria, 1999 (As Amended) and Order 18 (9) of the Standing Orders of the House of Representatives. It is a
          special committee charged with the following responsibilities:
        </p>
        <ul class="text-lg flex flex-col pl-4 gap-8 list-disc">
          <li>
            Recommending the alteration of the Constitution of the Federal Republic of Nigeria 1999 and other Acts that
            require alteration in accordance with sections 8 and 9 of the Constitution;
          </li>
          <li>
            Receiving and considering proposals (bills) for alteration of the 1999 Constitution (As Amended) referred to
            it by the House;
          </li>
          <li>
            Creating a forum for relevant stakeholders and members of the public to make inputs to the Constitution
            review process with a view to enacting laws that address the needs and aspirations of the Nigerian people;
          </li>
          <li>
            Building a robust collaborative synergy with the Senate of the Federal Republic of Nigeria and with the 36
            States Houses of Assembly whose resolutions are part of the legislative journey of the constitution review
            process;
          </li>
          <li>
            Liaising with relevant government agencies, civil society organisations, multi-lateral and supranational
            agencies and bodies to achieve a wholesome amendment to the Nigerian constitution.
          </li>
        </ul>
      </div>
    </section>
    <section class="w-full py-16">
      <div class="content mx-auto w-[85%]">
        <h3 class="font-semibold">History Of The Nigerian Constitutional Development</h3>
        <div class="w-full flex flex-col gap-8 my-8">
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2">
              <p class="text-lg">
                <span class="font-semibold">Colonial -</span> Constitution of the Colony and Protectorate of Nigeria
              </p>
              <p>
                Amalgamated the Colony and Protectorate of Southern Nigeria and the Protectorate of Northern Nigeria,
                into a single colony
              </p>
            </div>
            <p class="text-lg text-primaryGreen">1914</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2">
              <p class="text-lg"><span class="font-semibold">Colonial -</span> The Hugh Clifford Constitution</p>
              <p>
                In 1919, pressured by the West African Congress, Governor Sir Hugh Clifford introduced the Clifford
                Constitution of 1922, which established Nigeria's first electoral system with limited franchise based on
                a high income requirement. It created a legislative council of 46 members, mostly officials, with
                limited legislative power restricted to the South. The executive council included no Nigerians.
                Subsequent governors, Cameroon and Bernard Boudillion, made minimal constitutional changes but divided
                Nigeria into East, West, and North, laying the foundation for future regionalism.
              </p>
            </div>
            <p class="text-lg text-primaryGreen">1922</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2">
              <p class="text-lg"><span class="font-semibold">Colonial -</span> Arthur Richards Constitution</p>
              <p>
                In late 1944, Governor Sir Arthur Richards introduced a new constitution aiming to unify Nigeria,
                accommodate its diversity, and increase African participation in governance. The constitution
                established a legislative council with limited elected representation and regional assemblies for
                discussion, not legislation. Despite reducing the property requirement for voting, it remained costly,
                and the franchise was restricted to Lagos and Calabar. Additionally, the nomination process excluded
                many elites from governance roles.
              </p>
            </div>
            <p class="text-lg text-primaryGreen">1946</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2">
              <p class="text-lg"><span class="font-semibold">Colonial -</span> John Macpherson Constitution</p>
              <p>
                Due to criticisms of the Richards Constitution, Governor Sir John Macpherson involved Nigerians
                extensively in creating a new constitution, leading to the Macpherson Constitution. It established a
                federal House of Representatives with 136 elected members and regional legislatures with legislative
                powers. The West and North had bicameral legislatures, including a house of chiefs, while the East had a
                unicameral legislature. Members of the federal legislature were nominated from the regional
                legislatures.
              </p>
            </div>
            <p class="text-lg text-primaryGreen">1951</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2">
              <p class="text-lg"><span class="font-semibold">Colonial -</span> Oliver Lyttelton Constitution</p>
              <p>
                Despite improvements, the Macpherson Constitution failed to maintain Nigerian unity, collapsing due to
                legislative conflicts. In 1953, Anthony Enahoro's proposal for independence in 1956 was opposed by
                Northerners, causing riots and a secession threat. To address the crisis, colonial secretary Oliver
                Lyttleton convened conferences in London (1953) and Lagos (1954), leading to the Lyttleton Constitution.
                This constitution introduced a federal system with regions and Lagos as the federal capital. It
                established separate courts for Nigeria and its regions and set the stage for regional self-governance:
                East and West in 1957, North in 1959, while Southern Cameroon opted out through a referendum.
              </p>
            </div>
            <p class="text-lg text-primaryGreen">1954</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2">
              <p class="text-lg"><span class="font-semibold">Colonial -</span> The Independence Constitution</p>
              <p>
                On 1st October 1960, Nigeria became independent, though the Queen remained the head of state,
                represented by Governor-General Dr. Nnamdi Azikiwe, while Tafawa Balewa was Prime Minister. The 1960
                constitution resembled the 1954 version but introduced citizenship provisions and a constitution
                amendment process. Legislative powers were split between central and regional bodies, with exclusive and
                concurrent lists. It featured a dual executive system with Azikiwe as the ceremonial head of state and
                Balewa as head of government with executive powers. Despite independence, imperial remnants persisted,
                prompting the creation of the 1963 republican constitution to fully sever colonial ties.
              </p>
            </div>
            <p class="text-lg text-primaryGreen">1960</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2">
              <p class="text-lg"><span class="font-semibold">Colonial -</span> The 1963 Republican Constitution</p>
              <p>
                The republican constitution was enacted on September 19, 1963, and took effect on October 1, 1963,
                following a constitutional conference in Lagos. Key changes included replacing the Queen with a
                President, Dr. Nnamdi Azikiwe, as head of state and commander-in-chief. The Supreme Court became the
                highest court of appeal, and the judicial service commission was abolished, with judicial appointments
                managed by the Prime Minister. The Senate and House of Representatives were expanded due to the creation
                of the Mid-Western state. Criticisms included the President being elected by the national assembly
                rather than the electorate, and the judiciary's compromised independence. Political crises led to the
                constitution's collapse and a military coup on January 15, 1966, initiating military rule until 1979.
              </p>
            </div>
            <p class="text-lg text-primaryGreen">1963</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2 w-full">
              <p class="text-lg"><span class="font-semibold">Military -</span> The Presidential Constitution of 1979</p>
              <p>
                General Murtala Muhammed aimed to restore civilian rule but was assassinated in 1975. His successor,
                Obasanjo, oversaw the transition and appointed a committee to draft a new constitution. The 1979
                constitution replaced the parliamentary system with a presidential one, introducing direct election of
                the President. It also established a bicameral legislature, state governors, and a judicial service
                commission for judicial appointments.
              </p>
            </div>
            <p class="text-lg text-primaryGreen w-fit">1979</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2 w-full">
              <p class="text-lg">
                <span class="font-semibold">Military -</span> Constitution of the Federal Republic of Nigeria
              </p>
              <p>
                Modified Presidential Federal System, including mandatory two-party system, 21 states, and greater local
                government autonomy.
              </p>
            </div>
            <p class="text-lg text-primaryGreen w-fit">1989</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2 w-full">
              <p class="text-lg">
                <span class="font-semibold">Military -</span> Constitution of the Federal Republic of Nigeria
              </p>
              <p>
                Additional modifications, including elaborate ethnic power sharing, greater decentralization, 30 states,
                13 percent resource revenue minimum for producing states, return to multi-parties.
              </p>
            </div>
            <p class="text-lg text-primaryGreen w-fit">1995</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2 w-full">
              <p class="text-lg">
                <span class="font-semibold">Military -</span> Constitution of the Federal Republic of Nigeria
              </p>
              <p>Basically restored 1979 Constitution, but with 36 states and the 13 percent derivation principle.</p>
            </div>
            <p class="text-lg text-primaryGreen w-fit">1999</p>
          </div>
          <div class="item-list w-full flex flex-col sm:flex-row sm:gap-16 items-start">
            <div class="w-3 h-3 my-2 border-primaryGreen border-4 rounded-full"></div>
            <div class="flex flex-col gap-2 w-full">
              <p class="text-lg">
                <span class="font-semibold">Civilian -</span> Constitution of the Federal Republic of Nigeria
              </p>
              <p>
                Modest amendments to 1999 Constitution, including electoral reforms and entrenchment of the National
                Industrial Court.
              </p>
            </div>
            <p class="text-lg text-primaryGreen w-fit">1999</p>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-8">
      <NuxtImg
        src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717689036/benjamin_kalu/timetable_ibjskh.png"
        class="w-[85%] h-auto mx-auto"
      />
    </section>
    <SectionsLatestNews />
    <SectionsPortal />
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
