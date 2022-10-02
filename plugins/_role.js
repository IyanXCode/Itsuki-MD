let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Elite V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Elite IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Elite III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Elite II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Elite I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Knight V'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'Knight IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Knight III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Knight II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Knight I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Master V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Master IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Master III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Master II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Master I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'King V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'King IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'King III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'King II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'King I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Lord V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Lord IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Lord III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Lord II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Lord I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'God V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'God IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'God III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'God II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'God I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Wibu V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Wibu IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Wibu III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Wibu II'
                                                                                                                                            : 'Super Wibu'
    user.role = role
    return !0
}

module.exports = handler
