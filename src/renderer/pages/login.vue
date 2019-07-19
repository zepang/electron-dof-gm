<template>
	<div id="background-video__wrapper">
    <video id="background-video" loop muted></video>
		<div class="form-wrapper">
      <h2 style="margin-bottom: 20px; text-shadow: 2px 2px 5px #000000;color: #fff;">Dof_GM</h2>
			<a-form :form="form">
				<a-form-item>
					<a-input
						v-decorator="[
							'host',
							{ 
								rules: [{ required: true, message: '请输入服务IP地址' }],
								initialValue: '94.191.40.190'
							}
						]"
						placeholder="服务器IP，例如：192.169.200.131"
					/>
				</a-form-item>
				<a-form-item>
					<a-input
						v-decorator="[
							'user',
							{ 
								rules: [{ required: true, message: '请输入数据库用户名' }],
								initialValue: 'game'
							}
						]"
						placeholder="数据库用户名，例如：game"
					/>
				</a-form-item>
				<a-form-item>
					<a-input
						v-decorator="[
							'password',
							{
								rules: [
									{ required: true, message: '请输入数据库密码' }
								],
								initialValue: 'uu5!^%jg'
							}
						]"
						placeholder="数据库密码， 例如：uu5!^%jg"
					/>
				</a-form-item>
				<a-form-item >
					<a-input-number style="width: 260px;" v-decorator="['port', {
						rules: [
							{ required: true, message: '请输入数据库端口号' }
						],
						initialValue: 3306
					}]" placeholder="端口号，例如：3306" />
				</a-form-item>
				<a-form-item>
					<a-button class="login-form-button" :type="btn.type" @click="check" :loading="btn.loading">
						{{ btn.text }}
					</a-button>
				</a-form-item>
			</a-form>
		</div>
		<div class="mask" v-show="isConnected"></div>
	</div>
</template>

<script>
import Bideo from '../assets/js/bideo.esm.js'
const videoMedia = require('../assets/night.mp4')
export default {
	data () {
		return {
			btn: {
				text: '连接数据库',
				loading: false,
				type: 'primary'
			},
			form: this.$form.createForm(this),
			isConnected: false
		};
	},
	mounted () {
		let bideo = new Bideo()
		bideo.init({
      videoEl: document.querySelector('#background-video'),
      container: document.querySelector('#background-video__wrapper'),
      resize: true,
      src: [
        {
          src: videoMedia,
          type: 'video/mp4'
        }
      ]
		})
	},
	methods: {
		check () {
			this.form.validateFields(
				(err, values) => {
					if (!err) {
						console.log(values)
						this.btn.loading = true
						this.btn.text = '正在连接数据库'
						this.login(values)
					}
				},
			)
		},
		login (data) {
			this.$createConnection(data)
			this.$connection.connect((err) => {
				if (err) {
					this.btn.loading = false
					this.btn.text = '连接数据库'
					this.$message.error('连接数据库失败，请仔细检查数据库配置信息')
					return
				}
				this.btn.loading = false
				this.btn.text = '连接数据库'
				this.$message.success('连接数据库成功，即将进入Dof-GM工具...')
				this.isConnected = true
				this.$router.push({path: '/'})
			})
		}
	}
}
</script>
<style lang="scss" scoped>
#background-video__wrapper {
  overflow: hidden;
  height: 100vh;
  position: relative;
  #background-video {
    height: 580px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.form-wrapper {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
  background-color: rgba(255, 255, 255, .2);
  padding: 10px 20px;
	.login-form-button {
		width: 100%;
	}
}

.mask {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99;
	opacity: 0;
	overflow: hidden;
}
</style>
