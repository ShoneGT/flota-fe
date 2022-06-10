import { api } from 'src/boot/axios'

export default {
  props: {
    dataModel: {
      type: Array,
      required: true,
      // default: () => {
      //   return [{
      //     url: '',
      //     dataValue: '',
      //     params: '',
      //   }]
      // }
    }
  },
  data: () => ({
    data: {},
    loaded: false,
    loadingSave: false
  }),
  methods: {
    saveData (url, formData) {
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
          this.$emit('SavedDataError', err)
          this.loadingSave = false
          console.log(err)
          console.log(err.response)
        })
    },

    renderData () {
      this.dataModel.forEach(el => {
        this.fetchData(el.url, el.dataValue, el.params)
      })
    },
    fetchData (url, dataValue, params) {
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
    this.renderData()
  },
  render () {
    const slot = this.$scopedSlots.default({
      loading: !this.loaded,
      data: this.data,
      saveData: this.saveData,
      loadingSave: this.loadingSave,
    })
    return Array.isArray(slot) ? slot[0] : slot;
  }
}
