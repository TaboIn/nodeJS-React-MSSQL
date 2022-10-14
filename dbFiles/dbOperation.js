const config = require('./dbConfig');
const sql = require('mssql');

const getEmployees = async(firstname) => {
    try {
        let pool = await sql.connect(config);
        let employees = await pool.request().query(`Select * from EmployeeDem WHERE Firstname - '${firstname}'`)
        console.log(employees);
        return employees
    } catch(error) {
        console.log(error);
    }
}

const createEmployee = async(Employee) => {
    try {
        let pool = await sql.connect(config);

        let employees = await pool.request()
        .query(`INSERT INTO EmployeeDem VALUES
            (${Employee.EmployeeID}, 
            '${Employee.Firstname}', 
            '${Employee.Lastname}', 
             ${Employee.Age}, 
            '${Employee.Gender}')
        `)

        return employees;
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    createEmployee,
    getEmployees
}