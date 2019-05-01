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
