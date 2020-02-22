export default class Debug {
  constructor(row,style,id,priority) {
    this.row = row
    this.style = style
    this.id = id
    this.priority = priority
    this.create = function(context) {
      console.log(this.style)
      context.session.setBreakpoint(this.row,this.style)
    }
    this.remove = function(context) {
      context.session.clearBreakpoint(this.row)
    }
    this.hide = function() {
    }
    this.move = function(row) {
      this.row = row
    }
  }
}