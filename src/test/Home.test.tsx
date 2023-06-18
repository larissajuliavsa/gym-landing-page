import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"
import Home from "../pages/Home"

describe("Home page", () => {
  test("Should have 'Home' on page", () => {
    render(<Home />)

    screen.debug()

    const title = screen.getByText('Home')
    expect(title).toBeInTheDocument()
  })
})