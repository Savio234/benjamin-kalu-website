<template>
  <section class="w-full py-16 bg-light">
    <div class="content mx-auto flex flex-col gap-8 w-[90%]" v-if="latest">
      <h1 class="text-[#022924] mb-8 md:mb-16 font-adamina text-[2rem] md:text-4xl lg:text-5xl">
        News
      </h1>
      <div class="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 cursor-pointer">
        <div
          v-for="(item, index) in latest"
          :key="index"
          class="news-card bg-white relative shrink-0 rounded-xl border border-borderMuted
          overflow-hidden w-full min-h-[24.75rem]"
        >
          <div class="dark-bg absolute top-0 left-0">
            <div class="w-full relative h-[24.75rem]">
              <NuxtImg
                :src="item.attributes.main_image.data?.attributes.url"
                alt="News Image"
                class="object-cover w-full h-full"
              />
            </div>
          </div>

          <div class="card_content px-6 py-8 z-[2] top-1/2 relative flex flex-col gap-2">
            <p class="font-inter font-light text-sm text-white">
              {{ formatDate(item.attributes.date)}}
            </p>

            <h3 class="font-semibold text-lg text-white font-montserratAlternates">
              {{ item.attributes.title }}
            </h3>

            <p class="text-white text-sm">
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
  transition: transform 0.4s ease-in-out;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
