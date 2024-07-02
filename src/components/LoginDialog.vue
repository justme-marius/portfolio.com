<template>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        v-for="filter in backdropFilterList"
        :key="filter.label"
        color="primary"
        label="Login"
        no-caps
        @click="filter.onClick"
      />

      <q-dialog v-model="dialog" :backdrop-filter="backdropFilter">
        <q-card>
          <q-card-section class="row items-center q-pb-none text-h4">
            Login
          </q-card-section>

          <q-card-section>
            <div class="q-pa-md" style="max-width: 400px">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <q-input
                  filled
                  v-model="name"
                  label="Your name *"
                  hint="Name and surname"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />

                <q-input
                  filled
                  type="number"
                  v-model="age"
                  label="Your age *"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val !== null && val !== '') || 'Please type your age',
                    (val) => (val > 0 && val < 100) || 'Please type a real age',
                  ]"
                />

                <q-toggle
                  v-model="accept"
                  label="I accept the license and terms"
                />

                <div>
                  <q-btn label="Submit" type="submit" color="primary" />
                  <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                  />
                </div>
              </q-form>
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from 'quasar'

export default {
  setup() {
    /**
     * Values for backdrop-filter are the same as in the CSS specs.
     * The following list is not an exhaustive one.
     *
     *'blur(4px)',
      'brightness(60%)',
      'invert(70%)',
      'grayscale(100%)',
      'contrast(40%)',
      'hue-rotate(120deg)',
      'sepia(90%)',
      'saturate(80%)'
     */
    const list = ["blur(4px) saturate(150%)"];

    const dialog = ref(false);
    const backdropFilter = ref(null);

    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)


    return {
      dialog,
      backdropFilter,
      backdropFilterList: list.map((filter) => ({
        label: filter,
        onClick: () => {
          backdropFilter.value = filter;
          dialog.value = true;
        },
      })),

      name,
      age,
      accept,
      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    };
  },
};
</script>
