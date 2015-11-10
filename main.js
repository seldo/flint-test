import * as async from "async"
// import "@seldo%2Finstall-me" - no worky

view Main {
  let thing = "this"
  let otherthing = "that"

  <div>
    <h1>Hello, world!</h1>
	<button onClick={show}>Whut</button>
	<p>How does {thing} even work?</p>
  </div>

  function show() {
    let x = thing
    thing = otherthing
    otherthing = x
    var z = ['a','b','c']
    async.each(z,function(item,cb) {
      console.log(item)
      cb()
    })
  }

  $ = {
    color: 'darkgray',
    padding: 20
  }
}
