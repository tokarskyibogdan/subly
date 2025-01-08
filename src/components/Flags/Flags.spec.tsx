import { render, screen } from '@testing-library/react';

import Flags from "./Flags";
import { MediaLanguage } from "src/models/media";

it("renders correct languages", () => {
  render(<Flags languages={[MediaLanguage.DE, MediaLanguage.EN]}/>);
  const deFlag = screen.getAllByTestId(MediaLanguage.DE);
  const enFlag = screen.getAllByTestId(MediaLanguage.EN);
  expect(deFlag).toHaveLength(1);
  expect(enFlag).toHaveLength(1);
});