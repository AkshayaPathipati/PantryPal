import Search from "./Search";
import Recipe from "./Recipe";

describe("Search tags", () => {
  test("sets tags as active tags", () => {
    const search = new Search();

    search.setTagList([" Ingredient1 ", "Ingredient2"]);

    expect(search.getTagList().map((tag) => tag.getName())).toEqual([
      "ingredient1",
      "ingredient2",
    ]);
    expect(search.getTagList().every((tag) => tag.isActive())).toBe(true);
  });

  test("add tag", () => {
    const search = new Search();

    search.addTag("Ingredient3");
    search.addTag("skibidi");
    search.addTag("baka");
    search.addTag("toilet");

    expect(search.getTagList().map((tag) => tag.getName())).toEqual([
      "ingredient3",
      "skibidi",
      "baka",
      "toilet"
    ]);
    expect(search.getTagList().every((tag) => tag.isActive())).toBe(true);
  });

  test("get tags", () => {
    const search = new Search();

    search.setTagList([" Ingredient1 ", "Ingredient2"]);

    const tags = search.getTagList();

    expect(tags.map((tag) => tag.getName())).toEqual([
      "ingredient1",
      "ingredient2"
    ]);
    expect(tags.every((tag) => tag.isActive())).toBe(true);
  });

  test("get resulting recipes", () => {
    const search = new Search();
    search.setTagList(["ingredient1", "ingredient2"]);

    const recipe1 = new Recipe("user1", "recipe1", ["ingredient1", "ingredient2"], "Instructions for Recipe 1");
    const recipe2 = new Recipe("user2", "recipe2", ["ingredient2", "ingredient3"], "Instructions for Recipe 2");
    const recipe3 = new Recipe("user3", "recipe3", ["ingredient4"], "Instructions for Recipe 3");

    const results = search.getResults([recipe1, recipe2, recipe3]);

    expect(results.map((recipe) => recipe.recipeName)).toEqual([
      "recipe1",
      "recipe2"
    ]);
  });
});
