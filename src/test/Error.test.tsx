import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"
import Error from "../pages/Error"

describe("Error page", () => {
  test("Should have 'Error' on page", () => {
    render(<Error />)

    screen.debug()

    const title = screen.getByText('Error')
    expect(title).toBeInTheDocument()
  })
})