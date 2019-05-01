function shout(string) {
  return string.toUpperCase()
}

describe('shout(string)', function () {
  it('receives one argument and returns it in all caps', function (){
    except(shout('hello')).toEqual('HELLO')
  })})

function whisper(string) {
  return string.toLowerCase()
}

describe('whisper(string)', function () {
  it('received one argument and returns it in all lowercase', function (){
    except(whisper('HELLO')).toEqual('hello')
  })
})
function logWhisper(string) {
  console.log(string).toLowerCase
}

describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})
