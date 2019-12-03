import { user } from "./index.js";

it ("should set properties", () => {
    user.setFullName("Tom", "Black");
    const result = user.getFullName();
    expect(result).toEqual("Tom Black");
});