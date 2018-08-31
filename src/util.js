// 工具函数库
import config from './config'

export function getApi (url, data) {
	return new Promise((resolve, reject) => {
		wx.request({
		  url: config.host + url,
		  success: function (res) {
		  	console.log(res)
		  	if (res.data.code === 0) {
		  		resolve(res.data.data)
		  	} else {
		  		reject(res.data)
		  	}
		  }
		})
	})
}

export function showSuccess (text) {
	wx.showToast({
		title: text,
		icon: 'success'
	})
}