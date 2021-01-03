import HttpClient from './http-client.interceptor';
import { Recipe } from 'types/recipe';

class MainApi extends HttpClient {
    private static classInstance?: MainApi;

    private constructor() {
        super('http://localhost:8080');
    }

    public static getInstance() {
        if (!this.classInstance) {
          this.classInstance = new MainApi();
        }
    
        return this.classInstance;
    }

    public getRecipes = () => this.instance.get<Recipe[]>('/recipes');
    
    public putRecipe = (recipe: Recipe) => this.instance.put<Recipe>('/recipe', recipe);
    
    public getCookingList = () => this.instance.get<(Recipe[])>('/cooking-list');
}

export default MainApi