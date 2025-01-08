import { getLastUpdatedAt } from "./date";

it("should render correct date phrase", () => {
  const date = "2021-08-01T00:00:00Z";

  expect(getLastUpdatedAt(date)).toBe("more than year ago");
});