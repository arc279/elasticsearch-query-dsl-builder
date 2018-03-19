import 'babel-polyfill'
import 'whatwg-fetch'

import elem_range from './elem.range.vue'
Vue.component('search-elem-range', elem_range)
import elem from './elem.vue'
Vue.component('search-elem', elem)
import folder from './folder.vue'
Vue.component('search-folder', folder)
import item from './item.vue'
Vue.component('search-item', item)

export function buildElasticsearchDsl(node) {
  let ret = []

  switch(node.type) {
    case "must":
    case "should":
    case "must_not": // fallthrough
      if(node.children.length > 0) {
        for(let x of node.children) {
          let y = buildElasticsearchDsl(x)
          if(y instanceof Array) {
            if(y.length > 0) {
              ret.push(y)
            }
          } else {
            ret.push(y)
          }
        }
      }

      return {
        "bool": {
          [node.type]: ret
        }
      }

    default:
      switch(node.op) {
      case "range":
        ret.push({
          [node.op]: {
            [node.key]: node.value
          }
        });
        break

      default:
        if(node.value.trim().length > 0) {
          ret.push({
            [node.op]: {
              [node.key]: node.value
            }
          });
        }
        break

      }

      return ret;
  }

  throw new Error("should not reached here.");
}


