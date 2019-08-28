<template>
  <div class="form-wrapper">
    <a-form :form="form">
      <a-form-item
        :label-col="{ span: 10 }"
        :wrapper-col="{ span: 14 }"
        label="D币">
        <a-input-number :min="0" :max="999999" v-decorator="['cash', {
          initialValue: 0
        }]"/>
      </a-form-item>
      <a-form-item
        :label-col="{ span: 10 }"
        :wrapper-col="{ span: 14 }"
        label="D点">
        <a-input-number :min="0" :max="999999" v-decorator="['cashPoint', {
          initialValue: 0
        }]"/>
      </a-form-item>
      <a-form-item
        :label-col="{ span: 10 }"
        :wrapper-col="{ span: 14 }"
        label="金币">
        <a-input-number :min="0" :max="4000000000" v-decorator="['inventory', {
          initialValue: 0
        }]"/>
      </a-form-item>
      <a-form-item
        :label-col="{ span: 10 }"
        :wrapper-col="{ span: 14 }"
        label="时装硬币">
        <a-input-number :min="0" :max="999999" v-decorator="['coin', {
          initialValue: 0
        }]"/>
      </a-form-item>
      <a-form-item>
        <a-row>
          <a-col span="10"></a-col>
          <a-col span="12">
            <a-button type="primary" style="width: 88px;" @click="recharge">充 值</a-button>
          </a-col>
        </a-row>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: this.$form.createForm(this),
    }
  },
  methods: {
    recharge () {
      console.log(this.form)
      this.form.validateFields((err, values) => {
        if (err) {
          console.log(err)
          return 
        }
        if (Object.values(values).every(item => !item)) {
          this.$message.warning('至少有一个充值项数值大于1')
          return 
        }
        this.$emit('recharge', values)
      })
    }
  }
}
</script>