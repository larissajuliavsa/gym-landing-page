import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"
import Contact from "../pages/Contact"

describe("Contact page", () => {
  test("Should have 'Contact' on page", () => {
    render(<Contact />)

    screen.debug()

    const title = screen.getByText('Contact')
    expect(title).toBeInTheDocument()
  })
})