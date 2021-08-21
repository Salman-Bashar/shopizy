import { Request, Response } from "express"
import { get } from "lodash"
import {
  createEmployee,
  getEmployees,
  findEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employee.service"

//Add new employee information
export async function createEmployeeHandler(req: Request, res: Response) {
  const body = req.body

  const employee = await createEmployee({ ...body })

  return res.send(employee)
}

//Get all shops
export async function getEmployeesHandler(req: Request, res: Response) {
  const employees = await getEmployees()

  return res.send(employees)
}

//Get employee information
export async function getEmployeeHandler(req: Request, res: Response) {
  const employeeId = get(req, "params.employeeId")
  const employee = await findEmployee({ employeeId })

  if (!employee) return res.sendStatus(404)

  return res.send(employee)
}

//Update employee information
export async function updateEmployeeHandler(req: Request, res: Response) {
  const employeeId = get(req, "params.employeeId")
  const update = req.body

  const employee = await findEmployee({ employeeId })

  if (!employee) return res.sendStatus(404)

  const updatedEmployee = await updateEmployee({ employeeId }, update, {
    new: true,
  })

  return res.send(updatedEmployee)
}

//Delete employee information
export async function deleteEmployeeHandler(req: Request, res: Response) {
  const employeeId = get(req, "params.employeeId")

  const employee = findEmployee({ employeeId })

  if (!employee) return res.sendStatus(404)

  await deleteEmployee({ employeeId })

  res.sendStatus(200)
}
