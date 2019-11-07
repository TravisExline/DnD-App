class CreateCharacterItems < ActiveRecord::Migration[6.0]
  def change
    create_table :character_items do |t|
      t.references :character, foreign_key: true
      t.references :item, foreign_key: true 

      t.timestamps
    end
  end
end
