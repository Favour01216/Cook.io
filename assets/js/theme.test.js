const mockDocument = {
  documentElement: {
    dataset: {},
  },
};

const mockWindow = {
  matchMedia: () => ({
    matches: false,
  }),
};

const mockSessionStorage = {
  getItem: () => "dark",
};

const mockThemeBtn = {
  addEventListener: jest.fn(),
};

describe("theme.js", () => {
  beforeAll(() => {
    global.document = mockDocument;
    global.window = mockWindow;
    global.sessionStorage = mockSessionStorage;
    global.document.querySelector = jest.fn(() => mockThemeBtn);
  });

  afterAll(() => {
    delete global.document;
    delete global.window;
    delete global.sessionStorage;
  });

  it("should set the theme to the value stored in sessionStorage", () => {
    require("./theme.js");

    expect(mockDocument.documentElement.dataset.theme).toBe("dark");
  });

  it("should add a click event listener to the theme button", () => {
    require("./theme.js");

    expect(mockThemeBtn.addEventListener).toHaveBeenCalledWith(
      "click",
      expect.any(Function)
    );
  });
});
