import { App, DefineComponent } from 'vue'
import * as icons from '@element-plus/icons-vue'

export default (app: App) => {
	Object.keys(icons).forEach(key => {
		// @ts-ignore
		const icon = icons[key]
		app.component(key, icon)
	})
}
