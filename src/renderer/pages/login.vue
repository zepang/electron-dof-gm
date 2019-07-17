<template>
	<a-form :form="form">
		<a-form-item
			:label-col="formItemLayout.labelCol"
			:wrapper-col="formItemLayout.wrapperCol"
			label="Name"
		>
			<a-input
				v-decorator="[
					'服务器地址',
					{ rules: [{ required: true, message: 'Please input your name' }] }
				]"
				placeholder="服务器IP"
			/>
		</a-form-item>
		<a-form-item
			:label-col="formItemLayout.labelCol"
			:wrapper-col="formItemLayout.wrapperCol"
			label="Nickname"
		>
			<a-input
				v-decorator="[
					'数据库密码',
					{
						rules: [
							{ required: checkNick, message: 'Please input your nickname' }
						]
					}
				]"
				placeholder="数据库密码"
			/>
		</a-form-item>
		<a-form-item
			:label-col="formTailLayout.labelCol"
			:wrapper-col="formTailLayout.wrapperCol"
		>
			<a-input palceholder="端口号，例如：3306" />
		</a-form-item>
		<a-form-item
			:label-col="formTailLayout.labelCol"
			:wrapper-col="formTailLayout.wrapperCol"
		>
			<a-button type="primary" @click="check">
				连接数据库
			</a-button>
		</a-form-item>
	</a-form>
</template>

<script>
const formItemLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 8 },
};
const formTailLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 8, offset: 4 },
};
export default {
	data () {
		return {
			checkNick: false,
			formItemLayout,
			formTailLayout,
			form: this.$form.createForm(this),
		};
	},
	methods: {
		check () {
			this.form.validateFields(
				(err) => {
					if (!err) {
            console.info('success')
            this.login
					}
				},
			)
    },
    login () {

    }
	}
}
</script>