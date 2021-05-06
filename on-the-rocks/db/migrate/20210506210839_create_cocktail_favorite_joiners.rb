class CreateCocktailFavoriteJoiners < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktail_favorite_joiners do |t|
      t.integer :cocktail_id
      t.integer :favorite_id

      t.timestamps
    end
  end
end
