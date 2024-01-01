import { Provider } from "react-redux"
import { render, screen } from "@testing-library/react";
import About  from "../components/About"
import store from "../store/index";


test('Render About', () => {
  render(
    <Provider store={store}>
      <About/>
    </Provider>
  )

  const headerText = screen.getByText('Resume Craft')

  expect(headerText).toBeInTheDocument()
})