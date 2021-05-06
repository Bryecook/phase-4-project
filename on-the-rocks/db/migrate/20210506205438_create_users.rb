class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :hometown
      t.string :picture
      t.string :password_digest

      t.timestamps
    end
  end
end
