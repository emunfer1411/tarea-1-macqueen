maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
basic.pause(2000)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
basic.pause(500)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
