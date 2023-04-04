require("@babel/polyfill");
import Search from "./model/Search";
import { elements } from "./view/base";
import * as searchView from "./view/searchView";

// web app tolov
// Хайлтын query, үр дүн
// Тухайн үзүүлж байгаа жорууд
//Лайкалсан жорууд
// Захиалж байгаа жорууд

const state = {};
const controlSearch = async () => {
  try {
    // 1. Вэбээс хайлтын түлхүүр үгийг гаргаж авна
    const query = searchView.getInput();

    if (query) {
      // 2. Шинэ хайлтын объектийг үүсгэж өгн
      state.search = new Search(query);
      // 3. Хайлт хийхэд зориулж дэлгэцийг бэлтгэнэ
      // 4. Хайлтыг гүйцэтгэнэ
      await state.search.doSearch();
      // 5. Хайлтын үр дүн дэлгэцэнд үзүүлнэ.
      searchView.renderRecipes(state.search.result);
    }
  } catch (error) {
    alert(error);
  }
};
elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
