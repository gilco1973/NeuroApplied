/**
 * Created by Gil Klainert
 */
'use strict';

var UserType = {};

UserType[UserType["Admin"] = 1] = "Admin"; //01
UserType[UserType["Technician"] = 2] = "Technician"; //010
UserType[UserType["Customer"] = 4] = "Customer";  //0100

module.exports = UserType;
