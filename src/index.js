/* eslint-disable */
import Button from '../packages/Button'
import Card from '../packages/Card'

const components = [Button, Card]

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (window && window.Vue) {
  Vue.use(install)
}

export default install

export { Button, Card }
