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
function logShout(string) {
  var uppercase = string.toUpperCase();
  console.log(uppercase);
}

describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

function logWhisper(string) {
  var lowercase = string.toLowerCase();
  console.log(lowercase);
}

describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})
