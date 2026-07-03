import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../components/store";
import BookApp from "../components/BookApp";

describe("BookApp Component - Easy Level Tests", () => {
  test("renders_book_library_heading", async () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    expect(await screen.findByRole("heading", { name: /Book Store/i })).toBeInTheDocument();
  });

  test("renders_input_for_book_title", () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Enter book title/i)).toBeInTheDocument();
  });

  test("renders_input_for_author", () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Enter author/i)).toBeInTheDocument();
  });

  test("renders_subject_dropdown_with_Fiction_selected_by_default", () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    expect(screen.getByDisplayValue("Fiction")).toBeInTheDocument();
  });

  test("renders_input_for_year", () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Enter year/i)).toBeInTheDocument();
  });

  test("renders_add_book_button", () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    expect(screen.getByRole("button", { name: /Add Book/i })).toBeInTheDocument();
  });

  test("can_type_into_title_input", async () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    const titleInput = screen.getByPlaceholderText(/Enter book title/i);
    await userEvent.type(titleInput, "The Alchemist");
    expect(titleInput).toHaveValue("The Alchemist");
  });

  test("can_type_into_author_input", async () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    const authorInput = screen.getByPlaceholderText(/Enter author/i);
    await userEvent.type(authorInput, "Paulo Coelho");
    expect(authorInput).toHaveValue("Paulo Coelho");
  });

  test("can_select_a_genre", async () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    const genreSelect = screen.getByDisplayValue("Fiction");
    await userEvent.selectOptions(genreSelect, "Science");
    expect(genreSelect.value).toBe("Science");
  });

  test("can_type_into_year_input", async () => {
    render(
      <Provider store={store}>
        <BookApp />
      </Provider>
    );
    const yearInput = screen.getByPlaceholderText(/Enter year/i);
    await userEvent.type(yearInput, "1988");
    expect(yearInput).toHaveValue(1988);
  });

 
});
