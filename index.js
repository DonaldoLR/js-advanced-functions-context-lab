/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function (employeeArray) {
    return {
        firstName : employeeArray[0],
        familyName : employeeArray[1],
        title : employeeArray[2],
        payPerHour : employeeArray[3],
        timeInEvents : [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = function(arrOfEmployees){
    return arrOfEmployees.map((employee) => createEmployeeRecord(employee))
}

const createTimeInEvent = function (date) {
    this.timeInEvents.push({
        type: `TimeIn`, 
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0], 
    })

    return this
}

const createTimeOutEvent = function (date) {
    this.timeOutEvents.push({
        type: `TimeOut`, 
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0], 
    })

    return this
}

const hoursWorkedOnDate = function(date) {
    const clockedInObj = this.timeInEvents.find(obj => obj.date === date);
    const clockedOutObj = this.timeOutEvents.find(obj => obj.date === date);

    return clockedOutObj.hour / 100 - clockedInObj.hour / 100
}

const wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour    
}

const findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(obj => obj.firstName === firstName)
}

const calculatePayroll = function(array) {
    
    const test = array.map(employeeObj => allWagesFor.call(employeeObj))

    return test.reduce((accum, current) => accum += current)
}