<template>
  <section class="w-full py-16 bg-light">
    <div class="content mx-auto flex flex-col gap-8 w-[85%]" v-if="latest">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        <div
          v-for="(item, index) in latest"
          :key="index"
          class="news-card bg-white rounded-xl border border-borderMuted overflow-hidden"
        >
          <div class="h-52">
            <img
              :src="item.attributes.main_image.data?.attributes.url"
              alt="News Image"
              class="object-cover w-full h-full"
            />
          </div>

          <div class="px-6 py-8 flex flex-col gap-2">
            <div>
              <span class="bg-[#51128126] text-[#511281] p-2 rounded-md text-sm font-montserratAlt">News</span>
            </div>
            <p class="font-inter font-light text-sm text-blackMain">
              {{ formatDate(item.attributes.date) }}
            </p>

            <h3 class="font-semibold text-lg text-gray-800 font-montserratAlternates">
              {{ item.attributes.title }}
            </h3>

            <p class="text-textGray text-sm">
              {{ item.attributes.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center" v-else>
      <iframe
        src="https://lottie.host/embed/6ebb5dec-8bd7-4193-b110-906eb5a41b05/Bv9PZBlVeE.json"
        height="200px"
        width="200px"
      ></iframe>
      <p class="w-fit">Loading...</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  newsData: {
    type: Array,
    default: () => [
      {
        id: 1,
        attributes: {
          title: 'Flood: Pan-African Parliament declares support for Nigerian Victims, Others',
          description: 'Conference of Speakers at Pan-African Parliament (PAP) under the African Union (AU) has...',
          date: '2024-09-21',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 2,
        attributes: {
          title: 'Kalu calls for $200m aid to tackle flood crisis in Borno, Yobe, Adamawa',
          description: 'Deputy Speaker, House of Representatives, Hon. Benjamin Kalu disclosed a $200 million...',
          date: '2024-09-20',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 3,
        attributes: {
          title: 'Kalu Calls For Urgent Global Aid To Address Devastating Floods In Borno, Yobe, Adamawa',
          description: 'Addressing the special session of the ongoing...',
          date: '2024-09-20',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 4,
        attributes: {
          title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
          description: 'In a statement issued on Monday by Levinus Nwabughiogu, Chief Press Secretary to...',
          date: '2024-03-03',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 5,
        attributes: {
          title: 'Constitution review: Reps call for Memoranda',
          description:
            'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready...',
          date: '2024-03-03',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 6,
        attributes: {
          title: 'Constitution review: Reps call for Memoranda',
          description:
            'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready...',
          date: '2024-03-03',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 7,
        attributes: {
          title: 'Constitution review: Reps call for Memoranda',
          description:
            'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready...',
          date: '2024-03-03',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 8,
        attributes: {
          title: 'Constitution review: Reps call for Memoranda',
          description:
            'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready...',
          date: '2024-03-03',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 9,
        attributes: {
          title: 'Constitution review: Reps call for Memoranda',
          description:
            'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready...',
          date: '2024-03-03',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 10,
        attributes: {
          title: 'Constitution review: Reps call for Memoranda',
          description:
            'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready...',
          date: '2024-03-03',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 11,
        attributes: {
          title: 'Constitution review: Reps call for Memoranda',
          description:
            'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready...',
          date: '2024-03-03',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
      {
        id: 12,
        attributes: {
          title: 'Constitution review: Reps call for Memoranda',
          description:
            'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready...',
          date: '2024-03-03',
          image_url:
            'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
          main_image: {
            data: {
              attributes: {
                url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png',
              },
            },
          },
        },
      },
    ],
  },
});

const latest = computed(() => props.newsData);

function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}
</script>

<style lang="scss" scoped>
.news-card {
  transition: transform 0.2s ease-in-out;
}

.news-card:hover {
  transform: translateY(-5px);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
