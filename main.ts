while (true) {
    if (Kitronik_Move_Motor.measure() < 20) {
        for (let index = 0; index < randint(20, 30); index++) {
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 30)
        }
    } else {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 40)
    }
}
