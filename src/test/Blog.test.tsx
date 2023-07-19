import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"
import Blog from "../pages/Modalities"

describe("Blog page", () => {
  test("Should have 'Blog' on page", () => {
    render(<Blog />)

    screen.debug()

    const title = screen.getByText('Blog')
    expect(title).toBeInTheDocument()
  })
})