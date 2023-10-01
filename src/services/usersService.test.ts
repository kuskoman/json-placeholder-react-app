import { UsersService } from "./usersService";

describe(`${UsersService.name} instance`, () => {
  const service = new UsersService();

  const exampleUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "u@ser.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "test.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const exampleUserCreateModel = { ...exampleUser, id: undefined };

  describe("getUsers", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.getUsers();
      expect(response.length).toBeGreaterThan(0);
    });
  });

  describe("getUser", () => {
    it("should return response when fetch is successful", async () => {
      const id = 1;
      const response = await service.getUser(id);
      expect(response.id).toEqual(id);
    });

    it("should throw error when fetch is unsuccessful", async () => {
      await expect(service.getUser(0)).rejects.toThrow("Failed to GET /users/0: Not Found");
    });
  });

  describe("createUser", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.createUser(exampleUserCreateModel);
      expect(response.name).toEqual(exampleUserCreateModel.name);
    });
  });

  describe("updateUser", () => {
    it("should return response when fetch is successful", async () => {
      const response = await service.updateUser(exampleUser);
      expect(response.name).toEqual(exampleUser.name);
    });
  });

  describe("deleteUser", () => {
    it("should return response when fetch is successful", async () => {
      await expect(service.deleteUser(1)).resolves.not.toThrow();
    });
  });
});
