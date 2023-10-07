<template>
  <AppLayout title="Edit user">
    <template #header>
      <Breadcrumb :href="'users'" :title="'Users'" :property="user" />
    </template>

    <div class="py-12">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="w-full max-w-xs m-auto">
          <form
            class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
            @submit.prevent="submit"
          >
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="name"
              >
                Name
              </label>
              <input
                id="name"
                v-model="form.name"
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>

            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                E-mail
              </label>
              <input
                id="email"
                v-model="form.email"
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
              />
            </div>

            <div class="flex items-center justify-between">
              <BaseButton :form="form"></BaseButton>
            </div>
          </form>
          <p class="text-xs text-center text-gray-500">
            &copy; {{ $page.props.currentYear }} -
            <a
              class="text-blue-500"
              href="https://github.com/perisicnikola37"
              target="_blank"
              >@{{ $page.props.username }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
  import Breadcrumb from '@/Components/Breadcrumb.vue'
  import BaseButton from '@/Components/BaseButton.vue'
  import AppLayout from '@/Layouts/AppLayout.vue'

  export default {
    components: {
      AppLayout,
      Breadcrumb,
      BaseButton,
    },
    props: {
      user: Object,
    },
    data() {
      return {
        form: this.$inertia.form({
          name: this.user.name,
          email: this.user.email,
        }),
      }
    },
    methods: {
      submit() {
        this.form.put(this.route('users.update', this.user.id), {
          _token: this.$page.props.csrf_token,
        })
      },
    },
  }
</script>
