class CreateCocktails < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.text :ingredients, array: true, default: []
      t.string :instructions
      t.string :glass
      t.string :picture

      t.timestamps
    end
  end
end
