import { api } from 'src/boot/axios'

import { defineComponent } from 'vue';

export default defineComponent ({
  props: {
    dataModel: {
      type: Array,
      required: true,
    }
  },
  data: () => ({
    data: {},
    loaded: false,
    loadingSave: false
  }),
  methods: {
    saveData (url, formData) {
      console.log('savedaa', url, formData)
      this.loadingSave = true
      api.post(url, formData)
        .then(({ data }) => {
          this.$q.notify({
            message: 'Success',
            color: 'positive'
          })
          this.$emit('SavedData', data)
          this.loadingSave = false
        }, err => {
          const { response } = err
          console.log('err', response)

          this.$q.notify({
            message: response.data.message[0],
            color: 'red-4'
          })
          this.loadingSave = false
        })
    },
    renderData (data) {
      data.forEach(el => {
        this.fetchData(el.url, el.dataValue, el.params)
      })
    },
    fetchData (url, dataValue, params) {
      this.loaded = false
      api.get(url, {params})
        .then(({ data })=> {
          this.data[dataValue] = data
          setTimeout(() => {
            this.loaded = true
          }, 500)
        }, err => {
          console.log(err)
          console.log(err.response)
        })
    }
  },
  created () {
    this.renderData(this.dataModel)
  },
  render () {
    return this.$slots.default({
      loading: !this.loaded,
      data: this.data,
      saveData: this.saveData,
      loadingSave: this.loadingSave,
    })
  }
})
