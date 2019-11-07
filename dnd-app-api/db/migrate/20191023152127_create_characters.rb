class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :spec
      t.string :race
      t.integer :age
      t.integer :str
      t.integer :dex
      t.integer :const
      t.integer :int
      t.integer :wis
      t.integer :char
      t.string :details
      t.integer :user_id

      t.timestamps
    end
  end
end
