<template>
	<div id="background-video__wrapper">
    <video id="background-video" loop muted></video>
		<div class="form-wrapper">
      <h2 style="margin-bottom: 20px; text-shadow: 2px 2px 5px #000000;color: #fff;">Dof_GM</h2>
			<a-form :form="form">
				<a-form-item>
					<a-input
						v-decorator="[
							'服务器地址',
							{ rules: [{ required: true, message: 'Please input your name' }] }
						]"
						placeholder="服务器IP，例如：192.169.200.131"
					/>
				</a-form-item>
				<a-form-item>
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
				<a-form-item>
					<a-input placeholder="端口号，例如：3306" />
				</a-form-item>
				<a-form-item>
					<a-button class="login-form-button" type="primary" @click="check">
						连接数据库
					</a-button>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>

<script>
import Bideo from '../assets/js/bideo.esm.js'
const videoMedia = require('../assets/night.mp4')
export default {
	data () {
		return {
			checkNick: false,
			form: this.$form.createForm(this),
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
</style>
