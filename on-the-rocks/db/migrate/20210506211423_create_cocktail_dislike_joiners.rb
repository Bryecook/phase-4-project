class CreateCocktailDislikeJoiners < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktail_dislike_joiners do |t|
      t.integer :cocktail_id
      t.integer :dislike_id

      t.timestamps
    end
  end
end
