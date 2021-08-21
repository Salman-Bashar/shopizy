import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose"
import Employee, { EmployeeDocument } from "../models/employee.model"

//Create new employee information
export function createEmployee(input: DocumentDefinition<EmployeeDocument>) {
  return Employee.create(input)
}

//Get all employees
export function getEmployees() {
  return Employee.find()
}

//Find an employee information
export function findEmployee(
  query: FilterQuery<EmployeeDocument>,
  options: QueryOptions = { lean: true }
) {
  return Employee.findOne(query, {}, options)
}

//Update employee information
export function updateEmployee(
  query: FilterQuery<EmployeeDocument>,
  update: UpdateQuery<EmployeeDocument>,
  options: QueryOptions
) {
  return Employee.findOneAndUpdate(query, update, options)
}

//Delete employee information
export function deleteEmployee(query: FilterQuery<EmployeeDocument>) {
  return Employee.deleteOne(query)
}
