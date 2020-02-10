import Watcher from './watcher'

function factory(cb) {
 return new Watcher(cb) 
}

export default factory